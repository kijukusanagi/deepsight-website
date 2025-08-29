'use client';

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div
                  className="w-10 h-10 rounded-lg mr-3"
                  style={{
                    background: "linear-gradient(135deg, #0E613C 0%, #99CC00 100%)",
                  }}
                />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
                  Deep Sight
                </h1>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
                <a href="/about" className="text-white transition-colors">
                  About
                </a>
                <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
              <button 
                onClick={() => window.location.href='/#contact'}
                className="px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="relative py-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#99CC00]/20 to-transparent rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light text-gray-400 mb-3" style={{fontFamily: 'Raleway'}}>
              Deep Sight was founded on one principle:
            </h2>
            <p className="text-5xl md:text-7xl font-bold tracking-tight" style={{fontFamily: 'Poppins'}}>
              <span className="bg-gradient-to-r from-[#99CC00] via-[#76B900] to-[#0E613C] bg-clip-text text-transparent">
                clarity in flow.
              </span>
            </p>
          </div>

          {/* Expansion Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#99CC00]/10 to-[#0E613C]/10 rounded-3xl blur-2xl animate-pulse" />
            <div className="relative p-12 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500">
              <p className="text-lg text-gray-400 mb-10 uppercase tracking-wider font-light animate-fade-in">
                That principle drives everything we build:
              </p>
              <div className="space-y-8">
                <div className="flex items-start hover:translate-x-1 transition-all duration-300 animate-slide-in-1">
                  <span className="text-[#99CC00] mr-4 text-xl mt-1 animate-pulse">→</span>
                  <p className="text-xl text-gray-100 font-light">
                    <span className="hover:text-[#99CC00] transition-colors duration-300">Systems</span>{' '}
                    that move <span className="text-white font-medium">together</span> instead of apart.
                  </p>
                </div>
                <div className="flex items-start hover:translate-x-1 transition-all duration-300 animate-slide-in-2">
                  <span className="text-[#99CC00] mr-4 text-xl mt-1 animate-pulse" style={{animationDelay: '0.5s'}}>→</span>
                  <p className="text-xl text-gray-100 font-light">
                    <span className="hover:text-[#99CC00] transition-colors duration-300">Data</span>{' '}
                    that <span className="text-white font-medium">informs</span> instead of overwhelms.
                  </p>
                </div>
                <div className="flex items-start hover:translate-x-1 transition-all duration-300 animate-slide-in-3">
                  <span className="text-[#99CC00] mr-4 text-xl mt-1 animate-pulse" style={{animationDelay: '1s'}}>→</span>
                  <p className="text-xl text-gray-100 font-light">
                    <span className="hover:text-[#99CC00] transition-colors duration-300">Processes</span>{' '}
                    that create <span className="text-white font-medium">speed</span> instead of friction.
                  </p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in-delay-4">
                <p className="text-lg text-gray-300 font-light italic">
                  Because when complexity is reduced to flow, clarity becomes inevitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <div className="bg-black py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              I started Deep Sight after watching a billion-dollar company nearly fail because their systems couldn't talk.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Not from bad strategy. Not from competition. From the simple inability to connect Salesforce to their warehouse system in time for Black Friday.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              That's when I realized: the problem isn't just connecting systems. It's that once connected, the data just flows dumb. No learning. No patterns. No intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-black py-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Core Mission */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{fontFamily: 'Poppins'}}>
              Deep Sight exists to build the{' '}
              <span className="bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent">
                intelligent tissue
              </span>{' '}
              between systems.
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Not just middleware that moves data, but a layer that understands it. AI that learns your business logic, 
              catches anomalies before they cascade, and surfaces insights from the flow itself.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#99CC00]/30 transition-all duration-500 hover:translate-x-1">
              <h4 className="text-xl font-bold text-[#99CC00] mb-4 transition-all duration-300 group-hover:text-[#76B900]" style={{fontFamily: 'Poppins'}}>
                Today
              </h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Custom integrations with smart routing and anomaly detection. We're building the foundation — 
                middleware that doesn't just connect, but begins to understand.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-[#76B900]/30 transition-all duration-500 hover:translate-x-2">
              <h4 className="text-xl font-bold text-[#76B900] mb-4 transition-all duration-300 group-hover:text-[#99CC00]" style={{fontFamily: 'Poppins'}}>
                Tomorrow
              </h4>
              <p className="text-lg text-gray-300 leading-relaxed">
                Middleware that gets smarter with every transaction — predicting bottlenecks, suggesting optimizations, 
                even healing its own broken connections.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#99CC00]/50 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#99CC00]/10">
              <h4 className="text-xl font-bold bg-gradient-to-r from-[#99CC00] to-[#0E613C] bg-clip-text text-transparent mb-4 transition-all duration-300" style={{fontFamily: 'Poppins'}}>
                The Endgame
              </h4>
              <p className="text-lg text-gray-200 leading-relaxed">
                Your systems don't just work together. They <span className="text-white font-medium group-hover:text-[#99CC00] transition-colors duration-300">think together</span>. 
                Intelligence that lives in the connections, not the applications. Available when you need it, invisible when you don't.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-16 p-8 text-center">
            <p className="text-xl text-gray-300 font-light italic">
              Until then, we're in the trenches, building one intelligent integration at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="text-center mt-20">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.location.href='/#services'}
                className="px-10 py-5 rounded-xl bg-[#76B900] text-black font-semibold hover:brightness-110 transition text-xl"
                style={{fontFamily: 'Poppins'}}
              >
                See Our Approach →
              </button>
              <button 
                onClick={() => window.location.href='/#contact'}
                className="px-10 py-5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition text-xl"
                style={{fontFamily: 'Poppins'}}
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