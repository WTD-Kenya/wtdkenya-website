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

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface CommunityStats {
  members: string;
  events: string;
  posts: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}