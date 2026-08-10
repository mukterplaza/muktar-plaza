'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2, Check, ArrowRight } from 'lucide-react'

const floorPlans = [
  {
    id: 'ground',
    name: 'Ground Floor — Luxury Retail & Showrooms',
    area: '12,500 sq.ft.',
    units: '8 Commercial Units',
    highlights: ['Prime High-Footfall Entrance', 'Double Height Frontage', 'Direct Escalator & Lift Access', '24/7 Security Desk'],
    frameIndex: 12,
  },
  {
    id: 'commercial',
    name: 'Floors 1-4 — Corporate & Brand Showrooms',
    area: '14,200 sq.ft. per floor',
    units: '12 Open Plan Suites',
    highlights: ['Curtain Wall Glass View', 'Wide Central Atrium', 'Dedicated Customer Elevators', 'Restroom & Pantry Provisions'],
    frameIndex: 35,
  },
  {
    id: 'executive',
    name: 'Floors 5-8 — Executive Corporate Offices',
    area: '15,000 sq.ft. per floor',
    units: '6 Executive Offices',
    highlights: ['Panoramic Skyline Terrace', 'Private Executive Lifts', 'High-Bandwidth Fiber Hub', 'Soundproof Double Glazing'],
    frameIndex: 65,
  },
]

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState(0)

  const activePlan = floorPlans[activeTab]

  return (
    <section id="floorplans" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold"
          >
            05 — Layout & Space
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mt-4"
          >
            Floor Plans & <span className="text-gold-gradient">Unit Configurations</span>
          </motion.h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
        {floorPlans.map((plan, idx) => (
          <button
            key={plan.id}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === idx
                ? 'bg-gold-500 text-obsidian shadow-lg shadow-gold-500/25'
                : 'glass-panel text-neutral-300 hover:text-white hover:border-gold-500/30'
            }`}
          >
            {plan.name.split('—')[0]}
          </button>
        ))}
      </div>

      {/* Main Floor Plan Display Box */}
      <motion.div
        key={activePlan.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel p-8 md:p-12 rounded-3xl border border-gold-500/20"
      >
        {/* Left Side Info */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              {activePlan.name}
            </h3>

            <div className="flex items-center gap-8 py-6 border-y border-white/10 my-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400">Total Floor Area</p>
                <p className="text-xl font-serif font-bold text-gold-400 mt-1">{activePlan.area}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-400">Capacity</p>
                <p className="text-xl font-serif font-bold text-gold-400 mt-1">{activePlan.units}</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-xs uppercase tracking-widest text-neutral-300 font-semibold">Key Architectural Features:</p>
              {activePlan.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-gold-400" />
                  </div>
                  <span className="text-sm text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all"
          >
            <span>Request Detailed Architectural Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side Visual Render Frame */}
        <div className="lg:col-span-6 relative rounded-2xl overflow-hidden min-h-[300px] border border-white/10 group">
          <img
            src={`/frames/frame-${activePlan.frameIndex.toString().padStart(3, '0')}.jpg`}
            alt={activePlan.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel-light flex items-center justify-between">
            <span className="text-xs font-semibold tracking-wider text-white">3D Elevation View</span>
            <span className="text-xs text-gold-400 font-serif">Muktar Plaza Blueprint</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
