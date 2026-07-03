import { useQuery } from "@tanstack/react-query";

const query = `
  query GetPosts($host: String!) {
    publication(host: $host) {
      posts(first: 50) {
        edges {
          node {
            id
            title
            brief
            slug
            coverImage {
              url
            }
            url
            publishedAt
            author {
              name
              profilePicture
            }
          }
        }
      }
    }
  }
`;

// Hashnode's public GraphQL API has been discontinued (gql.hashnode.com now
// redirects to a paid-access changelog page), so this call is expected to
// fail. Any failure here resolves to an empty list instead of throwing, so
// callers fall back to curated posts instead of surfacing a network error.
const fetchHashnodePosts = async (): Promise<any[]> => {
  try {
    const res = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: {
          host: "wtdkenya.hashnode.dev"
        }
      })
    });

    if (!res.ok) return [];

    const data = await res.json();
    const edges = data?.data?.publication?.posts?.edges;
    if (!edges) return [];

    const allPosts = edges.map((edge: any) => ({
      ...edge.node,
      id: edge.node.id || edge.node.slug,
      coverImage: edge.node.coverImage?.url,
    }));

    // Randomly select 12 posts
    const shuffled = [...allPosts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12);
  } catch {
    return [];
  }
};

export function useHashnodePosts() {
  return useQuery({
    queryKey: ["hashnode-posts"],
    queryFn: fetchHashnodePosts,
    refetchInterval: 30 * 60 * 1000, // Refetch every 30 minutes
    staleTime: 25 * 60 * 1000, // Consider data stale after 25 minutes
  });
}
