import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
// import EventGallery from "@/components/EventGallery"; // Import the new component
import Event_Gallery from "@/components/Event_Gallery.tsx";
import type { MeetupEvent } from "@/lib/types";

export default function Events() {
  const {
    data: upcomingEvents,
    isLoading: upcomingLoading,
    error: upcomingError,
  } = useQuery<MeetupEvent[]>({
    queryKey: ["/api/events?status=upcoming"],
  });

  const {
    data: pastEvents,
    isLoading: pastLoading,
    error: pastError,
  } = useQuery<MeetupEvent[]>({
    queryKey: ["/api/events?status=past"],
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Connect, Learn & Grow with Docs-Lovers in Kenya
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Join our regular meetups, events, and workshops.
            </p>
            <div className="mt-8 space-x-4">
              <Button className="bg-kenya-red text-white hover:bg-kenya-red/90">
                <i className="fab fa-meetup mr-2"></i>
                Follow Us on Meetup
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <i className="fas fa-plus mr-2"></i>
                Suggest an Event
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">Upcoming Events</h2>

            {upcomingLoading && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
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

            {upcomingError && (
              <Alert className="max-w-md mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Unable to load events at this time. Please check back later or visit our Meetup page directly.
                </AlertDescription>
              </Alert>
            )}

            {upcomingEvents && upcomingEvents.length === 0 && !upcomingLoading && (
              <div className="text-center py-12">
                <i className="fas fa-calendar-plus text-gray-400 text-6xl mb-4"></i>
                <p className="text-gray-600 text-lg">No upcoming events scheduled.</p>
                <p className="text-gray-500 mt-2">Check back soon for new events!</p>
                <Button className="mt-6 bg-kenya-red text-white hover:bg-kenya-red/90">
                  <i className="fas fa-plus mr-2"></i>
                  Suggest an Event
                </Button>
              </div>
            )}

            {upcomingEvents && upcomingEvents.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section id="past-events" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">Past Events</h2>

            {pastLoading && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
                    <Skeleton className="h-4 w-20 mb-3" />
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                  </div>
                ))}
              </div>
            )}

            {pastError && (
              <Alert className="max-w-md mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Unable to load past events at this time. Please check back later or visit our Meetup page directly.
                </AlertDescription>
              </Alert>
            )}

            {pastEvents && pastEvents.length === 0 && !pastLoading && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No past events yet.</p>
              </div>
            )}

            {pastEvents && pastEvents.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12 text-center">Event Highlights</h2>
            {/* <EventGallery /> */}

            <Event_Gallery />
          </div>
        </section>

        {/* Suggest Event CTA */}
        <section className="py-16 bg-kenya-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Have an Event Idea?</h2>
            <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto">
              We're always looking for fresh ideas and speakers. Share your event suggestion with us!
            </p>
            <Button className="mt-8 bg-white text-kenya-green hover:bg-gray-100">
              <i className="fas fa-lightbulb mr-2"></i>
              Suggest an Event
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
