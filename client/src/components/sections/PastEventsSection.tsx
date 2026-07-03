import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import EventCard from "@/components/EventCard";
import { Link } from "wouter";
import type { MeetupEvent } from "@/lib/types";

export default function PastEventsSection() {
  const { data: events, isLoading, error } = useQuery<MeetupEvent[]>({
    queryKey: ["/api/events?status=past"],
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-kenya-black sm:text-4xl">Past Events</h2>
          <p className="mt-4 text-xl text-gray-600">A look back at our recent meetups, talks, and workshops</p>
        </div>

        <div className="mt-12">
          {isLoading && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-32 mb-6" />
                  <Skeleton className="h-10 w-32" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <Alert className="max-w-md mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Unable to load events at this time. Please check back later or visit our Meetup page directly.
              </AlertDescription>
            </Alert>
          )}

          {events && events.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No past events yet.</p>
            </div>
          )}

          {events && events.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.slice(0, 3).map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href="/events#past-events">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View All Past Events
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
