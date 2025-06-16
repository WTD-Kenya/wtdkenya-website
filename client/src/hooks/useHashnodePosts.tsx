import { useQuery } from "@tanstack/react-query";

const query = `
  query GetPosts($host: String!) {
    publication(host: $host) {
      posts(first: 10) {
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
        host: "wtdkenya.hashnode.dev" // ✅ Use your blog subdomain
      }
    })
  });

  const data = await res.json();
  return data.data.publication.posts.edges.map((edge: any) => ({
    ...edge.node,
    id: edge.node.id || edge.node.slug // fallback for BlogCard key
  }));
};

export function useHashnodePosts() {
  return useQuery({
    queryKey: ["hashnode-posts"],
    queryFn: fetchHashnodePosts,
  });
}
