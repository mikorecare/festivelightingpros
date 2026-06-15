"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "./reviews-data";

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(6);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, reviews.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, reviews.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    goToPrev();
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    goToNext();
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleAvatarClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }, 500);
  };

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 5000); // Change slide every 5 seconds
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, goToNext]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative w-full bg-gradient-to-b from-[#1d3156] to-[#101518] py-4 md:py-8 overflow-hidden">
      {/* Swoosh Background - always half width */}
      <div className="absolute top-[-80px] left-0 w-[50%] h-auto opacity-20 pointer-events-none z-0">
        <Image
          src="/reviews/Swoosh-boxed-flipped.png"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-[#c49a3f] text-sm md:text-base tracking-[0.2em] font-semibold mb-4">
              ILLUMINATING REVIEWS
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Discover how our professional outdoor lighting services spark joy
              and security. Check out what our customers are saying and see how
              we've brightened their homes and landscapes. From enhancing curb
              appeal to creating captivating outdoor atmospheres, our lighting
              solutions have left lasting impressions.
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 md:justify-start">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#ff890b]/20 hover:bg-[#ff890b] text-[#ff890b] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-[#ff890b]/20 hover:bg-[#ff890b] text-[#ff890b] hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Avatars + Testimonial */}
          <div
            className="lg:w-1/2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Testimonial Card - with avatar overlapping the top border */}
            <div className="relative mb-12">
              <div
                ref={carouselRef}
                className={`bg-white rounded-2xl pt-12 pb-8 px-6 md:px-8 shadow-xl transition-opacity duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                {/* Avatar positioned at the top center - overlapping the card border */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 ring-4 ring-white shadow-lg">
                    <Image
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#ff890b] text-[#ff890b]"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    "{currentReview.text}"
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-[#1d3156] font-bold text-lg">
                      {currentReview.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {currentReview.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Avatar Strip - below the card */}
            <div className="flex flex-wrap justify-center gap-4">
              {reviews.map((review, index) => (
                <button
                  key={review.id}
                  onClick={() => handleAvatarClick(index)}
                  className={`relative transition-all duration-300 hover:scale-110 ${
                    index === currentIndex
                      ? "ring-2 ring-[#ff890b] ring-offset-2 ring-offset-[#0a0e12] scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Auto-play indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleAvatarClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-6 h-2 bg-[#ff890b]"
                      : "w-2 h-2 bg-[#ff890b]/30 hover:bg-[#ff890b]/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
