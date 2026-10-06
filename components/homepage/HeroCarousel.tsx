'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroCarouselImage } from '@/data/hero-carousel-images';

interface HeroCarouselProps {
  images: HeroCarouselImage[];
}

export function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeItem = images[currentSlide] ?? images[0];

  return (
    <div
      className="absolute inset-0 flex flex-col select-none bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* 1. Product Image Showcase Stage (Strictly separated, zero overlap, zero crop) */}
      <div className="relative flex-1 min-h-0 w-full overflow-hidden">
        {images.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={item.title}
              aria-hidden={!isActive}
              className={`absolute inset-0 p-2 sm:p-3 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  fill
                  priority={index === 0}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding={index === 0 ? 'sync' : 'async'}
                  quality={75}
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 50vw, 550px"
                  className="object-contain w-full h-full p-2 transition-transform duration-700 ease-out group-hover:scale-105 drop-shadow-sm"
                />
              </div>
            </div>
          );
        })}

        {/* Manual Navigation Arrows (Vertically centered in image area) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous fastener slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 rounded-full border border-slate-200/90 bg-white/90 p-1.5 text-slate-700 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:text-brand-gold-strong focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next fastener slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 rounded-full border border-slate-200/90 bg-white/90 p-1.5 text-slate-700 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white hover:text-brand-gold-strong focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>

      {/* 2. Dedicated Specification & Control Bar (Completely below image, no overlap) */}
      <div className="shrink-0 border-t border-slate-200/90 bg-white/95 px-3.5 py-2.5 sm:px-4 sm:py-2.5 backdrop-blur-md z-20">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors duration-300 ${
              activeItem.badge === 'IN-HOUSE OEM'
                ? 'bg-amber-100 text-amber-900 border border-amber-300/80'
                : 'bg-slate-100 text-slate-700 border border-slate-300/80'
            }`}
          >
            {activeItem.badge}
          </span>

          {/* Progress Indicators */}
          <div className="flex items-center gap-1.5" aria-label="Carousel pagination">
            {images.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(dotIndex);
                }}
                aria-label={`Go to slide ${dotIndex + 1}: ${images[dotIndex].title}`}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                  dotIndex === currentSlide
                    ? 'w-5 bg-brand-gold shadow-sm'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-1 flex items-baseline justify-between gap-2">
          <p className="font-heading text-sm sm:text-base font-bold text-slate-900 truncate">
            {activeItem.title}
          </p>
          <span className="shrink-0 text-[11px] font-medium text-slate-500 hidden sm:inline">
            {activeItem.specs}
          </span>
        </div>
      </div>
    </div>
  );
}
