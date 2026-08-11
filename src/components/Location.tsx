'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Compass, Building, CheckCircle, ExternalLink } from 'lucide-react'

const nearbyLandmarks = [
  { name: 'Direct Frontage on Dhaka-Chittagong Highway', distance: 'Immediate Access' },
  { name: 'Motijheel Business District', distance: 'Few minutes drive' },
  { name: 'Gulistan Commercial Hub', distance: 'Few minutes drive' },
  { name: 'Rayerbag Bus Stand', distance: 'Walking distance' },
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
            Located Right Beside <span className="text-gold-gradient">Dhaka-Chittagong Highway</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-neutral-300 font-light leading-relaxed text-base md:text-lg"
          >
            Muktar Plaza sits right beside the Dhaka-Chittagong Highway at Rayerbag, Jatrabari, Dhaka. Motijheel or Gulistan can be reached in just a few minutes with seamless connectivity to the city’s commercial core.
          </motion.p>

          <div className="mt-8 space-y-4">
            {nearbyLandmarks.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl glass-panel border border-white/5 hover:border-gold-500/30 transition-colors"
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

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/QZNL4orwjoaUXh1eA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-500 text-obsidian text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-xs text-neutral-500">Rayerbag bus stand, Jatrabari, Dhaka</span>
          </div>
        </div>

        {/* Right Map */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[520px] rounded-3xl overflow-hidden glass-panel border border-gold-500/30 p-3"
          >
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-obsidian/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <Compass className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-mono text-gold-400">Highway Marked Route</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.6647642921254!2d90.45641226938828!3d23.700229265763515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b750eeee9cbb%3A0x7ce4ab98c973f350!2z4KaH4Kao4Ka44Ka-4KarIOCmruCngeCmleCnjeCmpOCmvuCmsCDgpqrgp43gprLgpr7gppzgpr4!5e0!3m2!1sen!2sbd!4v1786439026665!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Muktar Plaza Location"
              className="h-full w-full"
            />

            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between bg-obsidian/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-sm font-bold text-white">MUKTAR PLAZA</p>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Commercial Epicenter</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <CheckCircle className="w-4 h-4 text-gold-400" />
                <span>Direct Highway Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}