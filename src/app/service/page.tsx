'use client';
import Header from '@/components/Header';
import BookingButton from '@/components/BookingButton';
import DataFlowSVG from '@/components/DataFlowSVG';
import PlatformIntegration from '@/components/services/PlatformIntegration';
import AutomatedIntelligence from '@/components/services/AutomatedIntelligence';
import AdaptiveDataArchitecture from '@/components/services/AdaptiveDataArchitecture';

export default function ServicesPage() {
  return (
    <div className="bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section with Server Background */}
      <section className="relative bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/servers.png)',
            backgroundPosition: 'center 20%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>
        
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 lg:pt-24 pb-8 lg:pb-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Poppins' }}>
              <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
                We End Data Silos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unified data intelligence across all platforms. No more human APIs, scattered spreadsheets, or systems that don&apos;t talk. Just clarity in flow.
            </p>
          </div>
          
          {/* SVG Animation - Desktop Only */}
          <div className="hidden lg:block relative -mt-8">
            <DataFlowSVG />
          </div>
        </div>
      </section>

      {/* Hero Section Copy */}
      <section className="bg-black text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            Your business generates massive amounts of data. CRM records, financial transactions, project updates, communication logs—it&apos;s all there, but scattered. Teams waste hours manually moving information between systems. Decisions get delayed waiting for reports. Opportunities slip through the cracks.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            <span className="text-[#22C55E] font-semibold">What if your data worked for you instead?</span> What if every system knew what every other system knew, and intelligence flowed where it needed to go automatically?
          </p>

          <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
            We build middleware that evolves  intelligent connections that learn your business patterns and adapt as you grow. Your data becomes a living network, not a collection of dead files.
          </p>
        </div>
      </section>

      {/* How We Transform Your Operations */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Poppins' }}>
            <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
              How We Transform Your Operations
            </span>
          </h2>

          <div className="space-y-24">
            {/* Platform Integration - Animation Left */}
            <div className="rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/30 transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Animation on Left */}
                <div className="bg-black/30 p-8 flex items-center justify-center order-1 lg:order-1">
                  <div className="w-full max-w-2xl scale-[1.44]">
                    <PlatformIntegration />
                  </div>
                </div>
                
                {/* Text Content on Right */}
                <div className="p-8 lg:p-12 order-2 lg:order-2">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-[#22C55E] mr-4">1</span>
                    <h3 className="text-2xl font-bold text-[#22C55E]" style={{ fontFamily: 'Poppins' }}>
                      Platform Integration
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">The Problem You Know:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Teams re-enter the same data across CRM, finance, and project tools  wasting time and creating errors. Your best people have become human APIs.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">What We Actually Do:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We connect platforms through intelligent middleware that doesn&apos;t just sync—it learns. One update flows everywhere it should, nowhere it shouldn&apos;t. Your systems stay as they are; we make them work as one.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#22C55E] mb-3">The Reality:</h4>
                      <p className="text-gray-200 leading-relaxed font-medium">
                        Less manual work, fewer errors, and processes that actually move at the speed of business. Your people stop being data entry clerks and start being strategic.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automated Reporting - Animation Right (Reversed for zigzag) */}
            <div className="rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/30 transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Text Content on Left */}
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-[#22C55E] mr-4">2</span>
                    <h3 className="text-2xl font-bold text-[#22C55E]" style={{ fontFamily: 'Poppins' }}>
                      Automated Reporting & Dashboards
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">The Problem You Know:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Leaders wait weeks while teams compile data into reports. By the time you see the numbers, the opportunity is gone.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">What We Actually Do:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We unify data sources into an automated reporting layer that understands context. Not just dashboards—intelligent views that know what matters to whom and when.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#22C55E] mb-3">The Reality:</h4>
                      <p className="text-gray-200 leading-relaxed font-medium">
                        Reports that update in real-time. Decisions made in hours, not weeks. See tomorrow&apos;s problems today.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Animation on Right */}
                <div className="bg-black/30 p-8 flex items-center justify-center order-1 lg:order-2">
                  <div className="w-full max-w-xl scale-125">
                    <AutomatedIntelligence />
                  </div>
                </div>
              </div>
            </div>

            {/* Data Structuring - Animation Left */}
            <div className="rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/30 transition-all duration-500 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Animation on Left */}
                <div className="bg-black/30 p-8 flex items-center justify-center order-1 lg:order-1">
                  <div className="w-full max-w-xl scale-125">
                    <AdaptiveDataArchitecture />
                  </div>
                </div>
                
                {/* Text Content on Right */}
                <div className="p-8 lg:p-12 order-2 lg:order-2">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-[#22C55E] mr-4">3</span>
                    <h3 className="text-2xl font-bold text-[#22C55E]" style={{ fontFamily: 'Poppins' }}>
                      Data Structuring & Clarity
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-red-400 mb-3">The Problem You Know:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Your data exists in silos that speak different languages. Clean data goes in, garbage comes out.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">What We Actually Do:</h4>
                      <p className="text-gray-300 leading-relaxed">
                        We create adaptive data architectures that normalize, cleanse, and structure information as it flows. Self-healing schemas that evolve with your business.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#22C55E] mb-3">The Reality:</h4>
                      <p className="text-gray-200 leading-relaxed font-medium">
                        Clarity at scale. Complexity distilled into insights that drive strategy. Pattern recognition that humans would miss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Deep Sight Difference */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Poppins' }}>
            <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
              The Deep Sight Difference
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Integration */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-red-900/20 to-red-800/10 backdrop-blur border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-400 mb-6" style={{ fontFamily: 'Poppins' }}>
                Traditional Integration:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-300">Point-to-point connections that break</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-300">Moves data without context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-300">No memory between transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1">✗</span>
                  <span className="text-gray-300">Dumb pipes, dumber data</span>
                </li>
              </ul>
            </div>

            {/* Our Intelligent Middleware */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-[#22C55E]/20 to-[#16A34A]/10 backdrop-blur border border-[#22C55E]/30">
              <h3 className="text-2xl font-bold text-[#22C55E] mb-6" style={{ fontFamily: 'Poppins' }}>
                Our Intelligent Middleware:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Self-healing connections that adapt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Understands relationships across systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Builds institutional memory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1">✓</span>
                  <span className="text-gray-200">Gets smarter with every byte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Poppins' }}>
            <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
              Who Needs This
            </span>
          </h2>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20">
            <p className="text-xl text-white mb-8 font-medium">You&apos;re our client if:</p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                <span className="text-lg text-gray-300">Your teams email spreadsheets because your &apos;integrated&apos; systems aren&apos;t</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                <span className="text-lg text-gray-300">Different departments show different numbers for the same metric</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                <span className="text-lg text-gray-300">You&apos;ve built an entire team just to reconcile data between systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                <span className="text-lg text-gray-300">You&apos;re one acquisition away from complete data chaos</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">→</span>
                <span className="text-lg text-gray-300">Strategic decisions wait for someone to &apos;run the numbers&apos;</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ready to Start? */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Poppins' }}>
            <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
              Ready to End Data Chaos?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let&apos;s talk about what connected intelligence looks like in your business. No sales pitch—just a conversation about what&apos;s possible when your data works as one.
          </p>
          <div className="flex justify-center">
            <BookingButton />
          </div>
        </div>
      </section>

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