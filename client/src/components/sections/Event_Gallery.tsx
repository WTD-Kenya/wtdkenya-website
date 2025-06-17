import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  image: string;
  caption: string;
  fallbackImage?: string;
  note?: string;
}

/**
 * EventGallery displays images in a grid with smooth animations and fallback options.
 * It first tries to fetch from the API, then falls back to local images if needed.
 * Supports both local and remote images with proper fallback handling.
 */
export default function EventGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Handle image load error and use fallback
  const handleImageError = (originalSrc: string, fallbackSrc: string) => {
    if (!failedImages.has(originalSrc)) {
      setFailedImages(prev => new Set([...prev, originalSrc]));
      // Update the items array to use the fallback image
      setItems(prev => prev.map(item => 
        item.image === originalSrc 
          ? { ...item, image: fallbackSrc }
          : item
      ));
    }
  };

  // Fetch images with fallback
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Try to fetch from API first
        const response = await fetch("/api/gallery");
        if (!response.ok) throw new Error("API fetch failed");
        
        const data = await response.json();
        if (data && data.length >= 6) {
          setItems(data);
          setLoading(false);
          return;
        }
        throw new Error("Insufficient API data");
      } catch (err) {
        // Fallback to local images
        try {
          const localData = await import("@/data/galleryImages.json");
          setItems(localData.images);
          setError(true);
        } catch (fallbackErr) {
          console.error("Failed to load fallback images:", fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
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

  // Loading skeleton
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="rounded-xl shadow-lg bg-gray-100 animate-pulse h-[220px] sm:h-[260px] lg:h-[220px]"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="wait">
        {visibleIndexes.map((idx, i) => (
          <motion.div
            key={`${items[idx].image}-${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative rounded-xl shadow-lg overflow-hidden group h-[220px] sm:h-[260px] lg:h-[220px]"
          >
            <motion.img
              src={items[idx].image}
              alt={items[idx].caption}
              className="w-full h-full object-cover"
              style={{ minHeight: 180 }}
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onError={() => items[idx].fallbackImage && 
                handleImageError(items[idx].image, items[idx].fallbackImage!)
              }
            />
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent flex items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white text-base font-medium px-4 pb-2 drop-shadow-lg">
                {items[idx].caption}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* {error && (
        <div className="fixed bottom-4 right-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg shadow-lg">
          Using local fallback images
        </div>
      )} */}
    </div>
  );
}