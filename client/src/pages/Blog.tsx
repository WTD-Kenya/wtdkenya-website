import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import type { HashnodePost } from "@/lib/types";

export default function Blog() {
  const { data: posts, isLoading, error } = useQuery<HashnodePost[]>({
    queryKey: ["/api/blog"],
  });
  
  const [samplePosts, setSamplePosts] = useState<HashnodePost[]>([]);
  
  useEffect(() => {
    import("@/data/sampleBlogs.json").then((module) => {
      const shuffled = [...module.default].sort(() => 0.5 - Math.random());
      setSamplePosts(shuffled);
    });
  }, []);
  
  const displayPosts = posts && posts.length > 0 ? posts : samplePosts;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Stories, Insights & Ideas from the Docs Community in Kenya
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore thoughts, event stories, and documentation tips.
            </p>
           
            <div className="mt-8 space-x-4">
              <Button 
                className="bg-accent-orange text-white hover:bg-accent-orange/90 hover:scale-105 transition-transform duration-200"
                onClick={() => window.open('https://wtdkenya.hashnode.dev', '_blank')}
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Visit Our External Blog
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 transition-transform duration-200"
                onClick={() => window.open('https://wtdkenya.hashnode.dev/writeforus', '_blank')}
              >
                <i className="fas fa-pen mr-2"></i>
                Contribute a Blog Post
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Feed */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <Skeleton className="w-full h-48" />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="ml-3">
                          <Skeleton className="h-4 w-24 mb-1" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                      <Skeleton className="h-6 w-full mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-6" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {error && posts?.length === 0 && (
              <Alert className="max-w-md mx-auto">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Unable to load live blog posts. To see our latest content, visit our external blog.
                </AlertDescription>
              </Alert>
            )}
            
            {displayPosts && displayPosts.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <i className="fas fa-pen-alt text-gray-400 text-6xl mb-4"></i>
                <p className="text-gray-600 text-lg">No blog posts available yet.</p>
                <p className="text-gray-500 mt-2">Be the first to contribute!</p>
                <Button className="mt-6 bg-accent-orange text-white hover:bg-accent-orange/90">
                  <i className="fas fa-pen mr-2"></i>
                  Write a Post
                </Button>
              </div>
            )}
            
            {displayPosts && displayPosts.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA to Contribute */}
        <section className="py-16 bg-accent-orange">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Share Your Knowledge</h2>
            <p className="mt-4 text-xl text-orange-100 max-w-3xl mx-auto">
              Have insights about documentation, technical writing, or developer experience? 
              We'd love to feature your story on our blog.
            </p>
            <div className="mt-8 space-x-4">
              <Button className="bg-white text-accent-orange hover:bg-gray-100">
                <i className="fas fa-pen mr-2"></i>
                Submit a Post
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-accent-orange">
                <i className="fas fa-info-circle mr-2"></i>
                Writing Guidelines
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
