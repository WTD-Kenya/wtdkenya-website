import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import conferenceData from "@/data/upcomingConference.json";

const FALLBACK_IMAGE = "https://cdn.sessionize.com/image/00000000-0000-0000-0000-000000000000.jpg";

export default function SpeakersSection() {
  const speakers = conferenceData.speakers;
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-kenya-red text-center mb-12">Meet Our Speakers</h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="relative"
        >
          <CarouselContent>
            {speakers.map((speaker) => (
              <CarouselItem key={speaker.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full">
                  <img
                    src={speaker.image || FALLBACK_IMAGE}
                    alt={speaker.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-kenya-red"
                  />
                  <h3 className="text-xl font-semibold text-kenya-black mb-1">{speaker.name}</h3>
                  <p className="text-kenya-green font-medium mb-3">{speaker.tagline}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-4">{speaker.bio}</p>
                  {speaker.topics.length > 0 && (
                    <p className="text-gray-600 text-xs italic mb-4">
                      Speaking on: {speaker.topics.join(", ")}
                    </p>
                  )}
                  <div className="flex justify-center space-x-4">
                    {speaker.social.x && (
                      <a
                        href={speaker.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 transition"
                      >
                        <i className="fab fa-twitter text-2xl"></i>
                      </a>
                    )}
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition"
                      >
                        <i className="fab fa-linkedin text-2xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
