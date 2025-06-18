import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-kenya-green font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Building a Stronger Documentation Community
          </p>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
            As part of the global Write the Docs network, we're fostering inclusive learning, sharing, and collaboration among Kenya's technical writers, developers, and documentation enthusiasts.
          </p>

          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Community */}
            <div>
              <div className="flex justify-center mb-4">
                <i className="fas fa-users text-3xl text-red-600"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-base">
                Connect with fellow documentation enthusiasts<br className="hidden md:block" />
                and technical writers.
              </p>
            </div>
            {/* Learning */}
            <div>
              <div className="flex justify-center mb-4">
                <i className="fas fa-graduation-cap text-3xl text-green-700"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Learning</h3>
              <p className="text-gray-600 text-base">
                Enhance your skills through workshops, talks, and<br className="hidden md:block" />
                collaborative learning.
              </p>
            </div>
            {/* Growth */}
            <div>
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  <i className="fas fa-rocket text-xl text-blue-600"></i>
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-base">
                Advance your career and contribute to Kenya's<br className="hidden md:block" />
                growing tech documentation culture.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/about">
              <Button variant="outline" className="border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white">
                Get to Know Us
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
