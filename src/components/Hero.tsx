'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, ShieldCheck, Sparkles, Building, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10 pointer-events-none">
      {/* Top Tag & Hero Title */}
      <div className="flex flex-col items-start max-w-3xl pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            Next-Gen Commercial Landmark
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
        >
          MUKTAR <br />
          <span className="text-gold-gradient">PLAZA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl"
        >
          An architectural masterpiece seamlessly blending high-yield commercial spaces, state-of-the-art engineering, and timeless modern aesthetics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-obsidian font-bold tracking-wider uppercase text-xs shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>Reserve Commercial Unit</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#architecture"
            className="px-8 py-4 rounded-full glass-panel-light text-white font-semibold tracking-wider uppercase text-xs hover:border-gold-400/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore 3D Walkthrough</span>
          </a>
        </motion.div>
      </div>

      {/* Hero Bottom Badges & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-12 border-t border-white/10 pointer-events-auto"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">100%</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1">Earthquake Resistant</p>
          </div>
          <div>
            <p className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">Prime</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1">City Hub Location</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-2xl lg:text-3xl font-serif font-bold text-gold-400">High ROI</p>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mt-1">Investment Opportunity</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-neutral-400 text-xs tracking-widest uppercase animate-bounce">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-gold-400" />
        </div>
      </motion.div>
    </section>
  )
}
