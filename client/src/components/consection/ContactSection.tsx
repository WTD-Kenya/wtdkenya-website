import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-kenya-red mb-12">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-8">Have questions about the conference? Reach out to us!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email & Phone */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Contact</h3>
            <p className="text-gray-700 mb-2"><i className="fas fa-envelope mr-2 text-accent-orange"></i> Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></p>
            <p className="text-gray-700"><i className="fas fa-phone mr-2 text-kenya-green"></i> Phone: [+1 123 456 7890]</p>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition">
                <i className="fab fa-twitter text-4xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                <i className="fab fa-linkedin text-4xl"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition">
                <i className="fab fa-instagram text-4xl"></i>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>

        {/* Optional: Contact Form */}
        {/* <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-left text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="your@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="bg-accent-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-orange/90 transition">Send Message</button>
          </form>
        </div> */}
      </div>
    </section>
  );
} 