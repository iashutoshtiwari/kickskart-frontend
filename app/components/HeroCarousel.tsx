'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: 'JUST DO IT',
    subtitle: 'Bring your game to the next level with our latest collection',
    image: '/nike.webp',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'RUN YOUR WORLD',
    subtitle: 'Experience the ultimate comfort and performance',
    image: '/phantom.webp',
    cta: 'Explore',
  },
  {
    id: 3,
    title: 'STEP INTO GREATNESS',
    subtitle: 'Discover the perfect pair for every occasion',
    image: '/jordan.webp',
    cta: 'Shop Collection',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative h-[60vh] overflow-hidden bg-gray-900 md:h-[70vh]">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? 'translate-x-0'
              : index < currentSlide
                ? '-translate-x-full'
                : 'translate-x-full'
          }`}
        >
          {/* Fixed Image Wrapper */}
          <div className="relative h-full w-full">
            <Image
              src={slide.image || '/placeholder.svg'}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Slide Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="font-anton max-w-4xl px-4">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{slide.title}</h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">{slide.subtitle}</p>
              <Button size="lg" className="bg-white px-8 py-3 text-lg text-black hover:bg-gray-200">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-opacity-50 bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
