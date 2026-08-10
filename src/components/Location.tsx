'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Compass, Building, CheckCircle } from 'lucide-react'

const nearbyLandmarks = [
  { name: 'Central Transit Hub & Metro Station', distance: '3 mins walk' },
  { name: 'International Airport Access Road', distance: '15 mins drive' },
  { name: 'Financial District & Bank Towers', distance: '5 mins drive' },
  { name: '5-Star Luxury Hotels & Convention Centre', distance: '7 mins drive' },
]

export default function Location() {
  return (
    <section id="location" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold"
          >
            07 — Strategic Connectivity
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mt-4 leading-tight"
          >
            At the Heart of the City’s <span className="text-gold-gradient">Commercial Hub</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-300 font-light leading-relaxed text-base md:text-lg"
          >
            Muktar Plaza is positioned directly at the primary commercial intersection, providing unmatched access for shoppers, corporate clients, and high-net-worth investors.
          </motion.p>

          <div className="mt-8 space-y-4">
            {nearbyLandmarks.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl glass-panel border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <span className="text-sm font-semibold text-white">{item.name}</span>
                </div>
                <span className="text-xs font-mono text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
                  {item.distance}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Stylized Map Graphics */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[480px] rounded-3xl overflow-hidden glass-panel border border-gold-500/30 p-8 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
            
            {/* Stylized Pin Marker */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-gold-400 animate-spin-slow" />
                <span className="font-serif text-lg font-bold text-white">Prime Location Map</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-mono">
                Lat 23.8103° N / Long 90.4125° E
              </span>
            </div>

            {/* Central Landmark Card */}
            <div className="relative z-10 max-w-sm mx-auto p-6 rounded-2xl glass-panel text-center border border-gold-500/40 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-[1px] mx-auto mb-4 flex items-center justify-center">
                <div className="w-full h-full bg-obsidian rounded-full flex items-center justify-center text-gold-400">
                  <Building className="w-7 h-7" />
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">MUKTAR PLAZA</h3>
              <p className="text-xs text-gold-400 tracking-widest uppercase mt-1">Commercial Epicenter</p>
              <p className="text-xs text-neutral-400 mt-3 font-light">
                Direct frontage along 100-ft main avenue with dedicated service roads.
              </p>
            </div>

            {/* Bottom Status Tag */}
            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                <span>Zero Traffic Congestion Zone</span>
              </div>
              <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                Explore Vicinity
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
