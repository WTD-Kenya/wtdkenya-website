import { useState } from "react";
import { Link } from "wouter";
// import logoImage from "@assets/logo_1749796439184.jpg";

export default function Footer() {
  const [showConferences, setShowConferences] = useState(false);

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <img 
                src="https://pbs.twimg.com/profile_images/1745375621738385408/LRoQwjSK_400x400.jpg"
                alt="Write the Docs Kenya Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering Kenya's technical writing community through collaboration, learning, and shared knowledge.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Part of the Write the Docs Global Network
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">Community</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="mailto:wtdkenya@gmail.com" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li>
                <button 
                  onClick={() => setShowConferences(!showConferences)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  Previous Conferences 
                  <i className={`fas fa-chevron-down ml-2 transition-transform ${showConferences ? 'rotate-180' : ''}`}></i>
                </button>
                {showConferences && (
                  <ul className="ml-4 mt-2 space-y-1">
                    <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">2024 Conference</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">2025 Conference</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Write the Docs Kenya. Powered by the Community.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              
              <a href="https://www.linkedin.com/company/write-the-docs-kenya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              {/* <a href="https://instagram.com/writethedocs_ke" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a> */}
              <a href="https://www.meetup.com/wtd-kenya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-meetup text-xl"></i>
              </a>
              <a href="https://x.com/WTD_Kenya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-6 h-6 text-xl">
                  <path d="M1200 24.6L726.6 624.2L1193.2 1202.4H1042.6L677.2 759.6L349.4 1202.4H0L495.2 563.2L56.8 24.6H211.6L544.2 432.2L849.8 24.6H1200ZM978.6 1144.8L406.2 432.2L154.2 1144.8H309.2L626.6 721.6L978.6 1144.8ZM221.8 123.2L857.2 1144.8H1045.8L409.8 123.2H221.8Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
