import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1716840279427/3d59fb38-22e4-492c-8959-c468e9dcf6aa.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    "https://cdn.hashnode.com/res/hashnode/image/upload/v1749713769385/4a038d9c-5bef-43e9-bc71-0168035c2467.png?auto=compress,format&format=webp",
    "https://pbs.twimg.com/profile_banners/1488581035356999682/1716799353/1500x500",
    "https://pbs.twimg.com/media/GtEO2QgXkAAJ0Wf?format=jpg&name=4096x4096",
    "https://pbs.twimg.com/media/GtEO_9aXAAA7V1z?format=jpg&name=4096x4096"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-70' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-tight sm:text-5xl lg:text-6xl">
            Empowering <span className="text-kenya-red">Technical Writers</span> in Kenya's Tech Ecosystem
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            Write the Docs Kenya is a local community of writers, engineers, and documentarians building better docs, together.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-accent-orange text-white hover:bg-accent-orange/90 hover:scale-105 transition-transform duration-200"
              onClick={() => window.open('https://your-link-here.com', '_blank')}
            >
              Join the Community
            </Button>
            
            {/* <Button className="bg-kenya-red hover:bg-kenya-red/90 text-white shadow-lg">
              <i className="fas fa-users mr-2"></i>
              Join the Community
            </Button> */}
            <Link href="/events">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <i className="fas fa-calendar mr-2"></i>
                View Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
