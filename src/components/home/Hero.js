'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  // Add your slider images here
  const slides = [
    '/images/slides/slide1.png',
    '/images/slides/slide2.png',
    '/images/slides/slide3.png',
    '/images/slides/slide4.png',
    '/images/slides/slide5.png',
    '/images/slides/slide6.png',
    '/images/slides/slide7.png',
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide, slides.length]); // Reset timer when currentSlide changes
  
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <section className="relative w-full h-[180px] md:h-[350px] lg:h-[650px] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto min-h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 md:w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

