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

  useEffect(() => {
    if (!testimonials.length) return;
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [testimonials, isPaused]);

  if (!testimonials.length) {
    return (
      <div className="mt-16 text-center text-gray-500">
        No testimonials available at this time.
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Members Say</h3>
      <div
        className="relative max-w-2xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
                style={{ minWidth: "100%" }}
              >
                <blockquote className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-600 text-lg italic">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.author} testimonial`}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        {/* Carousel indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                idx === current ? "bg-accent-orange" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}