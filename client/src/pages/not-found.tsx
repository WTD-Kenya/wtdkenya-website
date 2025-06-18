import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function NotFound() {
  const [location, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-kenya-blue/10 text-gray-900 px-4">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-12 py-16">
        {/* Left: Text and Actions */}
        <div className="flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-kenya-red">Page Not Found</h1>
          <p className="mb-6 text-gray-700 text-lg max-w-md">
            We can't seem to find the page you're looking for.<br />
            Please check the URL for any typos.
          </p>
          {/* Search Bar */}
          <form className="flex mb-6 max-w-md" onSubmit={e => e.preventDefault()}>
            <Input
              className="rounded-l-lg bg-white border-0 text-gray-900 placeholder-gray-400 focus:ring-kenya-blue"
              placeholder="Search..."
              type="text"
              aria-label="Search"
            />
            <Button
              type="submit"
              className="rounded-l-none rounded-r-lg bg-kenya-green hover:bg-kenya-red text-white px-6"
            >
              <i className="fas fa-search"></i>
            </Button>
          </form>
          {/* Links */}
          <ul className="space-y-2 text-lg">
            <li>
              <button className="text-kenya-green hover:underline" onClick={() => setLocation("/")}>Go to Homepage</button>
            </li>
            <li>
              <button className="text-kenya-green hover:underline" onClick={() => setLocation("/blog")}>Visit our Blog</button>
            </li>
            <li>
              <a className="text-kenya-green hover:underline" href="mailto:wtdkenya@gmail.com?subject=Support Request">Contact support</a>
            </li>
          </ul>
        </div>
        {/* Right: 404 and Robot Illustration */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-[6rem] md:text-[8rem] font-extrabold text-kenya-yellow select-none">4</span>
            {/* Simple SVG Robot Illustration */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="55" fill="#e5e7eb" stroke="#388e3c" strokeWidth="6" />
              <rect x="35" y="50" width="50" height="40" rx="12" fill="#388e3c" />
              <rect x="50" y="80" width="20" height="20" rx="6" fill="#1976d2" />
              <rect x="45" y="60" width="10" height="10" rx="3" fill="#fff" />
              <rect x="65" y="60" width="10" height="10" rx="3" fill="#fff" />
              <rect x="55" y="70" width="10" height="5" rx="2" fill="#e5e7eb" />
              <line x1="60" y1="35" x2="60" y2="15" stroke="#388e3c" strokeWidth="3" />
              <circle cx="60" cy="15" r="3" fill="#fbc02d" />
              <line x1="40" y1="45" x2="30" y2="30" stroke="#388e3c" strokeWidth="3" />
              <circle cx="30" cy="30" r="3" fill="#fbc02d" />
              <line x1="80" y1="45" x2="90" y2="30" stroke="#388e3c" strokeWidth="3" />
              <circle cx="90" cy="30" r="3" fill="#fbc02d" />
            </svg>
            <span className="text-[6rem] md:text-[8rem] font-extrabold text-kenya-yellow select-none">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}