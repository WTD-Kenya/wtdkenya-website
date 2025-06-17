import React from "react";

export default function SponsorsSection() {
  // Placeholder sponsor data
  const sponsors = [
    {
      name: "Acme Corp",
      logo: "https://via.placeholder.com/150x80/FF6347/FFFFFF?text=Acme+Corp",
      tier: "Platinum",
      url: "#",
    },
    {
      name: "Innovate Solutions",
      logo: "https://via.placeholder.com/150x80/4682B4/FFFFFF?text=Innovate+Solutions",
      tier: "Gold",
      url: "#",
    },
    {
      name: "Global Tech",
      logo: "https://via.placeholder.com/150x80/3CB371/FFFFFF?text=Global+Tech",
      tier: "Gold",
      url: "#",
    },
    {
      name: "Future Systems",
      logo: "https://via.placeholder.com/150x80/9370DB/FFFFFF?text=Future+Systems",
      tier: "Silver",
      url: "#",
    },
    {
      name: "Creative Minds",
      logo: "https://via.placeholder.com/150x80/FFD700/FFFFFF?text=Creative+Minds",
      tier: "Silver",
      url: "#",
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Our Valued Sponsors</h2>
        
        {/* Platinum Sponsors */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Platinum Tier</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.filter(s => s.tier === "Platinum").map((sponsor, index) => (
              <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition">
                <img src={sponsor.logo} alt={sponsor.name} className="h-20 max-w-[150px] object-contain" />
                <p className="mt-2 text-gray-700 font-medium">{sponsor.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Gold Tier</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {sponsors.filter(s => s.tier === "Gold").map((sponsor, index) => (
              <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-lg transition">
                <img src={sponsor.logo} alt={sponsor.name} className="h-16 max-w-[120px] object-contain" />
                <p className="mt-2 text-gray-700 text-sm">{sponsor.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Silver Tier</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sponsors.filter(s => s.tier === "Silver").map((sponsor, index) => (
              <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="block p-2 bg-white rounded-lg shadow-xs hover:shadow-md transition">
                <img src={sponsor.logo} alt={sponsor.name} className="h-12 max-w-[100px] object-contain" />
                <p className="mt-1 text-gray-700 text-xs">{sponsor.name}</p>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 text-lg text-gray-700">
          Interested in sponsoring our event? <a href="#contact" className="text-accent-orange hover:underline">Contact us</a> to learn more about sponsorship opportunities.
        </p>
      </div>
    </section>
  );
} 