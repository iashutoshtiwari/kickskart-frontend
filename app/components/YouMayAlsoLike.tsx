'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface YouMayAlsoLikeProps {
  currentProductId?: string;
}

export default function YouMayAlsoLike({ currentProductId }: YouMayAlsoLikeProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const products = useSelector((state: RootState) => state.products.products);

  // Get random products excluding current product
  const suggestedProducts = products
    .filter((product) => product.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (suggestedProducts.length === 0) return null;

  return (
    <div className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">You May Also Like</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="rounded-full border p-2 transition-colors hover:bg-gray-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="rounded-full border p-2 transition-colors hover:bg-gray-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {suggestedProducts.map((product) => (
          <div key={product.id} className="w-64 flex-none">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
