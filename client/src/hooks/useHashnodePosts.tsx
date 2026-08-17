import { useQuery } from "@tanstack/react-query";
import type { HashnodePost } from "@/lib/types";

const fetchHashnodePosts = async (): Promise<HashnodePost[]> => {
  const res = await fetch("/api/blog");
  if (!res.ok) return [];

  const posts: HashnodePost[] = await res.json();
  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
};

export function useHashnodePosts() {
  return useQuery({
    queryKey: ["hashnode-posts"],
    queryFn: fetchHashnodePosts,
    refetchInterval: 30 * 60 * 1000, // Refetch every 30 minutes
    staleTime: 25 * 60 * 1000, // Consider data stale after 25 minutes
  });
}
