import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">KicksKart</h3>
            <p className="mb-4 text-gray-400">
              Your ultimate destination for premium sneakers and athletic footwear.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4 font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="mb-4 font-semibold">Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 KicksKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
