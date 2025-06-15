"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store/store"
import { openAuthModal, logoutUser } from "../store/authSlice"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AuthModal from "./AuthModal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch()

  const cartItems = useSelector((state: RootState) => state.cart.items)
  const user = useSelector((state: RootState) => state.auth.user)

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const isCartPage = pathname === "/cart"

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  const handleUserClick = () => {
    if (user) {
      dispatch(logoutUser())
    } else {
      dispatch(openAuthModal(false))
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        {/* Top bar */}
        <div className="bg-gray-100 px-4 py-2 text-xs text-center">
          <span>Free shipping on orders over $50</span>
        </div>

        {/* Main header */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              SneakZone
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-gray-600 transition-colors">
                New
              </Link>
              <Link href="/?category=men" className="hover:text-gray-600 transition-colors">
                Men
              </Link>
              <Link href="/?category=women" className="hover:text-gray-600 transition-colors">
                Women
              </Link>
              <Link href="/?category=kids" className="hover:text-gray-600 transition-colors">
                Kids
              </Link>
              <Link href="/?category=sale" className="hover:text-gray-600 transition-colors">
                Sale
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              {/* Search - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-48 bg-gray-100 border-none focus:bg-white"
                  />
                </div>
              </form>

              {/* Desktop Icons */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={handleUserClick} className="relative">
                  <User className="w-5 h-5" />
                </Button>

                {!isCartPage && (
                  <Button variant="ghost" size="icon" onClick={() => router.push("/cart")} className="relative">
                    <ShoppingBag className="w-5 h-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-gray-100 border-none"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New
                </Link>
                <Link
                  href="/?category=men"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men
                </Link>
                <Link
                  href="/?category=women"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women
                </Link>
                <Link
                  href="/?category=kids"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kids
                </Link>
                <Link
                  href="/?category=sale"
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sale
                </Link>
              </nav>

              {/* Mobile User Actions */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    handleUserClick()
                    setIsMenuOpen(false)
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  {user ? "Sign Out" : "Sign In"}
                </Button>

                {!isCartPage && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      router.push("/cart")
                      setIsMenuOpen(false)
                    }}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Cart ({cartItemCount})
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal />
    </>
  )
}
