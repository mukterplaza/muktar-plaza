'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Layers, Maximize2, Zap } from 'lucide-react'

export default function ArchitectureExperience() {
  return (
    <section id="architecture" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold"
        >
          02 — 3D Architecture Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl font-bold text-white mt-4"
        >
          Scroll to Explore <span className="text-gold-gradient">Every Angle</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-neutral-300 font-light text-base md:text-lg"
        >
          As you scroll, experience the dynamic rendering of Muktar Plaza, showcasing structural integrity from ground entrance to top-floor skyline elevation.
        </motion.p>
      </div>

      {/* Interactive Floating Info Hotspots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-2xl glass-panel relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all" />
          <span className="text-gold-400 font-serif text-3xl font-bold">01</span>
          <h3 className="font-serif text-xl font-bold text-white mt-4 mb-2">Grand Entrance Lobby</h3>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Triple-height atrium with Italian marble finishing, smart security turnstiles, and express elevator banks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl glass-panel relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all" />
          <span className="text-gold-400 font-serif text-3xl font-bold">02</span>
          <h3 className="font-serif text-xl font-bold text-white mt-4 mb-2">Luxury Commercial Floors</h3>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Spacious, column-free retail layouts with maximum glass storefront visibility and integrated HVAC.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-8 rounded-2xl glass-panel relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-all" />
          <span className="text-gold-400 font-serif text-3xl font-bold">03</span>
          <h3 className="font-serif text-xl font-bold text-white mt-4 mb-2">Executive Penthouse Suites</h3>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Top-tier corporate headquarters featuring panoramic city views, private terraces, and dedicated VIP lifts.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
