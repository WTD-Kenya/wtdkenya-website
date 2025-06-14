import type { HashnodePost } from "@/lib/types";

interface BlogCardProps {
  post: HashnodePost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleReadMore = () => {
    window.open(post.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {post.coverImage && (
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {post.author.profilePicture ? (
              <img 
                src={post.author.profilePicture} 
                alt={`${post.author.name} avatar`} 
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                <i className="fas fa-user text-gray-600"></i>
              </div>
            )}
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
          </div>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-3 text-gray-600 line-clamp-3">
          {post.brief}
        </p>
        <div className="mt-6">
          <button 
            onClick={handleReadMore}
            className="inline-flex items-center text-kenya-red font-medium hover:text-kenya-red/80 transition-colors"
          >
            Read More
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </article>
  );
}
