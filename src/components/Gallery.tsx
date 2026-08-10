'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

const galleryFrames = [
  { frame: 1, title: 'Ground Elevation Perspective', tag: 'Exterior Facade' },
  { frame: 15, title: 'Mid-Rise Architectural View', tag: 'Curtain Wall' },
  { frame: 30, title: 'Upper Podium & Retail Atrium', tag: 'Commercial Hub' },
  { frame: 45, title: 'High-Angle Tower Overview', tag: 'Full Structure' },
  { frame: 60, title: 'Skyline Penthouse Terrace', tag: 'Top Floor' },
  { frame: 75, title: 'Dramatic Sunset Reflection', tag: 'Architectural Lighting' },
]

export default function Gallery() {
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold"
        >
          06 — Visual Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white mt-4"
        >
          Architectural <span className="text-gold-gradient">Gallery</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryFrames.map((item, idx) => {
          const frameNum = item.frame.toString().padStart(3, '0')
          const imgSrc = `/frames/frame-${frameNum}.jpg`

          return (
            <motion.div
              key={item.frame}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedFrame(item.frame)}
              className="group relative h-80 rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer"
            >
              <img
                src={imgSrc}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-obsidian/70 backdrop-blur-md border border-gold-500/30 text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">Render Frame #{item.frame}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-100 scale-75">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedFrame !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFrame(null)}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <div className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden border border-gold-500/30 glass-panel p-2">
              <button
                onClick={() => setSelectedFrame(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-obsidian/80 border border-white/20 text-white flex items-center justify-center hover:bg-gold-500 hover:text-obsidian transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={`/frames/frame-${selectedFrame.toString().padStart(3, '0')}.jpg`}
                alt="Selected render frame"
                className="w-full h-full object-contain max-h-[75vh] rounded-2xl"
              />

              <div className="p-6 text-center">
                <p className="font-serif text-xl font-bold text-gold-400">
                  {galleryFrames.find(f => f.frame === selectedFrame)?.title}
                </p>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                  High Precision Architectural Rendering — Muktar Plaza
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
