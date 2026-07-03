import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ConferenceHighlight from "@/components/sections/ConferenceHighlight";
import AboutPreview from "@/components/sections/AboutPreview";
import PastEventsSection from "@/components/sections/PastEventsSection";
import BlogHighlights from "@/components/sections/BlogHighlights";
import CommunitySection from "@/components/sections/CommunitySection";
import PartnersSection from "@/components/sections/PartnersSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ConferenceHighlight />
        <AboutPreview />
        <CommunitySection />
        <PartnersSection />
        <PastEventsSection />
        <BlogHighlights />
        <TestimonialSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
