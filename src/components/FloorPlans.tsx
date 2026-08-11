'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Maximize2, X, PlayCircle } from 'lucide-react'

type AssetType = 'image' | 'video'

type Asset = {
  id: string
  title: string
  subtitle: string
  description: string
  type: AssetType
  image?: string
  src?: string
  poster?: string
  highlights?: string[]
}

type AssetCategory = 'plans' | 'residential' | 'commercial' | 'views' | 'videos'

const categories: { id: AssetCategory; label: string }[] = [
  { id: 'plans', label: 'FLOOR PLANS' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'views', label: '3D VIEWS' },
  { id: 'videos', label: 'VIDEOS' },
]

const assetsMap: Record<AssetCategory, Asset[]> = {
  plans: [
    {
      id: 'roof-plan',
      title: 'Roof Floor Plan',
      subtitle: 'Premium retail and amenity layout with landscaped terraces',
      image: '/frames/10.jpg',
      description: 'A precise architectural plan showing rooftop circulation, public terraces, and service access.',
      type: 'image',
    },
    {
      id: 'top-plan',
      title: 'Rooftop Floor Plan',
      subtitle: 'Upper-level event and service deck design',
      image: '/frames/11.jpg',
      description: 'A detailed rooftop arrangement for elevated commercial frontage and customer flow.',
      type: 'image',
    },
    {
      id: 'typology-overview',
      title: 'Residential Typology Plan',
      subtitle: 'Apartment layout study for every unit type',
      image: '/frames/Untitled (2048 x 1649 px).png',
      description: 'Elegant residential flat plans with type A, B, C, D and E configurations displayed clearly.',
      type: 'image',
    },
    {
      id: 'unit-perspective',
      title: 'Residential Unit Study',
      subtitle: 'Spatial flow and vertical planning overview',
      image: '/frames/Untitled (1280 x 720 px).png',
      description: 'A premium plan visualization showing core residential circulation and unit access.',
      type: 'image',
    },
  ],
  residential: [
    {
      id: 'flat-types',
      title: 'Residential Flat Plans',
      subtitle: 'Editorial showcase of Muktar Plaza apartment configurations',
      image: '/frames/Untitled (2048 x 1649 px).png',
      description: 'The actual Muktar Plaza flat typology plan, presented as a premium editorial experience for modern living.',
      highlights: ['Type A • 1245 sqft', 'Type B • 1475 sqft', 'Type C • 1405 sqft', 'Type D • 1420 sqft', 'Type E • 1515 sqft'],
      type: 'image',
    },
    {
      id: 'residential-entry',
      title: 'Residential Arrival Experience',
      subtitle: 'Elegant residential gateway and landscaped entry',
      image: '/frames/8.jpg',
      description: 'An actual Muktar Plaza visual showing the refined residential approach and premium street presence.',
      type: 'image',
    },
  ],
  commercial: [
    {
      id: 'retail-gateway',
      title: 'Retail Gateway',
      subtitle: 'High-street commercial entrance',
      image: '/frames/9.jpg.jpeg',
      description: 'A premium commercial arrival point for Muktar Plaza, designed to engage shoppers and tenants.',
      type: 'image',
    },
    {
      id: 'shopfront-lobby',
      title: 'Brand Frontage',
      subtitle: 'Street-facing retail display zone',
      image: '/frames/4.jpg',
      description: 'Actual project visual that highlights the commercial shopfront and pedestrian-facing architecture.',
      type: 'image',
    },
    {
      id: 'commercial-dock',
      title: 'Commercial Atrium View',
      subtitle: 'Dynamic retail circulation area',
      image: '/frames/5.jpg',
      description: 'A refined commercial showcase representing the retail hub within Muktar Plaza.',
      type: 'image',
    },
  ],
  views: [
    {
      id: 'east-elevation',
      title: 'North Elevation Perspective',
      subtitle: 'Signature exterior architecture',
      image: '/frames/1.jpg.jpeg',
      description: 'A premium 3D elevation view showing the full Muktar Plaza facade.',
      type: 'image',
    },
    {
      id: 'helipad-view',
      title: 'Rooftop Helipad Aerial',
      subtitle: 'Sky-level architectural model',
      image: '/frames/2.jpg.jpeg',
      description: 'Aerial 3D view of the tower roof with landscaped terrace and helipad.',
      type: 'image',
    },
    {
      id: 'south-perspective',
      title: 'Full Structure Perspective',
      subtitle: 'Garden-edge 3D building study',
      image: '/frames/3.jpg.jpeg',
      description: 'An actual Muktar Plaza render that captures the building’s exterior presence.',
      type: 'image',
    },
    {
      id: 'elevation-study',
      title: 'Facade Perspective',
      subtitle: 'Detailed building context',
      image: '/frames/3 (1).png',
      description: 'A larger dual-elevation view that highlights the building’s materiality and scale.',
      type: 'image',
    },
    {
      id: 'top-study',
      title: '3D Top View',
      subtitle: 'Premium aerial perspective',
      image: '/frames/12.jpg',
      description: 'A cinematic 3D top view of Muktar Plaza for strong architectural context.',
      type: 'image',
    },
  ],
  videos: [
    {
      id: 'video-preview',
      title: 'Muktar Plaza Project Preview',
      subtitle: 'Cinematic architecture presentation',
      description: 'A premium motion study showcasing the plaza’s architecture and spatial concept.',
      src: '/frames/Untitled design (2).mp4',
      poster: '/frames/1.jpg.jpeg',
      type: 'video',
    },
    {
      id: 'video-walkthrough',
      title: 'Muktar Plaza Walkthrough',
      subtitle: 'Design and site cinematic study',
      description: 'A dynamic walkthrough highlighting material details, circulation, and facade rhythm.',
      src: '/frames/Untitled design (12).mp4',
      poster: '/frames/2.jpg.jpeg',
      type: 'video',
    },
  ],
}

