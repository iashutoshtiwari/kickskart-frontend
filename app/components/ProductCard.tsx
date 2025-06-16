'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '../store/productsSlice';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="overflow-hidden rounded-lg bg-white transition-shadow duration-300 hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images[0] || '/placeholder.svg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-gray-600">
            {product.name}
          </h3>
          <p className="mb-2 text-sm text-gray-500">{product.category}</p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
