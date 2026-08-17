import { Button } from "@/components/ui/button";
import type { MeetupEvent } from "@/lib/types";

interface EventCardProps {
  event: MeetupEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleRSVP = () => {
    if (event.link.startsWith("/")) {
      window.location.href = event.link;
      return;
    }

    window.open(event.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center text-sm text-kenya-red font-medium">
          <i className="fas fa-calendar mr-2"></i>
          <span>{formatDate(event.dateTime)}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-gray-900 line-clamp-2">
          {event.title}
        </h3>
        <p className="mt-3 text-gray-600 line-clamp-3">
          {event.description}
        </p>
        {event.venue && (
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>{event.venue.name}</span>
          </div>
        )}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            <i className="fas fa-users mr-1"></i>
            {event.attendanceLabel || `${event.going} attending`}
          </div>
          <Button 
            onClick={handleRSVP}
            className="bg-kenya-red text-white hover:bg-kenya-red/90"
            size="sm"
          >
            {event.actionLabel || "RSVP on Meetup"}
            <i className={`fas ${event.link.startsWith("/") ? "fa-arrow-right" : "fa-external-link-alt"} ml-2`}></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
