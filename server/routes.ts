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
      const response = await fetch(`https://api.meetup.com/write-the-docs-kenya/events?status=upcoming&page=20`, {
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
      const hashnodeApiKey = process.env.HASHNODE_API_KEY || process.env.VITE_HASHNODE_API_KEY;
      
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
        host: "https://wtdkenya.hashnode.dev/" 
        // hashnode publication host
      };

      const response = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(hashnodeApiKey ? { 'Authorization': `Bearer ${hashnodeApiKey}` } : {})
        },
        body: JSON.stringify({ query, variables })
      });

      if (!response.ok) {
        throw new Error(`Hashnode API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.errors) {
        throw new Error(`Hashnode GraphQL errors: ${JSON.stringify(data.errors)}`);
      }

      // Transform Hashnode data to our format
      const posts: HashnodePost[] = data.data?.publication?.posts?.edges?.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        brief: edge.node.brief,
        coverImage: edge.node.coverImage?.url,
        slug: edge.node.slug,
        publishedAt: edge.node.publishedAt,
        author: {
          name: edge.node.author.name,
          profilePicture: edge.node.author.profilePicture
        },
        url: edge.node.url
      })) || [];

      res.json(posts);
    } catch (error) {
      console.error('Hashnode API error:', error);
      res.status(500).json({ error: "Failed to fetch blog posts from Hashnode API" });
    }
  });

  // Cloudinary Gallery API
  // This endpoint fetches optimized image URLs from a specific Cloudinary folder
  app.get("/api/gallery", async (req, res) => {
    try {
      const folder = "wtdsummit2025"; 
      // Search for images in the specified folder
      const result = await cloudinary.search
        .expression(`folder:${folder}`)
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute();

      // Map and optimize images for web (400x300, auto quality/format)
      const images = result.resources.map((img: any) =>
        cloudinary.url(img.public_id, {
          width: 400,
          height: 300,
          crop: "fill",
          quality: "auto",
          fetch_format: "auto",
        })
      );
      res.json(images);
    } catch (err) {
      console.error("Cloudinary API error:", err);
      res.status(500).json({ error: "Failed to fetch images from Cloudinary" });
    }
  });

  // Create and return the HTTP server
  const httpServer = createServer(app);
  return httpServer;
}