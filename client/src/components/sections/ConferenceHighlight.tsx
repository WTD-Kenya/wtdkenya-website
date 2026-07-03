import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import conferenceData from "@/data/upcomingConference.json";

export default function ConferenceHighlight() {
  const { event, speakers, schedule } = conferenceData;
  const featuredSpeakers = speakers.filter((speaker) => speaker.image).slice(0, 6);

  return (
    <section className="py-16 bg-kenya-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block bg-kenya-red text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Upcoming Conference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{event.name}</h2>
            <p className="text-gray-300 text-lg mb-2">
              {event.displayDate} · {event.venue}
            </p>
            <p className="text-gray-300 text-lg mb-8">
              A day of talks, workshops, and networking with {speakers.length} speakers across{" "}
              {schedule.sessions.length} sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/conference">
                <Button className="bg-kenya-red text-white hover:bg-kenya-red">
                  View Schedule & Speakers
                </Button>
              </Link>
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-kenya-black"
                >
                  Register Now
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {featuredSpeakers.map((speaker) => (
              <div key={speaker.id} className="text-center">
                <img
                  src={speaker.image!}
                  alt={speaker.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-kenya-green"
                />
                <p className="mt-2 text-sm text-gray-200 line-clamp-1">{speaker.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
