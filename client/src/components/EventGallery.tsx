import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, ImageOff } from "lucide-react";

interface GalleryImage {
  public_id: string;
  alt?: string;
}

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const getCloudinaryImageUrl = (publicId: string, width: number, height: number) => {
  if (!CLOUDINARY_CLOUD_NAME) {
    console.error("VITE_CLOUDINARY_CLOUD_NAME is not configured in .env");
    // Fallback or placeholder image can be returned here
    return `https://via.placeholder.com/${width}x${height}?text=Image+Error`;
  }
  const transformations = `w_${width},h_${height},c_fill,q_auto,f_auto`;
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
};

export default function EventGallery() {
  const { data: images, isLoading, error } = useQuery<GalleryImage[], Error>({
    queryKey: ["eventGalleryImages"],
    queryFn: async (): Promise<GalleryImage[]> => {
      // Replace with your actual API endpoint to fetch images from Cloudinary via your backend
      // Example: const response = await fetch("/api/event-gallery-images?folder=event_highlights");
      const response = await fetch("/api/event-gallery-images");
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Failed to fetch gallery images" }));
        throw new Error(errorData.message || "Failed to fetch gallery images");
      }
      return response.json();
    },
  });

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4000 })]);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="w-full h-[250px] md:h-[300px] rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-lg mx-auto my-8">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Could not load event highlights: {error.message}. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <ImageOff size={48} className="mx-auto mb-4" />
        <p>No event highlights available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="embla -ml-4" ref={emblaRef}> {/* Negative margin to counteract slide padding */}
      <div className="embla__container flex">
        {images.map((image, index) => (
          <div className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] min-w-0 pl-4" key={image.public_id || index}>
            <img
              src={getCloudinaryImageUrl(image.public_id, 400, 300)}
              alt={image.alt || `Event highlight ${index + 1}`}
              className="rounded-xl shadow-lg object-cover w-full h-[250px] md:h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}