import { useState } from "react";
import { Link } from "wouter";
// import logoImage from "@assets/logo_1749796439184.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }
    // Here you would send the email to your backend or newsletter service
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, About, Socials */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://pbs.twimg.com/profile_images/1745375621738385408/LRoQwjSK_400x400.jpg"
                alt="Write the Docs Kenya Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-white">WTD Kenya</span>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
            Growing Kenya’s tech writing through shared knowledge.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/company/write-the-docs-kenya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://www.meetup.com/wtd-kenya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                <i className="fab fa-meetup text-xl"></i>
              </a>
              <a href="https://x.com/WTD_Kenya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="currentColor" className="w-6 h-6 text-xl">
                  <path d="M1200 24.6L726.6 624.2L1193.2 1202.4H1042.6L677.2 759.6L349.4 1202.4H0L495.2 563.2L56.8 24.6H211.6L544.2 432.2L849.8 24.6H1200ZM978.6 1144.8L406.2 432.2L154.2 1144.8H309.2L626.6 721.6L978.6 1144.8ZM221.8 123.2L857.2 1144.8H1045.8L409.8 123.2H221.8Z"/>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-500">Part of the Write the Docs Global Network</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/previous-conferences" className="text-gray-400 hover:text-white transition-colors">Previous Conferences</Link></li>
            </ul>
          </div>

          {/* Column 3: Community Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Join Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
                <a href="mailto:wtdkenya@gmail.com" className="hover:text-white transition-colors">wtdkenya@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8m-8 4h4" /></svg>
                <a href="tel:+25472281868" className="hover:text-white transition-colors">+254 722 818 68</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116.657 7.343z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            {/* Newsletter Subscribe Form */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              {subscribed ? (
                <div className="text-green-400 text-sm">Thank you for subscribing!</div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              {error && <div className="text-red-400 text-xs mt-1">{error}</div>}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} Write the Docs Kenya. Powered by the Community.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
