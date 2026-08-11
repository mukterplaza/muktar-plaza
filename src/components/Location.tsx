'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Navigation,
  Compass,
  Building,
  CheckCircle,
  ExternalLink,
} from 'lucide-react'

const nearbyLandmarks = [
  {
    name: 'Direct Frontage on Dhaka–Chittagong Highway',
    distance: 'Immediate Access',
  },
  {
    name: 'Motijheel Business District',
    distance: 'Few minutes drive',
  },
  {
    name: 'Gulistan Commercial Hub',
    distance: 'Few minutes drive',
  },
  {
    name: 'Rayerbag Bus Stand',
    distance: 'Walking distance',
  },
]

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/QZNL4orwjoaUXh1eA'

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.6647642921254!2d90.45641226938828!3d23.700229265763515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b750eeee9cbb%3A0x7ce4ab98c973f350!2z4KaH4Kao4Ka44Ka-4KarIOCmruCngeCmleCnjeCmpOCmvuCmsCDgpqrgp43gprLgpr7gppzgpr4!5e0!3m2!1sen!2sbd!4v1786439026665!5m2!1sen!2sbd'

export default function Location() {
  return (
    <section
      id="location"
      className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* LEFT — INFORMATION */}
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
          >
            07 — Strategic Connectivity
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl"
          >
            Located Right Beside{' '}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Dhaka–Chittagong Highway
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-base font-light leading-relaxed text-neutral-300 md:text-lg"
          >
            Muktar Plaza sits beside the Dhaka–Chittagong Highway at Rayerbag,
            Jatrabari, Dhaka — offering strong road connectivity and convenient
            access to important commercial areas of the city.
          </motion.p>

          {/* LANDMARKS */}
          <div className="mt-8 space-y-4">
            {nearbyLandmarks.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:border-gold-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/10">
                    <MapPin className="h-4 w-4 text-gold-400" />
                  </div>

                  <span className="text-sm font-medium text-white">
                    {item.name}
                  </span>
                </div>

                <span className="shrink-0 rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-gold-400">
                  {item.distance}
                </span>
              </motion.div>
            ))}
          </div>

          {/* MAP CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-obsidian shadow-lg shadow-gold-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-gold-500/30 active:scale-95"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <span className="text-xs text-neutral-500">
              Rayerbag Bus Stand, Jatrabari, Dhaka
            </span>
          </motion.div>
        </div>

        {/* RIGHT — MAP */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[520px] overflow-hidden rounded-[2rem] border border-gold-500/30 bg-[#070b11] p-2 shadow-2xl shadow-black/50"
          >
            {/* TOP MAP LABEL */}
            <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-obsidian/80 px-4 py-2.5 shadow-lg backdrop-blur-xl">
              <Compass className="h-4 w-4 text-gold-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                Strategic Location
              </span>
            </div>

            {/* MAP */}
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '1.5rem',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Muktar Plaza Location — Rayerbag, Jatrabari, Dhaka"
              className="h-full w-full"
            />

            {/* BOTTOM MAP CARD */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col gap-4 rounded-2xl border border-white/10 bg-obsidian/85 p-4 shadow-xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10">
                  <Building className="h-5 w-5 text-gold-400" />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-wide text-white">
                    MUKTAR PLAZA
                  </p>

                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                    Commercial & Residential Project
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle className="h-4 w-4 text-gold-400" />
                <span>Direct Highway Access</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}