"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "../store/productsSlice"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-square relative overflow-hidden bg-gray-100">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-gray-600 transition-colors">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{product.category}</p>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      </div>
    </Link>
  )
}
