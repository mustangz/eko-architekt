"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src: string; title: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full mx-4 lightbox-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/60 hover:text-white text-4xl transition-colors"
          aria-label="Zamknij"
        >
          &times;
        </button>

        {/* Image */}
        <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden">
          <Image
            src={current.src}
            alt={current.title}
            fill
            className="object-contain"
            sizes="90vw"
          />
        </div>

        {/* Title + counter */}
        <div className="text-center mt-6">
          <p className="text-white font-heading text-xl">{current.title}</p>
          <p className="text-white/40 text-sm mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-14 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white text-5xl transition-colors"
          aria-label="Poprzedni"
        >
          &#8249;
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-14 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white text-5xl transition-colors"
          aria-label="Następny"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
