import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { Link } from "wouter";
import type { HashnodePost } from "@/lib/types";

export default function BlogHighlights() {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Latest from Our Blog</h2>
          <p className="mt-4 text-xl text-gray-600">Stories, insights, and ideas from the docs community</p>
        </div>
        
        <div className="mt-12">
          {isLoading && (
            <div className="grid gap-8 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
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
              <p className="text-gray-600 text-lg">No blog posts available.</p>
              <p className="text-gray-500 mt-2">Be the first to contribute!</p>
            </div>
          )}
          
          {displayPosts && displayPosts.length > 0 && (
            <div className="grid gap-8 lg:grid-cols-3">
              {displayPosts.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center space-x-4">
          <Link href="/blog">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View All Posts
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </Link>
          {/* <Button className="bg-accent-orange text-white hover:bg-accent-orange/90">
            <i className="fas fa-pen mr-2"></i>
            Contribute a Blog Post
          </Button> */}
        </div>
      </div>
    </section>
  );
}
