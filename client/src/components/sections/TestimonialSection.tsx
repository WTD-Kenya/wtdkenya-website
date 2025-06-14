import type { Testimonial } from "@/lib/types";
import React, { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    import("@/data/static.json")
      .then((dataModule) => {
        if (dataModule.default && Array.isArray(dataModule.default.testimonials)) {
          setTestimonials(dataModule.default.testimonials);
        }
      })
      .catch(() => setTestimonials([]));
  }, []);

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
      <div className="grid gap-8 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 text-lg italic">"{testimonial.quote}"</p>
            <div className="mt-6 flex items-center">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.author} testimonial`} 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          </blockquote>
        ))}
      </div>
    </div>
  );
}