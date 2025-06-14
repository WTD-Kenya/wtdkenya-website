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
