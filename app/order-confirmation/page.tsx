"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import YouMayAlsoLike from "../components/YouMayAlsoLike"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderStatus, setOrderStatus] = useState<"success" | "failed" | "loading">("loading")

  const orderId = searchParams.get("orderId")
  const total = searchParams.get("total")

  useEffect(() => {
    // Simulate order processing
    const timer = setTimeout(() => {
      // 90% success rate for demo
      const success = Math.random() > 0.1
      setOrderStatus(success ? "success" : "failed")
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (orderStatus === "loading") {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold mb-2">Processing Your Order...</h1>
            <p className="text-gray-600">Please wait while we confirm your order</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (orderStatus === "failed") {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-red-600">Order Failed</h1>
            <p className="text-gray-600 mb-8">
              We're sorry, but there was an issue processing your order. Please try again.
            </p>
            <div className="space-x-4">
              <Button onClick={() => router.push("/checkout")} className="bg-black hover:bg-gray-800">
                Try Again
              </Button>
              <Button variant="outline" onClick={() => router.push("/")}>
                Continue Shopping
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4 text-green-600">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been successfully placed.</p>

          <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-8">
            <h2 className="font-semibold mb-2">Order Details</h2>
            <p className="text-gray-600">
              Order ID: <span className="font-mono font-bold">{orderId}</span>
            </p>
            <p className="text-gray-600">
              Total: <span className="font-bold">${total}</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              You will receive a confirmation email shortly with tracking information.
            </p>
          </div>

          <div className="space-x-4">
            <Button onClick={() => router.push("/")} className="bg-black hover:bg-gray-800">
              Continue Shopping
            </Button>
            <Button variant="outline" onClick={() => window.print()}>
              Print Receipt
            </Button>
          </div>
        </div>

        {/* You May Also Like */}
        <YouMayAlsoLike />
      </main>

      <Footer />
    </div>
  )
}
