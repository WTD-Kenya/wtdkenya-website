import { useEffect, useState } from "react";
import type { CommunityStats } from "@/lib/types";

export default function CommunitySection() {
  const [stats, setStats] = useState<CommunityStats | null>(null);

  useEffect(() => {
    import("@/data/static.json").then((module) => {
      setStats(module.default.stats);
    });
  }, []);

  if (!stats) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Thriving Community</h2>
          <p className="mt-4 text-xl text-gray-600">Join hundreds of passionate documentation enthusiasts</p>
        </div>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {stats && (
            <>
              <div className="text-center">
                <div className="text-4xl font-bold text-kenya-red">{stats.members}</div>
                <div className="mt-2 text-lg font-medium text-gray-900">Active Members</div>
                <div className="mt-1 text-gray-600">Writers, developers, and documentarians</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-kenya-green">{stats.events}</div>
                <div className="mt-2 text-lg font-medium text-gray-900">Events Hosted</div>
                <div className="mt-1 text-gray-600">Workshops, talks, and networking</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-orange">{stats.posts}</div>
                <div className="mt-2 text-lg font-medium text-gray-900">Blog Posts</div>
                <div className="mt-1 text-gray-600">Shared knowledge and insights</div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
