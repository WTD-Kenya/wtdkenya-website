import { useEffect, useState } from "react";

/**
 * EventGallery fetches images from the backend and displays them in a grid.
 * Images auto-cycle with a smooth fade animation.
 */
export default function EventGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2]);

  // Fetch images from the backend API on mount
  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(setImages);
  }, []);

  // Cycle through images every 4 seconds
  useEffect(() => {
    if (images.length < 3) return;
    const interval = setInterval(() => {
      setVisibleIndexes(prev =>
        prev.map(i => (i + 1) % images.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {images.length >= 3
        ? visibleIndexes.map(idx => (
            <img
              key={images[idx]}
              src={images[idx]}
              alt="Event highlight"
              className="rounded-xl shadow-lg transition-opacity duration-700 ease-in-out opacity-100"
              style={{ width: 400, height: 300, objectFit: "cover" }}
            />
          ))
        : [1, 2, 3].map(i => (
            <div key={i} className="rounded-xl shadow-lg bg-gray-100 animate-pulse" style={{ width: 400, height: 300 }} />
          ))}
    </div>
  );
}