'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const textRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHovering = useRef<boolean>(false);

  useEffect(() => {
    // Trigger effect automatically when page loads
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.classList.add('text-glow-wave');
              }
            }, 500);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (textRef.current) {
      isHovering.current = true;
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Remove class first to reset animation
      textRef.current.classList.remove('text-glow-wave');
      
      // Delay to ensure smooth reset
      timeoutRef.current = setTimeout(() => {
        if (textRef.current && isHovering.current) {
          textRef.current.classList.add('text-glow-wave');
        }
      }, 150);
    }
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Let animation complete naturally, don't remove class
  };

  return (
    <div className="bg-black">
      {/* Header */}
      <Header />   {/* ✅ use the new component instead of hand-coded header */}

      {/* About Hero Section */}
      <section className="relative py-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#22C55E]/20 to-transparent rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-400 mb-3" style={{ fontFamily: 'Raleway' }}>
              Deep Sight was founded on one principle:
            </h2>
            <p className="text-5xl md:text-7xl font-bold tracking-tight" style={{ fontFamily: 'Poppins' }}>
              <span 
                ref={textRef}
                className="bg-gradient-to-r from-[#22C55E] via-[#22C55E] to-[#16A34A] bg-clip-text text-transparent cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                clarity in flow.
              </span>
            </p>
          </div>

          {/* Expansion Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/10 to-[#16A34A]/10 rounded-3xl blur-2xl animate-pulse" />
            <div className="relative p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
              <p className="text-lg text-gray-400 mb-10 uppercase tracking-wider font-light">
                That principle drives everything we build:
              </p>
              <div className="space-y-8">
                <div className="flex items-start hover:translate-x-1 transition-all duration-300">
                  <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                  <p className="text-xl text-gray-100 font-light">
                    <span className="hover:text-[#22C55E] transition-colors duration-300">Systems</span>{' '}
                    that move <span className="text-white font-medium">together</span> instead of apart.
                  </p>
                </div>
                <div className="flex items-start hover:translate-x-1 transition-all duration-300">
                  <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                  <p className="text-xl text-gray-100 font-light">
                    <span className="hover:text-[#22C55E] transition-colors duration-300">Data</span>{' '}
                    that <span className="text-white font-medium">informs</span> instead of overwhelms.
                  </p>
                </div>
                <div className="flex items-start hover:translate-x-1 transition-all duration-300">
                  <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                  <p className="text-xl text-gray-100 font-light">
                    <span className="hover:text-[#22C55E] transition-colors duration-300">Processes</span>{' '}
                    that create <span className="text-white font-medium">speed</span> instead of friction.
                  </p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-lg text-gray-300 font-light italic">
                  Because when complexity is reduced to flow, clarity becomes inevitable.
                </p>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex flex-col items-center mt-16">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 hover:border-[#22C55E]/50 transition-all duration-500 shadow-2xl hover:shadow-[#22C55E]/20">
              <img
                src="/images/profile.png"
                alt="Kieran - Founder of Deep Sight"
                className="w-full h-full object-cover"
              />
            </div>
            <a 
              href="https://www.linkedin.com/in/kieran-junge-31702078/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-[#22C55E] mt-6 font-light transition-colors duration-300" 
              style={{fontFamily: 'Raleway'}}
            >
              Founder & CEO of Deep Sight
            </a>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <div className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              I started Deep Sight after watching a billion-dollar company nearly fail because their systems couldn&#39;t talk.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Not from bad strategy. Not from competition. From the simple inability to connect Salesforce to their warehouse system in time for Black Friday.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              That&#39;s when I realized: the problem isn&#39;t just connecting systems. It&#39;s that once connected, the data just flows dumb. No learning. No patterns. No intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-black py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Core Mission */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Poppins' }}>
              Deep Sight exists to build the{' '}
              <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">intelligent tissue</span>{' '}
              between systems.
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Not just middleware that moves data, but a layer that understands it. AI that learns your business logic,
              catches anomalies before they cascade, and surfaces insights from the flow itself.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#22C55E]/30 transition-all duration-500">
              <h4 className="text-xl font-bold text-[#22C55E] mb-4" style={{ fontFamily: 'Poppins' }}>
                Today
              </h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Custom integrations with smart routing and anomaly detection. We&#39;re building the foundation —
                middleware that doesn&#39;t just connect, but begins to understand.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#22C55E]/30 transition-all duration-500">
              <h4 className="text-xl font-bold text-[#22C55E] mb-4" style={{ fontFamily: 'Poppins' }}>
                Tomorrow
              </h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Middleware that gets smarter with every transaction — predicting bottlenecks, suggesting optimizations,
                even healing its own broken connections.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/50 transition-all duration-500">
              <h4 className="text-xl font-bold bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent mb-4" style={{ fontFamily: 'Poppins' }}>
                The Endgame
              </h4>
              <p className="text-lg text-gray-200 leading-relaxed">
                Your systems don&#39;t just work together. They <span className="text-white font-medium">think together</span>.
                Intelligence that lives in the connections, not the applications. Available when you need it, invisible when you don&#39;t.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-16 p-8 text-center">
            <p className="text-xl text-gray-300 font-light italic">
              Until then, we&#39;re in the trenches, building one intelligent integration at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-20">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => (window.location.href = '/#services')}
                className="px-10 py-5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold transition text-xl"
                style={{ fontFamily: 'Poppins' }}
              >
                See Our Approach →
              </button>
              <button
                onClick={() => (window.location.href = '/#contact')}
                className="px-10 py-5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition text-xl"
                style={{ fontFamily: 'Poppins' }}
              >
                Start Building Intelligence
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-3xl font-bold bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent mb-4">
              Deep Sight
            </h4>
            <p className="text-gray-400">Professional technology consulting for family offices</p>
            <p className="text-gray-500 mt-2">© 2025 Deep Sight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}