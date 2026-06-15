"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLink: string;
  ctaText: string;
}

const slides: Slide[] = [
  {
    title: "LANDSCAPE",
    subtitle: "LIGHTING",
    description: "Illuminate Your Outdoors with Elegance",
    image: "/hero/LANDSCAPE_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
  {
    title: "PERMANENT",
    subtitle: "LIGHTING",
    description: "Efficiency Meets Elegance in Lighting",
    image: "/hero/PERMANENT_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
  {
    title: "PATIO",
    subtitle: "LIGHTING",
    description: "Transform Your Patio into a Nighttime Paradise",
    image: "/hero/PATIO_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
  {
    title: "EVENTS",
    subtitle: "LIGHTING",
    description: "Create Unforgettable Moments with Magical Lighting",
    image: "/hero/SPECIAL-EVENTS_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
  {
    title: "HOLIDAY",
    subtitle: "LIGHTING",
    description: "Spread Good Cheer and Joy with Holiday Lighting",
    image: "/hero/Holidays_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
  {
    title: "HOLIDAY",
    subtitle: "DECOR",
    description: "Captivating Lighting Displays",
    image: "/hero/Holiday-Decor_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
  {
    title: "HOLIDAY",
    subtitle: "INTERIORS",
    description: "Make the Holiday Season Bright, Colorful and Festive",
    image: "/hero/Holidays-Interior_compressed.webp",
    ctaLink: "/locations",
    ctaText: "Find a Lighting Pro Near You",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Create extended slides array with clones for infinite loop
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  // Adjust currentIndex after transition
  useEffect(() => {
    if (!isAnimating) {
      if (currentIndex === 0) {
        // Jump to the real last slide
        setTimeout(() => {
          setCurrentIndex(slides.length);
        }, 0);
      } else if (currentIndex === extendedSlides.length - 1) {
        // Jump to the real first slide
        setTimeout(() => {
          setCurrentIndex(1);
        }, 0);
      }
    }
  }, [currentIndex, isAnimating, slides.length, extendedSlides.length]);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isDragging]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    // Add 1 because of the clone at the beginning
    setCurrentIndex(index + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Drag/Swipe functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Get the actual slide index for dots highlighting
  const getRealIndex = () => {
    if (currentIndex === 0) return slides.length - 1;
    if (currentIndex === extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  };

  const realIndex = getRealIndex();

  return (
    <div
      className="relative w-full overflow-hidden h-auto lg:h-[475px]"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative min-h-[300px] md:min-h-[475px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <div className="text-white tracking-wide text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 font-poppins">
                {slide.title}
                <p className="text-[var(--e-global-color-accent)] tracking-wide text-3xl md:text-5xl font-extrabold lg:text-7xl mt-2 font-poppins">
                  {slide.subtitle}
                </p>
              </div>
              <p className="text-white font-bold text-lg md:text-3xl mt-4 max-w-2xl">
                {slide.description}
              </p>
              <Link
                href={slide.ctaLink}
                className="inline-block bg-[var(--e-global-color-accent)] hover:bg-[var(--e-global-color-primary)] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 mt-8"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              realIndex === index
                ? "bg-[var(--e-global-color-accent)] w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
