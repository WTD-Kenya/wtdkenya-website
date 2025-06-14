import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  message: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// External API types
export interface MeetupEvent {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  venue?: {
    name: string;
    address: string;
  };
  link: string;
  going: number;
}

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  coverImage?: string;
  slug: string;
  publishedAt: string;
  author: {
    name: string;
    profilePicture?: string;
  };
  url: string;
}
