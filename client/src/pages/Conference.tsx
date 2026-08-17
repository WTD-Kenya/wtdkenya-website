// Import Helmet for managing document head
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroScheduleSection from "@/components/consection/HeroScheduleSection";
import SpeakersSection from "@/components/consection/SpeakersSection";
import VenueSection from "@/components/consection/VenueSection";
import SponsorsSection from "@/components/consection/SponsorsSection";
import FAQSection from "@/components/consection/FAQSection";

export default function Conference() {
    return (
        <div className="min-h-screen bg-white">
            {/* SEO meta tags for better search engine ranking and sharing */}
            <Helmet>
                <title>Write The Docs Kenya Conference 2026</title>
                <meta
                    name="description"
                    content="Revisit the Write The Docs Kenya Conference 2026, held on August 8, 2026 at KCA University, including its speakers, schedule, venue, and partners."
                />
                {/* Open Graph tags for social media sharing */}
                <meta property="og:title" content="Write The Docs Kenya Conference 2026" />
                <meta
                    property="og:description"
                    content="Revisit the Write The Docs Kenya Conference 2026, held on August 8, 2026 at KCA University."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://wtdke.netlify.app/conference" />
                <meta property="og:image" content="https://wtdke.netlify.app/og-image.jpg" />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Write The Docs Kenya Conference 2026" />
                <meta
                    name="twitter:description"
                    content="Revisit the Write The Docs Kenya Conference 2026, held on August 8, 2026 at KCA University."
                />
                <meta name="twitter:image" content="https://wtdke.netlify.app/og-image.jpg" />
            </Helmet>
            <Navbar />

            <main className="scroll-smooth">
                {/* Main content sections for the conference page */}
                <HeroScheduleSection />
                <SpeakersSection />
                <VenueSection />
                <SponsorsSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}
