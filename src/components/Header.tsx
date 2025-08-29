'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className="w-9 h-9 rounded-lg mr-3"
              style={{ background: 'linear-gradient(135deg, #0E613C 0%, #99CC00 100%)' }}
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
              Deep Sight
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            {open ? (
              /* X icon */
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M18.3 5.7 12 12l-6.3-6.3-1.4 1.4L10.6 13l-6.3 6.3 1.4 1.4L12 14.4l6.3 6.3 1.4-1.4L13.4 13l6.3-6.3-1.4-1.4Z" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="bg-black/95 border-t border-white/10 shadow-xl">
          <div className="px-6 py-4 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10" onClick={() => setOpen(false)}>Home</Link>
            <a href="#services" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10" onClick={() => setOpen(false)}>Services</a>
            <Link href="/about" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10" onClick={() => setOpen(false)}>About</Link>
            <a href="#contact" className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#contact"
              className="mt-2 block text-center px-4 py-3 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
