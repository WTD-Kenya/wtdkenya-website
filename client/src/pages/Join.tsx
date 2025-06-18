import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();

  const joinOptions = [
    // {
    //   icon: <Users className="w-8 h-8" />,
    //   title: "Join Our Community",
    //   description: "Connect with fellow documentarians on our communication channels",
    //   actions: [
    //     { label: "Join Slack Workspace", url: "https://writethedocs.slack.com", primary: true },
    //     { label: "Follow on Meetup", url: "https://meetup.com/write-the-docs-kenya" },
    //     { label: "Twitter Community", url: "https://twitter.com/writethedocske" }
    //   ]
    // },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Speak at an Event",
      description: "Share your knowledge and experience with the community",
      actions: [
        { label: "Submit Speaker Proposal", url: "/events", primary: true },
        // { label: "Speaking Guidelines", url: "https://www.writethedocs.org/speakers/" }
      ]
    },
    // {
    //   icon: <Heart className="w-8 h-8" />,
    //   title: "Volunteer with Us",
    //   description: "Help organize events and grow the community",
    //   actions: [
    //     { label: "Volunteer Application", url: "mailto:volunteer@writethedocs.org", primary: true },
    //     { label: "Event Planning Team", url: "mailto:events@writethedocs.org" }
    //   ]
    // },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Write for Our Blog",
      description: "Contribute articles and insights to our community blog",
      actions: [
        { label: "Submit Blog Post", url: "/blog", primary: true },
        // { label: "Content Guidelines", url: "#" }
      ]
    }
  ];

  const communityChannels = [
    // {
    //   name: "Slack Workspace",
    //   description: "Daily discussions, Q&A, and networking",
    //   url: "https://writethedocs.slack.com",
    //   members: "1000+",
    //   color: "bg-kenya-blue"
    // },
    {
      name: "Meetup Group",
      description: "Event announcements and RSVPs",
      url: "https://www.meetup.com/wtd-kenya/",
      members: "2,000+",
      color: "bg-kenya-red"
    },
    {
      name: "Twitter",
      description: "Updates, news, and community highlights",
      url: "https://x.com/WTD_Kenya",
      members: "1000+",
      color: "bg-kenya-yellow"
    },
    {
      name: "LinkedIn",
      description: "Professional networking and career opportunities",
      url: "https://www.linkedin.com/company/write-the-docs-kenya/",
      members: "500+",
      color: "bg-kenya-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar/>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kenya-green/10 via-gray-50 to-kenya-yellow/10 py-20 lg:py-32">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl lg:text-6xl font-bold mb-6">
        Join the <span className="text-kenya-red">Write the Docs</span>{" "}
        <span className="text-kenya-green">Kenya</span> Community
      </h1>
      <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
        Connect with passionate documentarians, share knowledge, and grow your 
        technical writing skills in Kenya's most vibrant docs community.
      </p>
      <Button
        className="bg-kenya-red text-white hover:bg-kenya-green font-semibold"
        onClick={() => window.open('https://linktr.ee/wtd_kenya', '_blank')}
      >
        Check our socials
      </Button>
    </div>
  </div>
</section>

      {/* Community Channels */}
     <section className="bg-white py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-kenya-green">Choose Your Platform</h2>
      <p className="text-lg text-gray-700">Join us on your preferred platform and start connecting</p>
    </div>
    <div className="flex flex-wrap justify-center gap-8">
      {communityChannels
        .filter(channel => channel.name !== "Slack Workspace")
        .map((channel, index) => (
        <Card
          key={index}
          className="bg-gray-100 border-0 shadow-sm hover:shadow-lg transition-shadow min-w-[220px] max-w-xs flex flex-col items-center"
        >
          <CardHeader className="flex flex-col items-center">
            <div className="w-12 h-12 bg-kenya-green rounded-full flex items-center justify-center mb-4 shadow-md">
              {/* Platform-specific icons, all white on kenya-green */}
              {channel.name === "Meetup Group" && (
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="16" r="16" fill="none"/>
                  <path d="M23.6 13.2c-1.1-0.2-2.1 0.5-2.3 1.6l-1.1 5.2c-0.1 0.5-0.6 0.8-1.1 0.7-0.5-0.1-0.8-0.6-0.7-1.1l1.1-5.2c0.2-1.1-0.5-2.1-1.6-2.3-1.1-0.2-2.1 0.5-2.3 1.6l-1.1 5.2c-0.1 0.5-0.6 0.8-1.1 0.7-0.5-0.1-0.8-0.6-0.7-1.1l1.1-5.2c0.2-1.1-0.5-2.1-1.6-2.3-1.1-0.2-2.1 0.5-2.3 1.6l-1.1 5.2c-0.4 2 0.9 3.9 2.9 4.3 2 0.4 3.9-0.9 4.3-2.9l1.1-5.2c0.1-0.5 0.6-0.8 1.1-0.7 0.5 0.1 0.8 0.6 0.7 1.1l-1.1 5.2c-0.2 1.1 0.5 2.1 1.6 2.3 1.1 0.2 2.1-0.5 2.3-1.6l1.1-5.2c0.1-0.5 0.6-0.8 1.1-0.7 0.5 0.1 0.8 0.6 0.7 1.1l-1.1 5.2c-0.2 1.1 0.5 2.1 1.6 2.3 1.1 0.2 2.1-0.5 2.3-1.6l1.1-5.2c0.4-2-0.9-3.9-2.9-4.3z" fill="#fff"/>
                </svg>
              )}
              {channel.name === "Twitter" && (
                // X (Twitter) SVG
                <svg className="w-6 h-6 text-white" viewBox="0 0 1200 1227" fill="currentColor">
                  <path d="M1200 24.6L726.6 624.2L1193.2 1202.4H1042.6L677.2 759.6L349.4 1202.4H0L495.2 563.2L56.8 24.6H211.6L544.2 432.2L849.8 24.6H1200ZM978.6 1144.8L406.2 432.2L154.2 1144.8H309.2L626.6 721.6L978.6 1144.8ZM221.8 123.2L857.2 1144.8H1045.8L409.8 123.2H221.8Z"/>
                </svg>
              )}
              {channel.name === "LinkedIn" && (
                <svg className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="16" r="16" fill="none"/>
                  <path d="M12.1 24h-3.1v-9.6h3.1v9.6zm-1.6-10.9c-1 0-1.7-0.7-1.7-1.6 0-0.9 0.7-1.6 1.7-1.6s1.7 0.7 1.7 1.6c0 0.9-0.7 1.6-1.7 1.6zm13.2 10.9h-3.1v-5c0-1.2-0.4-2-1.4-2-0.8 0-1.2 0.5-1.4 1-0.1 0.2-0.1 0.5-0.1 0.8v5.2h-3.1s0-8.5 0-9.6h3.1v1.4c0.4-0.7 1.1-1.7 2.7-1.7 2 0 3.5 1.3 3.5 4.1v5.8z" fill="#fff"/>
                </svg>
              )}
            </div>
            <CardTitle className="text-gray-900 text-center">{channel.name}</CardTitle>
            <CardDescription className="text-gray-500 text-center">
              {channel.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-400 mb-4">{channel.members} members</p>
            <Button 
              className="w-full bg-kenya-green text-white hover:bg-kenya-red hover:text-white font-semibold"
              onClick={() => window.open(channel.url, '_blank')}
            >
              Join Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Ways to Get Involved */}
      <section className="bg-kenya-yellow/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-kenya-red">Ways to Get Involved</h2>
            <p className="text-lg text-gray-700">Beyond joining our channels, here's how you can contribute</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {joinOptions.map((option, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow flex-1 min-w-[260px] max-w-xs"
                style={{ flexBasis: "22%" }}
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-kenya-green rounded-full flex items-center justify-center mb-4 text-white shadow">
                    {option.icon}
                  </div>
                  <CardTitle className="text-gray-900 text-center">{option.title}</CardTitle>
                  <CardDescription className="text-gray-500 text-center">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {option.actions.map((action, actionIndex) => (
                      <Button
                        key={actionIndex}
                        className={`w-full ${
                          action.primary
                            ? "bg-kenya-red text-white hover:bg-kenya-green"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        } font-semibold`}
                        onClick={() => {
                          if (action.url.startsWith('mailto:')) {
                            window.location.href = action.url;
                          } else if (action.url === "/events") {
                            navigate("/events");
                          } else if (action.url === "/blog") {
                            navigate("/blog");
                          } else {
                            window.open(action.url, '_blank');
                          }
                        }}
                      >
                        {action.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="bg-kenya-green/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-kenya-green">Community Guidelines</h2>
            <div className="bg-white rounded-xl p-8 shadow">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-kenya-red">Our Values</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Inclusive and welcoming environment</li>
                    <li>• Respect for all community members</li>
                    <li>• Constructive and helpful discussions</li>
                    <li>• Knowledge sharing and collaboration</li>
                    <li>• Professional growth and learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-kenya-green">Code of Conduct</h3>
                  <p className="text-gray-700 mb-4">
                    We follow the Write the Docs global Code of Conduct to ensure 
                    a safe and welcoming space for everyone.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white font-semibold"
                    onClick={() => window.open('https://www.writethedocs.org/code-of-conduct/', '_blank')}
                  >
                    Read Full Code of Conduct
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-kenya-blue">Have Questions?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Not sure where to start or have specific questions about getting involved? 
              We're here to help! Reach out to our community organizers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-kenya-green text-white hover:bg-kenya-red px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = 'mailto:wtdkenya@gmail.com?subject=Getting Involved'}
              >
                Email Us
              </Button>
              {/* <Button 
                variant="outline" 
                className="border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://writethedocs.slack.com', '_blank')}
              >
                Chat on Slack
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}