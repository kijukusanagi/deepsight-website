'use client';
import Link from 'next/link';
import Header from '@/components/Header';
import { 
  Cross2Icon, 
  Link2Icon, 
  FileIcon, 
  DashboardIcon, 
  ComponentNoneIcon, 
  UpdateIcon 
} from '@radix-ui/react-icons';

import PlatformIntegration from '@/components/services/PlatformIntegration';
import AutomatedIntelligence from '@/components/services/AutomatedIntelligence';
import AdaptiveDataArchitecture from '@/components/services/AdaptiveDataArchitecture';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Header */}
      <Header />   {/* ✅ use the new component instead of hand-coded header */}

      {/* Hero Section with Singapore Image */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/singapore-skyline.png"
            alt="Singapore skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 animated-gradient" />
        </div>

        {/* Data Flow Overlay */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-40" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16A34A" stopOpacity="0" />
                <stop offset="50%" stopColor="#22C55E" stopOpacity="1" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
                <stop offset="50%" stopColor="#22C55E" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
                <stop offset="50%" stopColor="#22C55E" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 400 Q300 200 600 400 T1200 400"
              stroke="url(#flowGradient1)"
              strokeWidth="2"
              className="animate-pulse"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0,0; 0,-8; 0,0; 0,8; 0,0"
                dur="12s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M0 450 Q400 250 800 450 T1200 450"
              stroke="url(#flowGradient2)"
              strokeWidth="1.5"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0,0; 0,10; 0,0; 0,-6; 0,0"
                dur="15s"
                repeatCount="indefinite"
                begin="2s"
              />
            </path>
            <path
              d="M0 350 Q250 150 500 350 T1200 350"
              stroke="url(#flowGradient3)"
              strokeWidth="1"
              className="animate-pulse"
              style={{animationDelay: '2s'}}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0,0; 0,6; 0,0; 0,-10; 0,0"
                dur="18s"
                repeatCount="indefinite"
                begin="4s"
              />
            </path>
          </svg>
        </div>

        {/* Hero Content - Header in sky, content lower */}
        <div className="relative z-10 h-full">
          <div className="flex flex-col h-full">
            {/* Header positioned in upper third */}
            <div className="flex-1 flex items-center justify-center pt-20">
              <h2 className="text-6xl md:text-7xl font-bold leading-tight text-white text-center">
                The{" "}
                <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
                  seamless system.
                </span>
              </h2>
            </div>
            
            {/* Content positioned in lower section */}
            <div className="flex-1 flex items-end justify-center pb-20">
              <div className="text-center px-6">
                <p className="text-3xl text-gray-200 mb-6 max-w-3xl mx-auto font-medium hero-tagline">
                  No silos. No friction. Just flow.
                </p>
                <p className="text-xl text-gray-300 mb-3 max-w-4xl mx-auto leading-relaxed">
                  We build middleware that evolves — where tedious manual work dissolves into intelligent automation.
                </p>
                <p className="text-xl text-white font-bold mb-10 max-w-4xl mx-auto leading-relaxed">
                  Integrations that learn your business. Not platforms you learn to manage.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => window.location.href='#contact'}
                    className="px-10 py-5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold transition text-xl hero-tagline"
                  >
                    Book a Consultation →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Description Section */}
      <div className="bg-black pt-48 pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed text-center font-light">
            We unify platforms and data through a single integration layer — 
            <span className="text-white font-medium"> invisible middleware deployed in 6 weeks</span> that 
            makes your existing systems work as one.
          </p>
        </div>
      </div>

      {/* Intelligent Integration Services Section */}
      <section id="services" className="bg-black pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
              Intelligent Integration Services
            </span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Self-learning connections that get smarter daily
          </p>
          <Link 
            href="/services"
            className="inline-block px-8 py-3 rounded-xl border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E]/10 transition text-lg font-medium"
            style={{ fontFamily: 'Raleway' }}
          >
            Services
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Platform Integration */}
          <div className="gradient-sweep p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#22C55E]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#22C55E]/10">
            <div className="mb-6">
              <PlatformIntegration />
            </div>
            <h4 className="text-2xl font-bold mb-2 text-white">Platform Integration</h4>
            <p className="text-[#22C55E]/90 italic mb-4">
              Self-learning connections that get smarter daily
            </p>
            <p className="text-gray-300">
              Your integrations improve themselves — catching errors, optimizing paths, and predicting failures before they happen.
            </p>
          </div>

          {/* Automated Intelligence */}
          <div className="gradient-sweep p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#22C55E]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#22C55E]/10">
            <div className="mb-6">
              <AutomatedIntelligence />
            </div>
            <h4 className="text-2xl font-bold mb-2 text-white">Automated Intelligence</h4>
            <p className="text-[#22C55E]/90 italic mb-4">
              Reports that think, not just display
            </p>
            <p className="text-gray-300">
              Living dashboards that learn what matters, surface anomalies, and explain what changed — and why.
            </p>
          </div>

          {/* Adaptive Data Architecture */}
          <div className="gradient-sweep p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#22C55E]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#22C55E]/10">
            <div className="mb-6">
              <AdaptiveDataArchitecture />
            </div>
            <h4 className="text-2xl font-bold mb-2 text-white">Adaptive Data Architecture</h4>
            <p className="text-[#22C55E]/90 italic mb-4">
              Data structures that evolve with your business
            </p>
            <p className="text-gray-300">
              Intelligent schemas that adapt to new sources, heal broken mappings, and maintain themselves.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Problem → Resolution Section */}
      <div className="bg-black pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
                From Chaos to Control
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We transform fragmented systems into unified, intelligent operations
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#22C55E]/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Cross2Icon className="w-4 h-4 text-red-400" />
                    <div className="text-red-400 font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                      Problem
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Multiple teams maintaining brittle point-to-point integrations
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#22C55E'}}>
                    <span className="text-white font-bold text-2xl">→</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                    <Link2Icon className="w-4 h-4 text-green-400" />
                    <div className="text-green-400 font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                      Resolution
                    </div>
                  </div>
                  <p className="text-white text-base font-semibold leading-relaxed">
                    One unified API gateway, self-healing connections
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#22C55E]/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <FileIcon className="w-4 h-4 text-red-400" />
                    <div className="text-red-400 font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                      Problem
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Excel gymnastics across 5 systems for board reports
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#22C55E'}}>
                    <span className="text-white font-bold text-2xl">→</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                    <DashboardIcon className="w-4 h-4 text-green-400" />
                    <div className="text-green-400 font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                      Resolution
                    </div>
                  </div>
                  <p className="text-white text-base font-semibold leading-relaxed">
                    Live dashboards, single source of truth
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#22C55E]/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <ComponentNoneIcon className="w-4 h-4 text-red-400" />
                    <div className="text-red-400 font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                      Problem
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Customer data in Salesforce, orders in NetSuite, inventory in SAP
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: '#22C55E'}}>
                    <span className="text-white font-bold text-2xl">→</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                    <UpdateIcon className="w-4 h-4 text-green-400" />
                    <div className="text-green-400 font-bold text-sm uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                      Resolution
                    </div>
                  </div>
                  <p className="text-white text-base font-semibold leading-relaxed">
                    Real-time sync, complete customer view
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-32" id="contact">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Operations?
            </h3>
            <p className="text-xl text-gray-300 mb-10">
              Let&#39;s discuss how to remove silos and create flow across your systems and data.
            </p>
            <button 
              onClick={() => window.location.href='mailto:contact@deepsight.com'}
              className="px-8 py-4 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold text-lg transition"
            >
              Book a Consultation
            </button>
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
            <p className="text-gray-400">
              Professional technology consulting for family offices
            </p>
            <p className="text-gray-500 mt-2">
              © 2025 Deep Sight. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}