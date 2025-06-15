"use client"

import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import type { RootState } from "../store/store"
import { removeFromCart, updateQuantity } from "../store/cartSlice"
import Header from "../components/Header"
import Footer from "../components/Footer"
import YouMayAlsoLike from "../components/YouMayAlsoLike"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const { items, total } = useSelector((state: RootState) => state.cart)

  const shipping = 10
  const tax = total * 0.08
  const finalTotal = total + shipping + tax

  const handleQuantityChange = (id: string, size: string, newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch(removeFromCart({ id, size }))
    } else {
      dispatch(updateQuantity({ id, size, quantity: newQuantity }))
    }
  }

  const handleRemoveItem = (id: string, size: string) => {
    dispatch(removeFromCart({ id, size }))
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some sneakers to get started!</p>
            <Button onClick={() => router.push("/")}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 border rounded-lg">
                <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.category}</p>
                  <p className="text-gray-600 mb-2">Size: {item.size}</p>
                  <p className="font-bold">${item.price}</p>
                </div>

                <div className="flex flex-col items-end gap-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                      className="p-1 border rounded hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                      className="p-1 border rounded hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id, item.size)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* Item Total */}
                  <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => router.push("/checkout")}
                className="w-full bg-black hover:bg-gray-800 text-white py-3"
              >
                Begin Checkout
              </Button>

              <Button variant="outline" onClick={() => router.push("/")} className="w-full mt-3">
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16">
          <YouMayAlsoLike />
        </div>
      </main>

      <Footer />
    </div>
  )
}
