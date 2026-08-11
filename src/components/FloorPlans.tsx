'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  X,
} from 'lucide-react'

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

type AssetCategory =
  | 'plans'
  | 'residential'
  | 'commercial'
  | 'views'
  | 'videos'

const categories: { id: AssetCategory; label: string }[] = [
  { id: 'plans', label: 'FLOOR PLANS' },
  { id: 'residential', label: 'RESIDENTIAL' },
  { id: 'commercial', label: 'COMMERCIAL' },
  { id: 'views', label: '3D VIEWS' },
  { id: 'videos', label: 'VIDEOS' },
]

/*
|--------------------------------------------------------------------------
| MUKTAR PLAZA ASSETS
|--------------------------------------------------------------------------
| Replace only the image paths when you have the final plan images.
|
| Recommended:
| 01 Full Project Plan
| 02 Parking Plan
| 03 Shop Plan
| 04 Commercial Plan
| 05 Residential Plan
| 06 Roof Floor Plan
| 07 Rooftop Floor Plan
|--------------------------------------------------------------------------
*/

const assetsMap: Record<AssetCategory, Asset[]> = {
  plans: [
    {
      id: 'full-project-plan',
      title: 'Full Project Plan',
      subtitle: 'Complete Muktar Plaza master planning overview',
      image: '/frames/full-project-plan.jpg',
      description:
        'A complete architectural overview of Muktar Plaza showing the overall project organization, building footprint, access, circulation, commercial and residential planning, parking, and key project zones.',
      highlights: [
        'Complete Project Layout',
        'Site & Building Arrangement',
        'Vehicle & Pedestrian Circulation',
        'Commercial & Residential Zones',
        'Parking & Access Planning',
      ],
      type: 'image',
    },

    {
      id: 'parking-plan',
      title: 'Parking Plan',
      subtitle: 'Vehicle access, parking and circulation layout',
      image: '/frames/parking-plan.jpg',
      description:
        'A dedicated parking and circulation plan showing vehicle movement, parking arrangement, access points, and practical circulation around the project.',
      highlights: [
        'Parking Arrangement',
        'Vehicle Entry & Exit',
        'Internal Circulation',
        'Access Planning',
        'Service Movement',
      ],
      type: 'image',
    },

    {
      id: 'shop-plan',
      title: 'Shop Plan',
      subtitle: 'Commercial shop layout and retail circulation',
      image: '/frames/shop-plan.jpg',
      description:
        'A dedicated shop plan presenting the commercial retail arrangement, shop positioning, customer circulation, access and practical frontage planning.',
      highlights: [
        'Retail Shop Layout',
        'Shop Frontage',
        'Customer Circulation',
        'Commercial Access',
        'Usable Business Space',
      ],
      type: 'image',
    },

    {
      id: 'commercial-plan',
      title: 'Commercial Plan',
      subtitle: 'Commercial floor planning and business spaces',
      image: '/frames/commercial-plan.jpg',
      description:
        'A commercial floor planning overview showing how business spaces, circulation, access and supporting areas are organized within Muktar Plaza.',
      highlights: [
        'Commercial Floor Layout',
        'Business Space Planning',
        'Vertical Circulation',
        'Common Access Areas',
        'Practical Commercial Flow',
      ],
      type: 'image',
    },

    {
      id: 'residential-plan',
      title: 'Residential Plan',
      subtitle: 'Residential apartment layout and unit configuration',
      image: '/frames/Untitled (2048 x 1649 px).png',
      description:
        'The residential planning overview for Muktar Plaza, showing apartment configurations, circulation, room planning, access and the overall residential layout.',
      highlights: [
        'Type A • 1245 sqft',
        'Type B • 1475 sqft',
        'Type C • 1405 sqft',
        'Type D • 1420 sqft',
        'Type E • 1515 sqft',
      ],
      type: 'image',
    },

    {
      id: 'roof-floor-plan',
      title: 'Roof Floor Plan',
      subtitle: 'Roof-level architectural and service planning',
      image: '/frames/10.jpg',
      description:
        'A detailed roof floor plan showing rooftop circulation, service access, open areas and architectural planning at the roof level.',
      highlights: [
        'Roof-Level Layout',
        'Service Access',
        'Circulation Planning',
        'Open Terrace Areas',
        'Architectural Arrangement',
      ],
      type: 'image',
    },

    {
      id: 'rooftop-floor-plan',
      title: 'Rooftop Floor Plan',
      subtitle: 'Upper rooftop deck and amenity planning',
      image: '/frames/11.jpg',
      description:
        'A rooftop floor planning study presenting the upper-level arrangement, open areas, service zones and rooftop architectural organization.',
      highlights: [
        'Rooftop Arrangement',
        'Open Deck Areas',
        'Service Zones',
        'Access & Circulation',
        'Upper-Level Planning',
      ],
      type: 'image',
    },
  ],

  residential: [
    {
      id: 'residential-flat-plans',
      title: 'Residential Flat Plans',
      subtitle: 'Apartment configurations for modern living',
      image: '/frames/Untitled (2048 x 1649 px).png',
      description:
        'Explore the residential apartment configurations planned for Muktar Plaza, with multiple unit types designed around practical room planning, circulation, comfort and everyday living.',
      highlights: [
        'Type A • 1245 sqft',
        'Type B • 1475 sqft',
        'Type C • 1405 sqft',
        'Type D • 1420 sqft',
        'Type E • 1515 sqft',
      ],
      type: 'image',
    },

    {
      id: 'residential-arrival',
      title: 'Residential Arrival Experience',
      subtitle: 'Elegant residential gateway and entry',
      image: '/frames/8.jpg',
      description:
        'A refined residential arrival perspective highlighting the building entrance, facade character, landscaping and overall residential presence.',
      type: 'image',
    },
  ],

  commercial: [
    {
      id: 'commercial-shop-plan',
      title: 'Shop Plan',
      subtitle: 'Dedicated retail shop layout',
      image: '/frames/shop-plan.jpg',
      description:
        'A dedicated retail planning view showing shop arrangement, frontage, circulation and practical commercial access.',
      highlights: [
        'Retail Shop Arrangement',
        'Commercial Frontage',
        'Customer Access',
        'Circulation Planning',
      ],
      type: 'image',
    },

    {
      id: 'commercial-floor-plan',
      title: 'Commercial Plan',
      subtitle: 'Business and commercial floor layout',
      image: '/frames/commercial-plan.jpg',
      description:
        'A commercial floor layout designed around practical business use, accessibility, circulation and customer-facing spaces.',
      highlights: [
        'Commercial Floor Layout',
        'Business Space Planning',
        'Access & Circulation',
        'Common Areas',
      ],
      type: 'image',
    },

    {
      id: 'retail-gateway',
      title: 'Retail Gateway',
      subtitle: 'High-street commercial entrance',
      image: '/frames/9.jpg.jpeg',
      description:
        'A premium commercial arrival point designed to create a strong first impression for shoppers, businesses and tenants.',
      type: 'image',
    },

    {
      id: 'brand-frontage',
      title: 'Brand Frontage',
      subtitle: 'Street-facing retail display zone',
      image: '/frames/4.jpg',
      description:
        'A commercial frontage visual highlighting the retail-facing architectural character and street presence of Muktar Plaza.',
      type: 'image',
    },

    {
      id: 'commercial-atrium',
      title: 'Commercial Atrium View',
      subtitle: 'Dynamic retail circulation area',
      image: '/frames/5.jpg',
      description:
        'A refined commercial perspective representing circulation, shared spaces and the retail experience within Muktar Plaza.',
      type: 'image',
    },
  ],

  views: [
    {
      id: 'north-elevation',
      title: 'North Elevation Perspective',
      subtitle: 'Signature exterior architecture',
      image: '/frames/1.jpg.jpeg',
      description:
        'A premium 3D elevation view showing the architectural character and overall facade composition of Muktar Plaza.',
      type: 'image',
    },

    {
      id: 'rooftop-aerial',
      title: 'Rooftop Aerial View',
      subtitle: 'Sky-level architectural perspective',
      image: '/frames/2.jpg.jpeg',
      description:
        'An aerial 3D view showing the upper portion of the building and its surrounding architectural context.',
      type: 'image',
    },

    {
      id: 'full-structure',
      title: 'Full Structure Perspective',
      subtitle: 'Complete building exterior study',
      image: '/frames/3.jpg.jpeg',
      description:
        'A project render capturing the overall exterior presence, building form and surrounding landscape context.',
      type: 'image',
    },

    {
      id: 'facade-perspective',
      title: 'Facade Perspective',
      subtitle: 'Detailed building context',
      image: '/frames/3 (1).png',
      description:
        'A detailed architectural perspective highlighting the building facade, scale, glazing and material composition.',
      type: 'image',
    },

    {
      id: 'top-view',
      title: '3D Top View',
      subtitle: 'Premium aerial perspective',
      image: '/frames/12.jpg',
      description:
        'A cinematic top view providing a broader understanding of the project form, roof arrangement and architectural context.',
      type: 'image',
    },
  ],

  videos: [
    {
      id: 'project-preview',
      title: 'Muktar Plaza Project Preview',
      subtitle: 'Cinematic architecture presentation',
      description:
        'A premium motion study showcasing the architecture, building form and spatial concept of Muktar Plaza.',
      src: '/frames/Untitled design (2).mp4',
      poster: '/frames/1.jpg.jpeg',
      type: 'video',
    },

    {
      id: 'project-walkthrough',
      title: 'Muktar Plaza Walkthrough',
      subtitle: 'Design and project cinematic study',
      description:
        'A dynamic walkthrough highlighting architectural details, circulation, facade rhythm and the overall project experience.',
      src: '/frames/Untitled design (12).mp4',
      poster: '/frames/2.jpg.jpeg',
      type: 'video',
    },
  ],
}

