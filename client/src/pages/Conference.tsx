// Import Helmet for managing document head
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/consection/HeroSec";
import AboutSection from "@/components/consection/AboutSec";
import ScheduleSection from "@/components/consection/ScheduleSection";
import SpeakersSection from "@/components/consection/SpeakersSection";
import RegistrationSection from "@/components/consection/RegistrationSection";
import VenueSection from "@/components/consection/VenueSection";
import SponsorsSection from "@/components/consection/SponsorsSection";
import FAQSection from "@/components/consection/FAQSection";
import ContactSection from "@/components/consection/ContactSection";

export default function Conference() {
    return (
        <div className="min-h-screen bg-white">
            {/* SEO meta tags for better search engine ranking and sharing */}
            <Helmet>
                <title>Conference 2024 | Your Event Name</title>
                <meta
                    name="description"
                    content="Join us at Conference 2025 for insightful talks, networking, and more. Register now!"
                />
                {/* Open Graph tags for social media sharing */}
                <meta property="og:title" content="Conference 2024 | Your Event Name" />
                <meta
                    property="og:description"
                    content="Join us at Conference 2024 for insightful talks, networking, and more. Register now!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/conference" />
                <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Conference 2024 | Your Event Name" />
                <meta
                    name="twitter:description"
                    content="Join us at Conference 2024 for insightful talks, networking, and more. Register now!"
                />
                <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
            </Helmet>
            <Navbar />
            <main className="scroll-smooth">
                {/* Main content sections for the conference page */}
                <HeroSection />
                <AboutSection />
                <ScheduleSection />
                <SpeakersSection />
                <RegistrationSection />
                <VenueSection />
                <SponsorsSection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}