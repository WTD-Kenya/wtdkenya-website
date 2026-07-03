import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, type MeetupEvent, type HashnodePost } from "@shared/schema";
import { z } from "zod";

// Cloudinary imports
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary using environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  // Meetup API proxy
  app.get("/api/events", async (req, res) => {
    try {
      const meetupApiKey = process.env.MEETUP_API_KEY || process.env.VITE_MEETUP_API_KEY;
      if (!meetupApiKey) {
        res.status(500).json({ error: "Meetup API key not configured" });
        return;
      }

      // Fetch from Meetup API
      const status = req.query.status === "past" ? "past" : "upcoming";
      const order = status === "past" ? "&desc=true" : "";
      const response = await fetch(`https://api.meetup.com/write-the-docs-kenya/events?status=${status}&page=20${order}`, {
        headers: {
          'Authorization': `Bearer ${meetupApiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Meetup API error: ${response.status}`);
      }

      const data = await response.json();
      
      // Transform Meetup data to our format
      const events: MeetupEvent[] = data.map((event: any) => ({
        id: event.id,
        title: event.name,
        description: event.description || '',
        dateTime: event.time ? new Date(event.time).toISOString() : new Date().toISOString(),
        venue: event.venue ? {
          name: event.venue.name,
          address: event.venue.address_1 || ''
        } : undefined,
        link: event.link,
        going: event.yes_rsvp_count || 0
      }));

      res.json(events);
    } catch (error) {
      console.error('Meetup API error:', error);
      res.status(500).json({ error: "Failed to fetch events from Meetup API" });
    }
  });

  // Hashnode API proxy
  app.get("/api/blog", async (req, res) => {
    try {
      // Hashnode GraphQL query
      const query = `
        query GetPosts($host: String!) {
          publication(host: $host) {
            posts(first: 20) {
              edges {
                node {
                  id
                  title
                  brief
                  coverImage {
                    url
                  }
                  slug
                  publishedAt
                  author {
                    name
                    profilePicture
                  }
                  url
                }
              }
            }
          }
        }
      `;

      const variables = {
        host: "wtdkenya.hashnode.dev"

        // host: "wtdkenya.hashnode.dev" // Use just the subdomain, not the full URL
      };

      const response = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          // No API key needed for public blogs
        },
        body: JSON.stringify({ query, variables })
      });

      const data = await response.json();
      const posts = data.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
      res.json(posts);
    } catch (err) {
      console.error("Hashnode fetch error:", err);
      res.status(500).json({ error: "Failed to fetch blog posts from Hashnode" });
    }
  });

  // Cloudinary Gallery API
  // This endpoint fetches optimized image URLs from a specific Cloudinary folder
  app.get("/api/gallery", async (req, res) => {
    try {
      const folder = "wtdsummit2025";
      const result = await cloudinary.search
        .expression(`folder:${folder} AND resource_type:image`)
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute();

      // Map to { image, caption }
      const images = result.resources.map((img: any) => ({
        image: img.secure_url,
        caption: img.context?.custom?.caption || img.public_id.split("/").pop().replace(/[-_]/g, " ").replace(/\.[^/.]+$/, ""),
      }));

      res.json(images);
    } catch (err) {
      console.error("Cloudinary fetch error:", err);
      res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
    }
  });

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}