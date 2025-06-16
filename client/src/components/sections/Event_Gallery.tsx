import { useEffect, useState } from "react";

interface GalleryItem {
  image: string;
  caption: string;
}

/**
 * EventGallery fetches images and captions from the backend and displays them in a grid.
 * Images auto-cycle with a smooth fade animation.
 */
export default function EventGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(true);

  // Fetch images and captions from the backend API on mount
  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  // Cycle through images every 4 seconds
  useEffect(() => {
    if (items.length < 6) return;
    const interval = setInterval(() => {
      setVisibleIndexes(prev =>
        prev.map(i => (i + 1) % items.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {loading || items.length < 6
        ? Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl shadow-lg bg-gray-100 animate-pulse h-[220px] sm:h-[260px] lg:h-[220px]" />
          ))
        : visibleIndexes.map(idx => (
            <div key={items[idx].image} className="relative rounded-xl shadow-lg overflow-hidden group h-[220px] sm:h-[260px] lg:h-[220px] transition-all duration-700">
              <img
                src={items[idx].image}
                alt={items[idx].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                style={{ minHeight: 180 }}
              />
              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <span className="text-white text-base font-medium px-4 pb-2 drop-shadow-lg">
                  {items[idx].caption}
                </span>
              </div>
            </div>
          ))}
    </div>
  );
}