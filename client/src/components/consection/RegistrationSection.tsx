import React from "react";

export default function RegistrationSection() {
  return (
    <section id="registration" className="py-20 bg-purple-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Registration & Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Ticket Type 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-accent-orange">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Bird</h3>
            <p className="text-4xl font-extrabold text-kenya-green mb-4">$99</p>
            <ul className="text-gray-700 text-left list-disc ml-4 mb-4">
              <li>Full access to all sessions</li>
              <li>Networking events</li>
              <li>Conference swag bag</li>
            </ul>
            <p className="text-gray-600 text-sm mb-4">Available until: [Date]</p>
            <button className="bg-accent-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-orange/90 transition">Get Early Bird</button>
          </div>

          {/* Ticket Type 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-kenya-red">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">General Admission</h3>
            <p className="text-4xl font-extrabold text-kenya-red mb-4">$149</p>
            <ul className="text-gray-700 text-left list-disc ml-4 mb-4">
              <li>Full access to all sessions</li>
              <li>Networking events</li>
              <li>Meals & Refreshments</li>
            </ul>
            <p className="text-gray-600 text-sm mb-4">Available until: [Date]</p>
            <button className="bg-kenya-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-kenya-red/90 transition">Register Now</button>
          </div>

          {/* Ticket Type 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-kenya-green">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">VIP Pass</h3>
            <p className="text-4xl font-extrabold text-kenya-green mb-4">$299</p>
            <ul className="text-gray-700 text-left list-disc ml-4 mb-4">
              <li>All General Admission benefits</li>
              <li>Exclusive speaker dinner</li>
              <li>Front-row seating</li>
              <li>Premium swag</li>
            </ul>
            <p className="text-gray-600 text-sm mb-4">Limited availability</p>
            <button className="bg-kenya-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-kenya-green/90 transition">Get VIP Pass</button>
          </div>
        </div>
        <p className="text-gray-700 text-lg mb-4">Payment options: Credit Card, M-Pesa, Bank Transfer</p>
        <p className="text-gray-600 text-sm">After registration, you will receive a confirmation email with all event details.</p>
        {/* Optional: Discount Code input */}
        {/* <div className="mt-8">
          <input 
            type="text" 
            placeholder="Enter discount code" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm"
          />
          <button className="ml-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Apply</button>
        </div> */}
      </div>
    </section>
  );
} 