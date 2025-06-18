import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-4">About the Conference</h2>
        <p className="text-lg text-gray-700 mb-6">This is a concise yet engaging summary of the event's purpose, theme, and key offerings. Explain what makes this event unique and why it's a must-attend.</p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Who Should Attend?</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Technical writers</li>
              <li>Developers</li>
              <li>Product managers</li>
              <li>Anyone interested in documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Benefits</h3>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Networking with industry leaders</li>
              <li>Hands-on workshops</li>
              <li>Expert talks and panels</li>
              <li>Access to exclusive resources</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Attend?</h3>
          <p className="text-gray-700 mb-4">Gain practical skills, connect with peers, and stay ahead in the world of documentation and technical writing.</p>
          <h4 className="text-lg font-semibold text-gray-800">Organized by:</h4>
          <p className="text-gray-700">Write the Docs Kenya Team</p>
        </div>
      </div>
    </section>
  );
} 