'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Compass, Shield, Award } from 'lucide-react'

export default function ProjectIntro() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">
              01 — Architectural Vision
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
              Redefining Commercial <span className="text-gold-gradient">Grandeur</span>
            </h2>
            <p className="mt-6 text-neutral-300 leading-relaxed font-light text-base md:text-lg">
              Muktar Plaza represents the pinnacle of modern structural engineering and commercial planning. Engineered with meticulous attention to detail, the complex seamlessly blends high visibility, luxury shopping spaces, and state-of-the-art office environments.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Feature Glass Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl glass-panel hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Iconic Facade</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Curtain wall glass with thermal insulation and modern geometric lines designed for maximum visual appeal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl glass-panel hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Optimal Spatial Layout</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Optimized traffic flow, wide corridors, and high ceilings engineered for world-class retail brands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl glass-panel hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Advanced Safety</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Equipped with BNBC compliant earthquake dampening, automated fire hydrants, and 24/7 smart security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl glass-panel hover:border-gold-500/40 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Prime Commercial ROI</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Situated in a high-footfall economic corridor guaranteeing long-term asset value and maximum returns.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
