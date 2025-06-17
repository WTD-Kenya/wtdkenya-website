import React from "react";

export default function HeroSec() {
  // Placeholder countdown logic
  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-orange-50 to-white text-center py-20 relative">
      <div className="absolute inset-0 bg-[url('/images/conference-hero.jpg')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-kenya-red mb-4">Conference Name Here</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-2">Date & Time | Location</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Compelling Headline for the Event</h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">A brief, descriptive statement about the event goes here.</p>
        <button className="bg-accent-orange text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-accent-orange/90 transition">Register Now</button>
        <div className="mt-8 flex justify-center">
          <div className="bg-white/80 rounded-lg px-6 py-2 shadow text-lg font-mono text-gray-800">Countdown: 10d 12h 30m</div>
        </div>
      </div>
    </section>
  );
} 