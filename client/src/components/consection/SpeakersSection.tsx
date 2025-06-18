import React from "react";

export default function SpeakersSection() {
  // Placeholder speaker data
  const speakers = [
    {
      name: "Speaker One",
      title: "CEO, Tech Solutions",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      social: { twitter: "#", linkedin: "#" },
      topics: "AI, Future of Tech",
    },
    {
      name: "Speaker Two",
      title: "Head of Documentation, Global Corp",
      bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      social: { twitter: "#", linkedin: "#" },
      topics: "Technical Writing, UX",
    },
    {
      name: "Speaker Three",
      title: "Senior Developer Advocate",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      social: { twitter: "#", linkedin: "#" },
      topics: "Developer Experience, APIs",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-kenya-red text-center mb-12">Meet Our Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent-orange"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{speaker.name}</h3>
              <p className="text-kenya-green font-medium mb-3">{speaker.title}</p>
              <p className="text-gray-700 text-sm mb-4">{speaker.bio}</p>
              <p className="text-gray-600 text-xs italic mb-4">Expertise: {speaker.topics}</p>
              <div className="flex justify-center space-x-4">
                {speaker.social.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                )}
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Optional: Testimonials/Social Proof */}
        {/* <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">"[Speaker Name] delivered an insightful talk that truly changed my perspective!" - Attendee</p>
        </div> */}
      </div>
    </section>
  );
} 