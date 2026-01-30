"use client";

import { useState } from "react";

interface ImagesCarouselProps {
  images: string[];
}

const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const currentImage = images[currentImageIndex];
  const currentFileName = currentImage.split("/").pop();

  return (
    <div className="relative mt-6 flex flex-col items-center">
      {/* ---------- FULL SCREEN ---------- */}
      {isFullScreen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setIsFullScreen(false)} // Close full screen on click
        >
          <img
            src={currentImage}
            alt="Full screen view"
            className="max-w-[95vw] max-h-[95vh] object-contain rounded"
          />
        </div>
      )}

      {/* ---------- NORMAL VIEW (Restricted to 45% SCREEN) ---------- */}
      <div
        className="cursor-pointer"
        style={{
          width: "45vw", // Image container restricted to 45% of viewport width
          height: "auto", // Maintain aspect ratio automatically
          overflow: "hidden", // Prevent any content flow outside the container
        }}
        onClick={() => setIsFullScreen(true)} // Open full screen on click
      >
        <img
          src={currentImage}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-auto object-contain rounded-lg shadow-md bg-black"
        />
      </div>

      {/* ---------- FILE NAME ---------- */}
      <p className="mt-2 text-sm text-gray-500 text-center">
        {currentFileName}
      </p>

      {/* ---------- NAVIGATION BUTTONS ---------- */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-navy text-white px-3 py-1 rounded-md hover:bg-slate transition"
        aria-label="Previous Image"
      >
        ←
      </button>

      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-navy text-white px-3 py-1 rounded-md hover:bg-slate transition"
        aria-label="Next Image"
      >
        →
      </button>
    </div>
  );
};

export default ImagesCarousel;