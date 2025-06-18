import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import logoImage from "@assets/logo_1749796439184.jpg";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Join", href: "/join"},
    // { name: "conference", href: "conference"},
    { name: "Previous Conferences", href: "/previous-conferences" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="https://pbs.twimg.com/profile_images/1745375621738385408/LRoQwjSK_400x400.jpg" 
                alt="Write the Docs Kenya Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-kenya-red"
                      : "text-gray-600 hover:text-kenya-red"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-accent-orange text-white hover:bg-accent-orange/90">
                <i className="fas fa-users mr-2"></i>
                Join Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <i className="fas fa-bars text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-kenya-red"
                          : "text-gray-600 hover:text-kenya-red"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="bg-accent-orange text-white hover:bg-accent-orange/90 w-full">
                    <i className="fas fa-users mr-2"></i>
                    Join Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
