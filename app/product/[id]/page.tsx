'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { addToCart } from '../../store/cartSlice';
import YouMayAlsoLike from '../../components/YouMayAlsoLike';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { formatINR } from '@/lib/utils';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === params.id),
  );

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 text-center">
        <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
        <Button onClick={() => router.push('/')}>Back to Home</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: selectedSize,
        quantity,
        category: product.category,
      }),
    );

    // Show success message or redirect to cart
    alert('Added to cart!');
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 transition-colors hover:text-black"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </button>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[selectedImage] || '/placeholder.svg'}
              alt={product.name}
              fill
              className="object-cover"
            />

            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="bg-opacity-80 hover:bg-opacity-100 absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white p-2 transition-all"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-opacity-80 hover:bg-opacity-100 absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white p-2 transition-all"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 w-20 overflow-hidden rounded-lg border-2 bg-gray-100 transition-all ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
            <p className="mb-4 text-gray-600">{product.category}</p>
            <p className="font-grotesk text-3xl font-bold">{formatINR(product.price, false)}</p>
          </div>
          <div>
            <p className="leading-relaxed text-gray-700">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="mb-3 font-semibold">Select Size</h3>
            <div className="font-grotesk grid grid-cols-3 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-4 py-3 text-center transition-all ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className="mb-3 font-semibold">Quantity</h3>
            <div className="font-grotesk flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="rounded-lg border p-2 transition-colors hover:bg-gray-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="rounded-lg border p-2 transition-colors hover:bg-gray-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            size="lg"
            className="w-full bg-black py-4 text-lg text-white hover:bg-gray-800"
          >
            Add to Cart
          </Button>

          {/* Product Features */}
          <div className="border-t pt-6">
            <h3 className="mb-3 font-semibold">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Premium materials and construction</li>
              <li>• Comfortable all-day wear</li>
              <li>• Durable outsole for long-lasting performance</li>
              <li>• Available in multiple sizes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-16">
        <YouMayAlsoLike currentProductId={product.id} />
      </div>
    </div>
  );
}
