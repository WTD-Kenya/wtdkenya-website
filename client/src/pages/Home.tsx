import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import UpcomingEvents from "@/components/sections/UpcomingEvents";
import BlogHighlights from "@/components/sections/BlogHighlights";
import CommunitySection from "@/components/sections/CommunitySection";
import PartnersSection from "@/components/sections/PartnersSection";
// import TestimonialSection from "@/components/sections/TestimonialSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutPreview />
        <PartnersSection />
        <UpcomingEvents />
        <BlogHighlights />
        <CommunitySection />
        {/* <FAQ /> */}
        {/* <TestimonialSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
