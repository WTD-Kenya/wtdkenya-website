import { useState, useEffect } from "react";

interface Partner {
  name: string;
  logo: string;
  website: string;
}

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const partners: Partner[] = [
    {
      name: "Write the Docs Global",
      logo: "https://pbs.twimg.com/media/Gss-sp3WEAAJXdq?format=png&name=360x360",
      website: "https://www.writethedocs.org"
    },
    {
      name: "Master In Communication and Media",
      logo: "https://pbs.twimg.com/media/GstBchOWoAAohPt?format=jpg&name=large",
      website: "https://mcmstudy.org"
    },
    {
      name: "Zetech University",
      logo: "https://pbs.twimg.com/media/GstACU_WcAArLtc?format=jpg&name=large",
      website: "https://www.zetech.ac.ke/"
    },
    {
      name: "Africa’s Talking",
      logo: "https://storage.googleapis.com/platform-data-africastalking/sponsors/Colored%20Logo_UeLaNGe.png",
      website: "https://africastalking.com/"
    },
    {
      name: "Propel HQ",
      logo: "https://logos-world.net/wp-content/uploads/2022/02/Propel-New-Logo-700x394.png",
      website: "writethedocskenya.propel.community"
    },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png",
      website: "https://github.com"
    }
  ];

  // Show 4 partners per slide
  const partnersPerSlide = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / partnersPerSlide));
    }, 4000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const getVisiblePartners = () => {
    const startIndex = currentSlide * partnersPerSlide;
    return partners.slice(startIndex, startIndex + partnersPerSlide);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Partners & Supporters</h2>
          <p className="mt-4 text-xl text-gray-600">Working together to strengthen Kenya's tech ecosystem</p>
        </div>

        <div className="relative">
          <div className="flex justify-center items-center space-x-8 lg:space-x-12">
            {getVisiblePartners().map((partner, index) => (
              <div
                key={`${partner.name}-${currentSlide}-${index}`}
                className="flex-shrink-0 transform transition-all duration-700 ease-in-out animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-16 w-auto mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(partners.length / partnersPerSlide) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-kenya-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in partnering with us?</p>
          <button className="bg-kenya-green text-white px-6 py-3 rounded-lg hover:bg-kenya-green/90 transition-colors">
            <i className="fas fa-handshake mr-2"></i>
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}