'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../store/productsSlice';
import { formatINR } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images[0] || '/placeholder.svg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <h3 className="mb-1 line-clamp-2 flex-1 text-lg font-semibold transition-colors group-hover:text-gray-600">
            {product.name}
          </h3>
          <p className="mb-2 text-sm text-gray-500">{product.category}</p>
          <p className="text-lg font-bold">{formatINR(product.price, false)}</p>
        </div>
      </div>
    </Link>
  );
}
