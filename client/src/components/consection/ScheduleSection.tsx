import React from "react";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-kenya-red text-center mb-12">Event Schedule</h2>
        <div className="space-y-8">
          {/* Day 1 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Day 1: [Date]</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-gray-600 font-medium w-24">09:00 AM</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Opening Keynote: [Topic]</h4>
                  <p className="text-gray-700">Speaker Name | [Speaker Title]</p>
                  <p className="text-gray-600 text-sm mt-1">A brief overview of the opening keynote session.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-gray-600 font-medium w-24">10:00 AM</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Session 1: [Topic]</h4>
                  <p className="text-gray-700">Speaker Name | [Speaker Title]</p>
                  <p className="text-gray-600 text-sm mt-1">Description of what this session will cover.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-gray-600 font-medium w-24">11:00 AM</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Coffee Break & Networking</h4>
                  <p className="text-gray-600 text-sm mt-1">Time for refreshments and mingling.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 text-gray-600 font-medium w-24">11:30 AM</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Session 2: [Topic]</h4>
                  <p className="text-gray-700">Speaker Name | [Speaker Title]</p>
                  <p className="text-gray-600 text-sm mt-1">Description of what this session will cover.</p>
                </div>
              </li>
              {/* Add more sessions or days as needed */}
            </ul>
          </div>

          {/* Example Day 2 (uncomment and duplicate for multi-day events) */}
          {/* <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Day 2: [Date]</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 text-gray-600 font-medium w-24">09:00 AM</div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Session 3: [Topic]</h4>
                  <p className="text-gray-700">Speaker Name | [Speaker Title]</p>
                  <p className="text-gray-600 text-sm mt-1">Description of what this session will cover.</p>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
} 