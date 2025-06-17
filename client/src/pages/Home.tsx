import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import BlogHighlights from "@/components/sections/BlogHighlights";
import CommunitySection from "@/components/sections/CommunitySection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
// import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <CommunitySection />
        <PartnersSection />
        <UpcomingEvents />
        <BlogHighlights />
        <TestimonialSection />
        <FAQ />
        
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}

// HeroSection – Big value prop + primary CTA

// Social Proof & Impact – Member counts, event stats, partner logos

// AboutPreview – Mission, who you are in 2–3 blurbs

// PartnersSection – Logos carousel/grid

// UpcomingEvents – Next 2–3 events with “Register” buttons

// BlogHighlights – Latest articles/tutorials as cards

// CommunitySection – “Join our Slack/Discord” + member activity

// TestimonialSection – Rotating member quotes

// FAQ – Accordion‑style common questions

// NewsletterSignup – Simple email field + “Subscribe” CTA

// Call‑to‑Action Banner – Full‑width invite (“Become a Member”)

// ContactSection – Contact form + social links
