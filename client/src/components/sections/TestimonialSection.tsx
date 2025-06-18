import type { Testimonial } from "@/lib/types";
import React, { useEffect, useState, useRef } from "react";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    import("@/data/static.json")
      .then((dataModule) => {
        if (dataModule.default && Array.isArray(dataModule.default.testimonials)) {
          setTestimonials(dataModule.default.testimonials);
        }
      })
      .catch(() => setTestimonials([]));
  }, []);

  // Number of cards to show at once
  const cardsToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2;

  // Responsive: update cardsToShow on resize
  useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize
      setCurrent((c) => c);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (!testimonials.length) return;
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + cardsToShow) % testimonials.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials, isPaused, cardsToShow]);

  if (!testimonials.length) {
    return (
      <div className="mt-16 text-center text-gray-500">
        No testimonials available at this time.
      </div>
    );
  }

  // Helper to get the visible testimonials
  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(testimonials[(current + i) % testimonials.length]);
    }
    return visible;
  };

  // Arrow navigation
  const handlePrev = () => {
    setCurrent((prev) => (prev - cardsToShow + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + cardsToShow) % testimonials.length);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
      {/* bg-gradient-to-br from-gray-50 to-white py-20 /// bg-[#e4e9ee] py-16 */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-extrabold text-left text-gray-900" >
          {/* text-3xl font-bold text-gray-900 sm:text-4xl mb-12 //// style={{color:'#d6f5d6'}} // text-4xl font-extrabold text-left text-[#d6f5d6]*/}
            Why they love Write the Docs Kenya
          </h2>
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous testimonials"
              onClick={handlePrev}
              className="rounded-full bg-white text-gray-700 hover:bg-gray-200 shadow p-2 transition-colors border border-gray-300"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              aria-label="Next testimonials"
              onClick={handleNext}
              className="rounded-full bg-white text-gray-700 hover:bg-gray-200 shadow p-2 transition-colors border border-gray-300"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex-1 min-w-0"
            >
              <p className="text-gray-800 text-lg mb-6">{testimonial.quote}</p>
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-gray-500 italic">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}