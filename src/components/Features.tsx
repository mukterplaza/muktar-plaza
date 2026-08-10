'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Sparkles, Cpu, Wifi, Car, Flame, RefreshCw } from 'lucide-react'

const featuresList = [
  {
    icon: HighSpeedElevator,
    title: 'High-Speed Elevators',
    desc: 'Equipped with rapid passenger and cargo lifts ensuring zero waiting time during peak hours.',
  },
  {
    icon: Flame,
    title: 'Smart Fire Suppression',
    desc: 'Advanced smoke detectors, central fire sprinkler system, and pressurized emergency staircases.',
  },
  {
    icon: Car,
    title: 'Multi-Level Sub-Basement Parking',
    desc: 'Underground parking slots with automated EV charging points and License Plate Recognition.',
  },
  {
    icon: Cpu,
    title: '100% Power Backup',
    desc: 'Heavy-duty industrial generator units delivering uninterrupted power to all commercial units.',
  },
  {
    icon: Shield,
    title: '24/7 Smart Surveillance',
    desc: 'CCTV coverage, biometric access control, and dedicated professional security personnel.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Fiber Connectivity',
    desc: 'Dedicated high-bandwidth fiber optic trunk lines pre-installed across all floors.',
  },
]

function HighSpeedElevator(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold"
          >
            03 — Infrastructure & Amenities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mt-4"
          >
            Engineered For <span className="text-gold-gradient">Unmatched Performance</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-400 font-light text-sm md:text-base max-w-md"
        >
          Every amenity inside Muktar Plaza is selected to meet international architectural standards and business demands.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresList.map((feat, idx) => {
          const Icon = feat.icon
          return (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl glass-panel border border-white/5 hover:border-gold-500/30 hover:bg-obsidian/60 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {feat.title}
              </h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
