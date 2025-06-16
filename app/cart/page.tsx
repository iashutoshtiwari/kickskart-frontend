'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import type { RootState } from '../store/store';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import YouMayAlsoLike from '../components/YouMayAlsoLike';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const shipping = 10;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

  const handleQuantityChange = (id: string, size: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart({ id, size }));
    } else {
      dispatch(updateQuantity({ id, size, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id: string, size: string) => {
    dispatch(removeFromCart({ id, size }));
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Your Cart is Empty</h1>
          <p className="mb-8 text-gray-600">Add some sneakers to get started!</p>
          <Button onClick={() => router.push('/')}>Continue Shopping</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 rounded-lg border p-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
                <p className="mb-2 text-gray-600">{item.category}</p>
                <p className="mb-2 text-gray-600">Size: {item.size}</p>
                <p className="font-bold">₹{item.price}</p>
              </div>

              <div className="flex flex-col items-end gap-4">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                    className="rounded border p-1 transition-colors hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                    className="rounded border p-1 transition-colors hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item.id, item.size)}
                  className="rounded p-2 text-red-500 transition-colors hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                </button>

                {/* Item Total */}
                <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

            <div className="mb-4 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => router.push('/checkout')}
              className="w-full bg-black py-3 text-white hover:bg-gray-800"
            >
              Begin Checkout
            </Button>

            <Button variant="outline" onClick={() => router.push('/')} className="mt-3 w-full">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="mt-16">
        <YouMayAlsoLike />
      </div>
    </div>
  );
}
