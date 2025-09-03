'use client';
import Header from '@/components/Header';
import BookingButton from '@/components/BookingButton';
import DataFlowSVG from '@/components/DataFlowSVG';

export default function ServicesPage() {
  return (
    <div className="bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section with Server Background */}
      <section className="relative">
        {/* Server Background */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="/images/servers.png"
              alt="Server infrastructure"
              className="w-full h-full object-cover object-top"
              style={{ transform: 'scale(1, 0.75)', transformOrigin: 'top' }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Hero Content - Centered within Server Image */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center" style={{ top: '-20%' }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className="p-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight" style={{ fontFamily: 'Poppins' }}>
                  <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
                    We End Data Silos
                  </span>
                </h1>
                <p className="text-xl md:text-xl lg:text-3xl text-gray-100 font-light italic mb-8 max-w-6xl mx-auto leading-relaxed">
                  Most integrations just move data. We build systems that think.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Animation - Between Header and Content - Desktop Only */}
      <section className="bg-black py-2 hidden md:block" style={{ marginTop: '-10%' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-center">
          <div className="w-full opacity-100">
            <DataFlowSVG />
          </div>
        </div>
      </section>

      {/* Mobile spacing section */}
      <section className="bg-black py-4 block md:hidden">
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              After architecting data systems for federal regulators, we learned something critical: every organization is drowning in connections that don&apos;t actually connect anything. APIs that break monthly. Integrations that move data without context. Reports that reflect yesterday&apos;s truth.
            </p>
            <p className="text-xl text-white font-medium leading-relaxed">
              We don&apos;t just connect your platforms. We build intelligent middleware that learns from every transaction, remembers every pattern, and gets smarter over time.
            </p>
          </div>
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

          <div className="space-y-16">
            {/* Platform Integration */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#22C55E] mb-6" style={{ fontFamily: 'Poppins' }}>
                1. Platform Integration
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3">The Problem You Know:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Teams re-enter the same data across CRM, finance, and project tools  wasting time and creating errors. Your best people have become human APIs.
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

            {/* Automated Reporting */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#22C55E] mb-6" style={{ fontFamily: 'Poppins' }}>
                2. Automated Reporting & Dashboards
              </h3>
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
                    We unify data sources into an automated reporting layer that understands context. Not just dashboardsintelligent views that know what matters to whom and when.
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

            {/* Data Structuring */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/20 hover:border-[#22C55E]/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#22C55E] mb-6" style={{ fontFamily: 'Poppins' }}>
                3. Data Structuring & Clarity
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3">The Problem You Know:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Critical information is scattered across spreadsheets, apps, and databases. The bigger the dataset, the harder it is to see what actually matters.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">What We Actually Do:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We consolidate and structure massive datasets into a single, intelligent view. Our middleware doesn&apos;t just organize data—it learns patterns, surfaces anomalies, and remembers what every query teaches it.
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
                  <span className="text-red-400 mr-3 mt-1"></span>
                  <span className="text-gray-300">Point-to-point connections that break</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1"></span>
                  <span className="text-gray-300">Moves data without context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1"></span>
                  <span className="text-gray-300">No memory between transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 mt-1"></span>
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
                  <span className="text-[#22C55E] mr-3 mt-1"></span>
                  <span className="text-gray-200">Self-healing connections that adapt</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1"></span>
                  <span className="text-gray-200">Understands relationships across systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1"></span>
                  <span className="text-gray-200">Builds institutional memory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#22C55E] mr-3 mt-1"></span>
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
                <span className="text-[#22C55E] mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">Your teams email spreadsheets because your &apos;integrated&apos; systems aren&apos;t</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">Different departments show different numbers for the same metric</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">You&apos;ve built an entire team just to reconcile data between systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22C55E] mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">You&apos;re one acquisition away from complete data chaos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Cost of Waiting */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Poppins' }}>
            <span className="text-red-400">
              The Cost of Waiting
            </span>
          </h2>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-red-900/20 to-orange-900/10 backdrop-blur border border-red-500/30">
            <p className="text-xl text-white mb-8 font-medium">Every month you delay:</p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">Your competition with unified data pulls further ahead</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">Your best people waste 40% of their time on data archaeology</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-xl mt-1">�</span>
                <span className="text-gray-300">Critical patterns remain invisible in the gaps between systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-4 text-xl mt-1">�</span>
                <span className="text-lg text-gray-300">Small data discrepancies compound into major strategic mistakes</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Poppins' }}>
              Ready to end your data silos and bring{' '}
              <span className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] bg-clip-text text-transparent">
                intelligence
              </span>{' '}
              to your operations?
            </h3>
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
            <p className="text-gray-500 mt-2">� 2025 Deep Sight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}