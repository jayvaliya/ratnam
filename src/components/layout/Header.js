'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with logo on left and contact info on right */}
        <div className="hidden md:flex justify-between items-center py-3 border-b border-gray-200">
          {/* Logo on left */}
          <Link href="/" className="hover:opacity-80 transition">
            <img src="/images/logos/logo.png" alt="Ratnam Enterprise" className="h-12" />
          </Link>

          {/* Contact info on right */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-gray-600 font-medium">Call Us Now</span>
              <a href="tel:9429094277" className="text-primary font-semibold hover:underline">94290 94277</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-gray-600 font-medium">Email</span>
              <a href="mailto:sales@ratnam.org.in" className="text-primary hover:underline">
                sales@ratnam.org.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with navigation on left and Get a Quote button on right */}
        <nav className="hidden md:flex items-center justify-between py-2">
          {/* Navigation links on left */}
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-primary font-medium transition pb-1 ${
                pathname === '/' ? 'border-b-2 border-secondary text-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              className={`text-gray-700 hover:text-primary font-medium transition pb-1 ${
                pathname === '/about-us' ? 'border-b-2 border-secondary text-primary' : ''
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/products" 
              className={`text-gray-700 hover:text-primary font-medium transition pb-1 ${
                pathname === '/products' ? 'border-b-2 border-secondary text-primary' : ''
              }`}
            >
              Products
            </Link>
            <Link 
              href="/contact-us" 
              className={`text-gray-700 hover:text-primary font-medium transition pb-1 ${
                pathname === '/contact-us' ? 'border-b-2 border-secondary text-primary' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Get a Quote button on right */}
          <Link 
            href="/contact-us" 
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition font-medium shadow-sm"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition">
            <img src="/images/logos/logo.png" alt="Ratnam Enterprise" className="h-10" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              <div className="pb-3 border-b border-gray-200 mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-gray-600 text-sm">Call:</span>
                  <a href="tel:9429094277" className="text-primary text-sm font-semibold">94290 94277</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-gray-600 text-sm">Email:</span>
                  <a href="mailto:sales@ratnam.org.in" className="text-primary text-sm">
                    sales@ratnam.org.in
                  </a>
                </div>
              </div>
              <Link 
                href="/" 
                className={`block text-gray-700 hover:text-primary font-medium transition py-2 ${
                  pathname === '/' ? 'text-primary border-l-2 border-secondary pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                className={`block text-gray-700 hover:text-primary font-medium transition py-2 ${
                  pathname === '/about-us' ? 'text-primary border-l-2 border-secondary pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/products" 
                className={`block text-gray-700 hover:text-primary font-medium transition py-2 ${
                  pathname === '/products' ? 'text-primary border-l-2 border-secondary pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/contact-us" 
                className={`block text-gray-700 hover:text-primary font-medium transition py-2 ${
                  pathname === '/contact-us' ? 'text-primary border-l-2 border-secondary pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/contact-us" 
                className="block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition font-medium text-center mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