export default function FloorPlans() {
  const [activeCategory, setActiveCategory] = useState<AssetCategory>('plans')
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxAsset, setLightboxAsset] = useState<Asset | null>(null)

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0)
  }, [activeCategory])

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxAsset) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxAsset])

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxAsset(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const activeAssets = useMemo(() => assetsMap[activeCategory], [activeCategory])
  const activeAsset = activeAssets[activeIndex]

  return (
    <section id="floorplans" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-4"
          >
            05 — Layout & Space
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white"
          >
            Floor Plans & <span className="text-gold-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600">Unit Configurations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm text-neutral-300 mt-6 leading-relaxed"
          >
            Experience Muktar Plaza through actual architectural layouts, residential unit plans, commercial frontage, and cinematic project visuals.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gold-500 text-obsidian shadow-lg shadow-gold-500/30 scale-105'
                  : 'glass-panel text-neutral-400 hover:text-white hover:border-gold-500/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left Column: Navigation & Details */}
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {activeAssets.map((asset, idx) => (
              <button
                key={asset.id}
                onClick={() => setActiveIndex(idx)}
                className={`group text-left rounded-3xl border p-5 transition-all duration-500 ${
                  activeIndex === idx
                    ? 'border-gold-400/50 bg-white/10 shadow-xl shadow-gold-500/10 ring-1 ring-gold-400/20'
                    : 'border-white/10 bg-obsidian/40 hover:border-gold-500/20 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="overflow-hidden">
                    <p className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                      activeIndex === idx ? 'text-gold-400' : 'text-neutral-500'
                    }`}>
                      {asset.type === 'video' ? 'Motion Study' : 'Architectural Visual'}
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-white mt-1 truncate">{asset.title}</h3>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
                    activeIndex === idx ? 'bg-gold-500 text-obsidian scale-110' : 'bg-white/10 text-neutral-400 group-hover:bg-gold-500/20 group-hover:text-gold-400'
                  }`}>
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-400 line-clamp-2 leading-relaxed">{asset.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Asset Detail Card */}
          <motion.div 
            key={activeAsset.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-[2rem] border border-gold-500/20 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Maximize2 className="w-24 h-24 text-gold-400" />
            </div>
            
            <div className="flex flex-col gap-6 relative z-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold">{activeAsset.type === 'video' ? 'Cinematic Preview' : 'Plan Details'}</p>
                <h3 className="font-serif text-3xl font-bold text-white mt-3">{activeAsset.title}</h3>
              </div>
              <p className="text-sm leading-7 text-neutral-300">{activeAsset.description}</p>
              
              {activeAsset.highlights && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeAsset.highlights.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-neutral-300 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      {item}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-obsidian font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  {activeCategory === 'commercial' ? 'Explore Commercial Spaces' : 'Request Detailed Plan'}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setLightboxAsset(activeAsset)}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10 hover:border-gold-500/30"
                >
                  <Maximize2 className="w-4 h-4" />
                  Fullscreen
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#070b11] shadow-2xl shadow-black/60 min-h-[520px] group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeAsset.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full relative"
            >
              {activeAsset.type === 'video' ? (
                <video
                  controls
                  preload="metadata"
                  poster={activeAsset.poster}
                  className="h-full w-full bg-black object-cover"
                >
                  <source src={activeAsset.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={activeAsset.image}
                  alt={activeAsset.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
          
          {/* Floating Info Card */}
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-obsidian/40 border border-white/10 p-6 backdrop-blur-2xl text-white transition-all duration-300 group-hover:bg-obsidian/60">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-bold">
                  {categories.find((item) => item.id === activeCategory)?.label}
                </p>
                <h3 className="font-serif text-2xl font-bold">{activeAsset.title}</h3>
                <p className="text-sm text-neutral-300 line-clamp-1">{activeAsset.subtitle}</p>
              </div>
              {activeAsset.type === 'video' && (
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-obsidian animate-pulse">
                  <PlayCircle className="w-6 h-6" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {lightboxAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/95 backdrop-blur-md p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-7xl rounded-[2rem] overflow-hidden border border-gold-500/30 bg-black shadow-2xl"
            >
              <button
                onClick={() => setLightboxAsset(null)}
                className="absolute top-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-obsidian/80 text-white transition-all hover:bg-gold-500 hover:text-obsidian backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-3/4 bg-black flex items-center justify-center">
                  {lightboxAsset.type === 'video' ? (
                    <video controls autoPlay className="max-h-[80vh] w-full object-contain">
                      <source src={lightboxAsset.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={lightboxAsset.image} alt={lightboxAsset.title} className="max-h-[85vh] w-full object-contain" />
                  )}
                </div>
                
                <div className="w-full lg:w-1/4 p-8 md:p-12 bg-obsidian flex flex-col justify-center border-l border-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">Project Detail</p>
                  <h3 className="font-serif text-3xl font-bold text-white mb-4">{lightboxAsset.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-8">{lightboxAsset.description}</p>
                  
                  {lightboxAsset.highlights && (
                    <div className="space-y-3 mb-8">
                      {lightboxAsset.highlights.map(h => (
                        <div key={h} className="text-xs text-neutral-400 flex items-center gap-2">
                          <div className="w-1 h-1 bg-gold-500 rounded-full" /> {h}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <button 
                    onClick={() => setLightboxAsset(null)}
                    className="w-full py-4 rounded-full border border-white/10 text-xs uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}