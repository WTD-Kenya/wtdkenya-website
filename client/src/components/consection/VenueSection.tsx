import React from "react";

export default function VenueSection() {
  return (
    <section id="venue" className="py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Venue & Location</h2>
        <p className="text-lg text-gray-700 mb-6">Join us at our state-of-the-art venue designed for optimal learning and networking.</p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-kenya-black mb-2">KCA University</h3>
          <p className="text-gray-700">Nairobi, Kenya</p>
          <div className="mt-6 w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            {/* Placeholder for embedded map */}
            Embedded Map Here (e.g., Google Maps iframe)
          </div>
          <div className="mt-6 text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Directions & Transportation:</h4>
            <p className="text-gray-700">Detailed instructions on how to reach the venue by public transport, car, etc.</p>
            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Parking Information:</h4>
            <p className="text-gray-700">Details about available parking facilities, costs, and nearest parking lots.</p>
            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Accessibility:</h4>
            <p className="text-gray-700">Information regarding wheelchair access, ramps, elevators, and other accessibility features.</p>
          </div>
        </div>

        {/* Optional: Local Accommodation */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-bold text-kenya-black mb-4">Local Accommodation</h3>
          <p className="text-gray-700 mb-4">Here are some recommended hotels near the venue:</p>
          <ul className="list-disc ml-6 text-gray-700">
            <li>[Hotel Name 1]</li>
            <li>[Hotel Name 2]</li>
          </ul>
        </div> */}
        
        {/* Optional: Venue Photos */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="https://via.placeholder.com/400x250" alt="Venue Photo 1" className="rounded-lg shadow-md" />
          <img src="https://via.placeholder.com/400x250" alt="Venue Photo 2" className="rounded-lg shadow-md" />
        </div> */}
      </div>
    </section>
  );
} 