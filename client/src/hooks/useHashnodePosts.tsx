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

const fetchHashnodePosts = async () => {
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

  const data = await res.json();
  const allPosts = data.data.publication.posts.edges.map((edge: any) => ({
    ...edge.node,
    id: edge.node.id || edge.node.slug
  }));

  // Randomly select 12 posts
  const shuffled = [...allPosts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 12);
};

export function useHashnodePosts() {
  return useQuery({
    queryKey: ["hashnode-posts"],
    queryFn: fetchHashnodePosts,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 4 * 60 * 1000, // Consider data stale after 4 minutes
  });
}
