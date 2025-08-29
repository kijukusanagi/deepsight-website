'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-black/20 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className="w-10 h-10 rounded-lg mr-3"
              style={{ background: 'linear-gradient(135deg, #0E613C 0%, #99CC00 100%)' }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
              Deep Sight
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link
              href="/#contact"
              className="px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <span className="sr-only">Toggle navigation</span>
            {!open ? (
              // Hamburger
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
              </svg>
            ) : (
              // Close (X)
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M18.3 5.71 12 12.01l-6.29-6.3-1.41 1.42 6.29 6.29-6.3 6.29 1.42 1.41 6.29-6.29 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.29-1.41-1.42Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute inset-x-0 top-full bg-black/95 border-t border-white/10 shadow-xl"
        >
          <div className="px-6 py-4 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link href="/#services" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link href="/#contact" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#contact"
              className="mt-2 block text-center px-4 py-3 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}