const springTransition = {
  type: 'spring',
  stiffness: 180,
  damping: 24,
  mass: 0.8,
}

export default function FloorPlans() {
  const [activeCategory, setActiveCategory] =
    useState<AssetCategory>('plans')

  const [activeIndex, setActiveIndex] = useState(0)

  const [lightboxAsset, setLightboxAsset] =
    useState<Asset | null>(null)

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const activeAssets = useMemo(
    () => assetsMap[activeCategory],
    [activeCategory]
  )

  const activeAsset = activeAssets[activeIndex]

  useEffect(() => {
    setActiveIndex(0)
    setIsImageLoaded(false)
  }, [activeCategory])

  useEffect(() => {
    if (!lightboxAsset) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxAsset])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxAsset(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === activeAssets.length - 1 ? 0 : current + 1
        )
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === 0 ? activeAssets.length - 1 : current - 1
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeAssets.length])

  const nextAsset = () => {
    setActiveIndex((current) =>
      current === activeAssets.length - 1 ? 0 : current + 1
    )
    setIsImageLoaded(false)
  }

  const previousAsset = () => {
    setActiveIndex((current) =>
      current === 0 ? activeAssets.length - 1 : current - 1
    )
    setIsImageLoaded(false)
  }

  const selectAsset = (index: number) => {
    setIsImageLoaded(false)
    setActiveIndex(index)
  }

  return (
    <section
      id="floorplans"
      className="relative z-10 mx-auto max-w-[1600px] px-5 py-24 sm:px-8 md:px-12 lg:py-32"
    >
      {/* HEADER */}

      <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-400">
              05 — Plans & Space
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-serif text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Muktar Plaza{' '}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Plans & Spaces
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base"
          >
            Explore the complete planning vision of Muktar Plaza — from the
            full project layout and parking arrangement to dedicated shop,
            commercial, residential, roof and rooftop floor plans.
          </motion.p>
        </div>

        {/* CATEGORY NAVIGATION */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex max-w-full gap-2 overflow-x-auto pb-2 lg:max-w-[650px] lg:justify-end"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className="relative shrink-0 overflow-hidden rounded-full border border-white/10 px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-500 sm:px-5 sm:text-[10px]"
              >
                {isActive && (
                  <motion.span
                    layoutId="floorplan-category-pill"
                    transition={springTransition}
                    className="absolute inset-0 bg-gold-500"
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? 'text-obsidian'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {category.label}
                </span>
              </button>
            )
          })}
        </motion.div>
      </div>

      {/* MAIN EXPERIENCE */}

      <div className="grid gap-6 lg:grid-cols-[minmax(300px,0.75fr)_minmax(0,1.25fr)] xl:gap-8">
        {/* LEFT */}

        <div className="flex min-w-0 flex-col">
          {/* ASSET SELECTOR */}

          <div className="mb-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {activeAssets.map((asset, index) => {
              const isActive = activeIndex === index

              return (
                <motion.button
                  key={asset.id}
                  type="button"
                  onClick={() => selectAsset(index)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 sm:p-5 ${
                    isActive
                      ? 'border-gold-400/40 bg-white/[0.07]'
                      : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-floorplan-line"
                      className="absolute inset-y-0 left-0 w-[2px] bg-gold-400"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="mb-2 flex items-center gap-2">
                        <span
                          className={`text-[8px] uppercase tracking-[0.25em] ${
                            isActive
                              ? 'text-gold-400'
                              : 'text-neutral-600'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span className="h-px w-5 bg-white/10" />

                        <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                          {asset.type === 'video'
                            ? 'Motion'
                            : 'Architecture'}
                        </span>
                      </div>

                      <h3 className="truncate font-serif text-lg font-semibold text-white">
                        {asset.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-neutral-500">
                        {asset.subtitle}
                      </p>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? 'border-gold-400/40 bg-gold-500 text-obsidian'
                          : 'border-white/10 bg-white/[0.03] text-neutral-500 group-hover:border-gold-400/30 group-hover:text-gold-400'
                      }`}
                    >
                      {asset.type === 'video' ? (
                        <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                      ) : (
                        <Maximize2 className="h-3.5 w-3.5" />
                      )}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* DETAILS */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activeAsset.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="relative flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-gold-500/15 bg-white/[0.025] p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gold-500/[0.05] blur-3xl" />

              <div className="relative">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                  {activeAsset.type === 'video'
                    ? 'Cinematic Preview'
                    : activeCategory === 'plans'
                      ? 'Plan Details'
                      : 'Project Details'}
                </p>

                <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {activeAsset.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-400">
                  {activeAsset.description}
                </p>
              </div>

              {activeAsset.highlights && (
                <div className="relative mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeAsset.highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3 text-[11px] text-neutral-400"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-gold-400" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              )}

              <div className="relative mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-obsidian transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gold-500/20"
                >
                  {activeCategory === 'commercial'
                    ? 'Explore Commercial Spaces'
                    : activeCategory === 'residential'
                      ? 'Explore Residential Flats'
                      : activeCategory === 'plans'
                        ? 'Request Detailed Plan'
                        : activeCategory === 'videos'
                          ? 'Request Project Details'
                          : 'Explore Muktar Plaza'}

                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <button
                  type="button"
                  onClick={() => setLightboxAsset(activeAsset)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-300 transition-all duration-300 hover:border-gold-400/30 hover:bg-white/[0.06] hover:text-white"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  Fullscreen
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT — HERO VISUAL */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b11] shadow-2xl shadow-black/50 sm:min-h-[560px] lg:min-h-[700px]"
        >
          {/* TOP METADATA */}

          <div className="pointer-events-none absolute left-6 right-6 top-6 z-30 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.35em] text-gold-400">
                {
                  categories.find(
                    (category) => category.id === activeCategory
                  )?.label
                }
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                Muktar Plaza
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[8px] tracking-[0.2em] text-white/50 backdrop-blur-xl">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(activeAssets.length).padStart(2, '0')}
            </div>
          </div>

          {/* VISUAL */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeAsset.id}
              initial={{
                opacity: 0,
                scale: 1.035,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.985,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              {activeAsset.type === 'video' ? (
                <video
                  key={activeAsset.id}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  poster={activeAsset.poster}
                  className="h-full w-full object-cover"
                >
                  <source
                    src={activeAsset.src}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <>
                  {!isImageLoaded && (
                    <div className="absolute inset-0 z-10 animate-pulse bg-white/[0.03]" />
                  )}

                  <img
                    src={activeAsset.image}
                    alt={activeAsset.title}
                    onLoad={() => setIsImageLoaded(true)}
                    onError={() => setIsImageLoaded(true)}
                    className={`h-full w-full object-cover transition-all duration-1000 ${
                      isImageLoaded
                        ? 'scale-100 opacity-100'
                        : 'scale-[1.03] opacity-0'
                    }`}
                  />
                </>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CINEMATIC GRADIENTS */}

          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-transparent to-black/80" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

          {/* NAVIGATION */}

          <div className="absolute bottom-6 right-6 z-30 flex gap-2 sm:bottom-8 sm:right-8">
            <button
              type="button"
              onClick={previousAsset}
              aria-label="Previous asset"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-500 hover:text-obsidian"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextAsset}
              aria-label="Next asset"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-500 hover:text-obsidian"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* BOTTOM INFO */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeAsset.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45 }}
              className="absolute bottom-6 left-6 right-32 z-20 sm:bottom-8 sm:left-8"
            >
              <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                {activeAsset.type === 'video'
                  ? 'Motion Study'
                  : activeCategory === 'plans'
                    ? 'Architectural Plan'
                    : 'Architectural Visual'}
              </p>

              <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {activeAsset.title}
              </h3>

              <p className="mt-2 max-w-xl text-xs leading-5 text-neutral-300 sm:text-sm">
                {activeAsset.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* PROGRESS */}

          <div className="absolute bottom-0 left-0 right-0 z-30 flex h-[2px]">
            {activeAssets.map((asset, index) => (
              <button
                key={asset.id}
                type="button"
                onClick={() => selectAsset(index)}
                className="group relative h-full flex-1 bg-white/10"
                aria-label={`View ${asset.title}`}
              >
                <motion.span
                  animate={{
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 origin-left bg-gold-400"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {lightboxAsset && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxAsset(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6 lg:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.45 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[94vh] w-full max-w-[1500px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080b10] shadow-2xl lg:flex-row"
            >
              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setLightboxAsset(null)}
                aria-label="Close fullscreen"
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition-all hover:border-gold-400/30 hover:bg-gold-500 hover:text-obsidian sm:right-6 sm:top-6"
              >
                <X className="h-4 w-4" />
              </button>

              {/* MEDIA */}

              <div className="relative flex min-h-[45vh] flex-1 items-center justify-center overflow-hidden bg-black lg:min-h-0">
                {lightboxAsset.type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    muted
                    playsInline
                    className="max-h-[75vh] w-full object-contain"
                  >
                    <source
                      src={lightboxAsset.src}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    src={lightboxAsset.image}
                    alt={lightboxAsset.title}
                    className="max-h-[75vh] w-full object-contain"
                  />
                )}
              </div>

              {/* DETAILS */}

              <div className="flex w-full shrink-0 flex-col justify-center border-t border-white/10 bg-[#080b10] p-6 sm:p-8 lg:w-[340px] lg:border-l lg:border-t-0 lg:p-10 xl:w-[400px]">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gold-400">
                  Project Detail
                </p>

                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {lightboxAsset.title}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-neutral-600">
                  {lightboxAsset.subtitle}
                </p>

                <p className="mt-6 text-sm leading-7 text-neutral-400">
                  {lightboxAsset.description}
                </p>

                {lightboxAsset.highlights && (
                  <div className="mt-6 space-y-2">
                    {lightboxAsset.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 border-b border-white/[0.06] py-2.5 text-xs text-neutral-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-gold-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href="#contact"
                  onClick={() => setLightboxAsset(null)}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 py-3.5 text-[9px] font-bold uppercase tracking-[0.2em] text-obsidian transition-all hover:scale-[1.02]"
                >
                  Request This Plan
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setLightboxAsset(null)}
                  className="mt-3 rounded-full border border-white/10 py-3.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white transition-all hover:border-gold-400/30 hover:bg-white/[0.04]"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}