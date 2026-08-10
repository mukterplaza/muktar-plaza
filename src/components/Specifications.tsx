'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const specsData = [
  {
    category: 'Structural Specifications',
    items: [
      { label: 'Foundation', detail: 'Cast-in-situ RCC deep piling reaching bedrock load bearing capacity.' },
      { label: 'Superstructure', detail: 'Reinforced concrete framed structure designed per BNBC & US ASTM codes.' },
      { label: 'Seismic Design', detail: 'Zone 3 earthquake resistance engineered to withstand 7.5 Richter scale shock.' },
    ]
  },
  {
    category: 'Electrical & MEP',
    items: [
      { label: 'Substation', detail: 'Dedicated high-voltage transformer substation with AVR stabilization.' },
      { label: 'Backup Generators', detail: 'Dual European diesel generators with auto-synchronization load control.' },
      { label: 'HVAC System', detail: 'VRF central air-conditioning provisions with smart zone temperature control.' },
    ]
  },
  {
    category: 'Exterior & Interior Finishing',
    items: [
      { label: 'Exterior Cladding', detail: 'Double-glazed Low-E tempered curtain wall glass with aluminum composite panels.' },
      { label: 'Lobby & Common Area', detail: 'Imported Italian porcelain tiles, brass accent trims, and ambient LED fixtures.' },
      { label: 'Security & CCTV', detail: 'IP-based HD night-vision cameras covering all public corridors and entrances.' },
    ]
  }
]

export default function Specifications() {
  return (
    <section id="specs" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold"
        >
          04 — Engineering Standards
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white mt-4"
        >
          Technical <span className="text-gold-gradient">Specifications</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {specsData.map((specGroup, idx) => (
          <motion.div
            key={specGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="p-8 rounded-2xl glass-panel flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-6 pb-4 border-b border-gold-500/20">
                {specGroup.category}
              </h3>
              <div className="space-y-6">
                {specGroup.items.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.label}</h4>
                      <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
