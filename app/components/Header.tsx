'use client';

import type React from 'react';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { openAuthModal, logoutUser } from '../store/authSlice';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthModal from './AuthModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const isCartPage = pathname === '/cart';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleUserClick = () => {
    if (user) {
      dispatch(logoutUser());
    } else {
      dispatch(openAuthModal(false));
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        {/* Top bar */}
        <div className="bg-gray-100 px-4 py-2 text-center text-xs">
          <span>Free shipping on orders over $50</span>
        </div>

        {/* Main header */}
        <div className="px-4 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              KicksKart
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 md:flex">
              <Link href="/" className="transition-colors hover:text-gray-600">
                New
              </Link>
              <Link href="/?category=men" className="transition-colors hover:text-gray-600">
                Men
              </Link>
              <Link href="/?category=women" className="transition-colors hover:text-gray-600">
                Women
              </Link>
              <Link href="/?category=kids" className="transition-colors hover:text-gray-600">
                Kids
              </Link>
              <Link href="/?category=sale" className="transition-colors hover:text-gray-600">
                Sale
              </Link>
            </nav>

            {/* Search and Icons */}
            <div className="flex items-center space-x-4">
              {/* Search - Desktop */}
              <form onSubmit={handleSearch} className="hidden items-center md:flex">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 border-none bg-gray-100 pl-10 focus:bg-white"
                  />
                </div>
              </form>

              {/* Desktop Icons */}
              <div className="hidden items-center space-x-4 md:flex">
                <Button variant="ghost" size="icon" onClick={handleUserClick} className="relative">
                  <User className="h-5 w-5" />
                </Button>

                {!isCartPage && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push('/cart')}
                    className="relative"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="space-y-4 px-4 py-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-none bg-gray-100 pl-10"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block py-2 transition-colors hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New
                </Link>
                <Link
                  href="/?category=men"
                  className="block py-2 transition-colors hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men
                </Link>
                <Link
                  href="/?category=women"
                  className="block py-2 transition-colors hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women
                </Link>
                <Link
                  href="/?category=kids"
                  className="block py-2 transition-colors hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kids
                </Link>
                <Link
                  href="/?category=sale"
                  className="block py-2 transition-colors hover:text-gray-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sale
                </Link>
              </nav>

              {/* Mobile User Actions */}
              <div className="space-y-2 border-t border-gray-200 pt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    handleUserClick();
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  {user ? 'Sign Out' : 'Sign In'}
                </Button>

                {!isCartPage && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      router.push('/cart');
                      setIsMenuOpen(false);
                    }}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
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
  );
}
