import conferenceData from "@/data/upcomingConference.json";

export default function HeroSec() {
  const { name, displayDate, venue, registrationLink } = conferenceData.event;

  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-red-50 to-white text-center py-20 relative">
      <div className="absolute inset-0 bg-[url('/images/conference-hero.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-kenya-red mb-4">{name}</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-2">{displayDate} | {venue}</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-kenya-black mb-4">Bringing together Kenya's documentation and developer community</h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">A day of talks, workshops, and networking for technical writers, developers, and documentation enthusiasts.</p>
        <a
          href={registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-kenya-red text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-kenya-red transition"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}
