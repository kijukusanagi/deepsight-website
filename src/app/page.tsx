'use client';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-black">
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-lg mr-3"
                style={{
                  background: "linear-gradient(135deg, #0E613C 0%, #99CC00 100%)",
                }}
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
                Deep Sight
              </h1>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white transition-colors">
                Home
              </Link>

              <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>

              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>

              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              </nav>
              <button 
                onClick={() => window.location.href='#contact'}
                className="px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

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
        </div>

        {/* Data Flow Overlay */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-40" viewBox="0 0 1200 800" fill="none">
            <defs>
              <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0E613C" stopOpacity="0" />
                <stop offset="50%" stopColor="#99CC00" stopOpacity="1" />
                <stop offset="100%" stopColor="#76B900" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#76B900" stopOpacity="0" />
                <stop offset="50%" stopColor="#99CC00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0E613C" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#99CC00" stopOpacity="0" />
                <stop offset="50%" stopColor="#76B900" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#99CC00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 400 Q300 200 600 400 T1200 400"
              stroke="url(#flowGradient1)"
              strokeWidth="2"
              className="animate-pulse"
            />
            <path
              d="M0 450 Q400 250 800 450 T1200 450"
              stroke="url(#flowGradient2)"
              strokeWidth="1.5"
              className="animate-pulse"
              style={{animationDelay: '1s'}}
            />
            <path
              d="M0 350 Q250 150 500 350 T1200 350"
              stroke="url(#flowGradient3)"
              strokeWidth="1"
              className="animate-pulse"
              style={{animationDelay: '2s'}}
            />
          </svg>
        </div>

        {/* Hero Content - Header in sky, content lower */}
        <div className="relative z-10 h-full">
          <div className="flex flex-col h-full">
            {/* Header positioned in upper third */}
            <div className="flex-1 flex items-center justify-center pt-20">
              <h2 className="text-6xl md:text-7xl font-bold leading-tight text-white text-center">
                The{" "}
                <span className="bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
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
                  We&#39;re building middleware from the future — where tedious manual work dissolves into intelligent automation.
                </p>
                <p className="text-xl text-white font-bold mb-10 max-w-4xl mx-auto leading-relaxed">
                  Integrations that learn your business. Not platforms you learn to manage.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                    onClick={() => window.location.href='#contact'}
                    className="px-10 py-5 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition text-xl hero-tagline"
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
      <div className="bg-black py-48">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed text-center font-light">
            We unify platforms and data through a single integration layer — 
            <span className="text-white font-medium"> invisible middleware deployed in 6 weeks</span> that 
            makes your existing systems work as one.
          </p>
        </div>
      </div>

      {/* Problem → Resolution Section */}
      <div className="bg-black pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div className="p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#99CC00]/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#99CC00]/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-red-400 font-bold text-lg mb-3 uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                    Problem
                  </div>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    Multiple teams maintaining brittle point-to-point integrations
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#76B900'}}>
                    <span className="text-white font-bold text-3xl">→</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="text-green-400 font-bold text-lg mb-3 uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                    Resolution
                  </div>
                  <p className="text-white text-xl font-semibold leading-relaxed">
                    One unified API gateway, self-healing connections
                  </p>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#99CC00]/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#99CC00]/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-red-400 font-bold text-lg mb-3 uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                    Problem
                  </div>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    Excel gymnastics across 5 systems for board reports
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#76B900'}}>
                    <span className="text-white font-bold text-3xl">→</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="text-green-400 font-bold text-lg mb-3 uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                    Resolution
                  </div>
                  <p className="text-white text-xl font-semibold leading-relaxed">
                    Live dashboards, single source of truth
                  </p>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#99CC00]/20 transition-all duration-700 hover:scale-[1.01] hover:shadow-xl hover:shadow-[#99CC00]/10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-red-400 font-bold text-lg mb-3 uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                    Problem
                  </div>
                  <p className="text-gray-200 text-xl leading-relaxed">
                    Customer data in Salesforce, orders in NetSuite, inventory in SAP
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: '#76B900'}}>
                    <span className="text-white font-bold text-3xl">→</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-right">
                  <div className="text-green-400 font-bold text-lg mb-3 uppercase tracking-wider" style={{fontFamily: 'Poppins'}}>
                    Resolution
                  </div>
                  <p className="text-white text-xl font-semibold leading-relaxed">
                    Real-time sync, complete customer view
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <button 
              onClick={() => window.location.href='#services'}
              className="px-10 py-5 rounded-xl border-2 border-[#76B900] text-white hover:bg-[#76B900]/10 transition text-2xl font-semibold" 
              style={{fontFamily: 'Poppins'}}
            >
              See how we deliver this → Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-black py-32" id="services">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
                Consulting Services
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for complex operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-white">Platform Integration</h4>
              <p className="text-gray-300">
                Make existing systems work together — without rip-and-replace.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-white">Automated Reporting</h4>
              <p className="text-gray-300">
                Real-time dashboards that replace manual reporting cycles.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <h4 className="text-2xl font-bold mb-4 text-white">Data Structuring</h4>
              <p className="text-gray-300">
                Turn massive, scattered data into a coherent view for decisions.
              </p>
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
              <span className="bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Operations?
            </h3>
            <p className="text-xl text-gray-300 mb-10">
              Let&#39;s discuss how to remove silos and create flow across your systems and data.
            </p>
            <button 
              onClick={() => window.location.href='mailto:contact@deepsight.com'}
              className="px-8 py-4 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 text-lg transition"
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
            <h4 className="text-3xl font-bold bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent mb-4">
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