import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { TeamMember } from "@/lib/types";

export default function About() {
  const [data, setData] = useState<{ 
    about: { mission: string; vision: string; description: string }; 
    team: TeamMember[] 
  } | null>(null);

  useEffect(() => {
    import("@/data/static.json").then((module) => {
      setData({
        about: module.default.about,
        team: module.default.team,
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Building a Stronger Tech Writing Community in Kenya
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We connect documentarians, writers, and developers for collaboration and growth.
            </p>
          </div>
        </section>

        {data && (
          <>
            {/* Who We Are */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Who We Are</h2>
                    <p className="mt-6 text-lg text-gray-600">
                      {data.about.description}
                    </p>
                    <p className="mt-4 text-lg text-gray-600">
                      Our community brings together technical writers, developers, UX designers, and documentation enthusiasts 
                      from across Kenya's thriving tech ecosystem.
                    </p>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    <img 
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                      alt="Team collaboration" 
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <i className="fas fa-bullseye text-kenya-red text-2xl mr-4"></i>
                      <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {data.about.mission}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex items-center mb-6">
                      <i className="fas fa-eye text-kenya-green text-2xl mr-4"></i>
                      <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {data.about.vision}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* What We Do */}
            <section className="py-16 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What We Do</h2>
                  <p className="mt-4 text-xl text-gray-600">Empowering our community through various initiatives</p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="bg-kenya-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-calendar-alt text-kenya-red text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Events</h3>
                    <p className="text-gray-600">Regular meetups, workshops, and conferences</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-kenya-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-chalkboard-teacher text-kenya-green text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshops</h3>
                    <p className="text-gray-600">Hands-on training and skill development</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-accent-orange/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-pen text-accent-orange text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Creation</h3>
                    <p className="text-gray-600">Blog posts, guides, and resources</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-handshake text-blue-600 text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                    <p className="text-gray-600">Partnerships with local and global communities</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Members */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Organizers</h2>
                  <p className="mt-4 text-xl text-gray-600">The passionate people behind our community</p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {data.team.map((member, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        <p className="text-kenya-red font-medium">{member.role}</p>
                        <p className="mt-3 text-gray-600">{member.bio}</p>
                        {member.social && (
                          <div className="mt-4 flex space-x-3">
                            {member.social.twitter && (
                              <a 
                                href={member.social.twitter} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                              >
                                <i className="fab fa-x-twitter text-lg"></i>
                              </a>
                            )}
                            {member.social.linkedin && (
                              <a 
                                href={member.social.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                              >
                                <i className="fab fa-linkedin text-lg"></i>
                              </a>
                            )}
                            {member.social.instagram && (
                              <a 
                                href={member.social.instagram} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors"
                              >
                                <i className="fab fa-instagram text-lg"></i>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Get Involved CTA */}
            <section className="py-16 bg-kenya-red">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Get Involved?</h2>
                <p className="mt-4 text-xl text-red-100 max-w-3xl mx-auto">
                  Join our growing community of documentation enthusiasts and help shape the future of technical writing in Kenya.
                </p>
                <div className="mt-8 space-x-4">
                  <button className="bg-white text-kenya-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <i className="fas fa-users mr-2"></i>
                    Join the Community
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kenya-red transition-colors">
                    <i className="fas fa-microphone mr-2"></i>
                    Speak at an Event
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
