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

type AssetType = 'image' | 'youtube'

type Asset = {
  id: string
  title: string
  subtitle: string
  description: string
  type: AssetType
  image?: string
  youtubeId?: string
  youtubeStart?: number
  highlights?: string[]
}

type AssetCategory = 'plans' | 'videos'

const categories: {
  id: AssetCategory
  label: string
}[] = [
  {
    id: 'plans',
    label: 'FLOOR PLANS',
  },
  {
    id: 'videos',
    label: 'VIDEOS',
  },
]

const frame = (name: string) => `/frames/${name}`

/* ================================================================
   MUKTAR PLAZA — EXACT FILE NAMES FROM public/frames
================================================================ */

const assetsMap: Record<AssetCategory, Asset[]> = {
  /* ================================================================
     FLOOR PLANS
  ================================================================= */

  plans: [
    {
      id: 'project-information',
      title: 'Project Information',
      subtitle: 'Complete project overview',
      image: frame('information.png'),
      description:
        'Complete project information and planning overview of Muktar Plaza, presenting the overall development concept, building organization and architectural planning.',
      highlights: [
        'Project Overview',
        'Architectural Planning',
        'Building Organization',
        'Commercial & Residential Planning',
      ],
      type: 'image',
    },

    {
      id: 'semi-basement-floor-plan',
      title: 'Semi Basement Floor Plan',
      subtitle: 'Parking and service planning',
      image: frame('semi basement.png'),
      description:
        'The semi basement floor plan presents the parking, circulation, access and supporting service areas planned for Muktar Plaza.',
      highlights: [
        'Parking Arrangement',
        'Vehicle Circulation',
        'Access Planning',
        'Service Areas',
      ],
      type: 'image',
    },

    {
      id: 'ground-floor-plan',
      title: 'Ground Floor Plan',
      subtitle: 'Ground-level commercial planning',
      image: frame('ground floor.png'),
      description:
        'Ground floor architectural planning showing commercial spaces, access, circulation and supporting areas.',
      highlights: [
        'Commercial Spaces',
        'Customer Access',
        'Circulation Planning',
        'Service Areas',
      ],
      type: 'image',
    },

    {
      id: 'first-floor-plan',
      title: '1st Floor Plan',
      subtitle: 'First floor architectural planning',
      image: frame('1st floor.png'),
      description:
        'Detailed first floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'second-floor-plan',
      title: '2nd Floor Plan',
      subtitle: 'Second floor architectural planning',
      image: frame('2nd floor.png'),
      description:
        'Detailed second floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'third-floor-plan',
      title: '3rd Floor Plan',
      subtitle: 'Third floor architectural planning',
      image: frame('3rd floor.png'),
      description:
        'Detailed third floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'fifth-floor-plan',
      title: '5th Floor Plan',
      subtitle: 'Fifth floor architectural planning',
      image: frame('5th floor.png'),
      description:
        'Detailed fifth floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'ninth-floor-plan',
      title: '9th Floor Plan',
      subtitle: 'Ninth floor architectural planning',
      image: frame('9th floor.png'),
      description:
        'Detailed ninth floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'eleventh-floor-plan',
      title: '11th Floor Plan',
      subtitle: 'Eleventh floor architectural planning',
      image: frame('11 th floor.png'),
      description:
        'Detailed eleventh floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'twelfth-floor-plan',
      title: '12th Floor Plan',
      subtitle: 'Twelfth floor architectural planning',
      image: frame('12th floor.png'),
      description:
        'Detailed twelfth floor architectural plan showing the planned spaces, circulation and functional arrangement.',
      type: 'image',
    },

    {
      id: 'typical-floor-a',
      title: 'Typical Floor Type A',
      subtitle: 'Residential typical floor configuration',
      image: frame('Tripical Floor Type A.png'),
      description:
        'Typical residential floor configuration presenting the apartment layout, circulation and functional planning.',
      highlights: [
        'Residential Layout',
        'Room Planning',
        'Circulation',
        'Functional Arrangement',
      ],
      type: 'image',
    },

    {
      id: 'typical-floor-b',
      title: 'Typical Floor Type B',
      subtitle: 'Residential typical floor configuration',
      image: frame('Tripical Floor Type b.png'),
      description:
        'Typical residential floor configuration presenting the apartment layout, circulation and functional planning.',
      type: 'image',
    },

    {
      id: 'typical-floor-c',
      title: 'Typical Floor Type C',
      subtitle: 'Residential typical floor configuration',
      image: frame('Tripical Floor Type c.png'),
      description:
        'Typical residential floor configuration presenting the apartment layout, circulation and functional planning.',
      type: 'image',
    },

    {
      id: 'typical-floor-d',
      title: 'Typical Floor Type D',
      subtitle: 'Residential typical floor configuration',
      image: frame('Tripical Floor Type d.png'),
      description:
        'Typical residential floor configuration presenting the apartment layout, circulation and functional planning.',
      type: 'image',
    },

    {
      id: 'typical-floor-e',
      title: 'Typical Floor Type E',
      subtitle: 'Residential typical floor configuration',
      image: frame('Tripical Floor Type e.png'),
      description:
        'Typical residential floor configuration presenting the apartment layout, circulation and functional planning.',
      type: 'image',
    },

    {
      id: 'typical-floor-f',
      title: 'Typical Floor Type F',
      subtitle: 'Residential typical floor configuration',
      image: frame('Tripical Floor Type f.png'),
      description:
        'Typical residential floor configuration presenting the apartment layout, circulation and functional planning.',
      type: 'image',
    },

    {
      id: 'roof-floor-plan',
      title: 'Roof Floor Plan',
      subtitle: 'Roof-level architectural planning',
      image: frame('roof floor.png'),
      description:
        'Roof floor architectural planning showing the roof-level arrangement, access and supporting spaces.',
      type: 'image',
    },

    {
      id: 'roof-top',
      title: 'Roof Top',
      subtitle: 'Rooftop architectural arrangement',
      image: frame('roof top.png'),
      description:
        'Rooftop planning showing the upper-level open spaces, access and architectural organization.',
      type: 'image',
    },

    /* ================================================================
       FEATURES & AMENITIES — SAME TITLE / TWO IMAGES
    ================================================================= */

    {
      id: 'features-amenities-1',
      title: 'Features & Amenities',
      subtitle: 'Project features and amenities — 01',
      image: frame('Features 1.png'),
      description:
        'A visual presentation of the key features and amenities planned for Muktar Plaza.',
      type: 'image',
    },

    {
      id: 'features-amenities-2',
      title: 'Features & Amenities',
      subtitle: 'Project features and amenities — 02',
      image: frame('Features 2.png'),
      description:
        'Additional features and amenities planned as part of the Muktar Plaza development.',
      type: 'image',
    },
  ],

  /* ================================================================
     VIDEOS — ONLY ONE YOUTUBE VIDEO
  ================================================================= */

  videos: [
    {
      id: 'muktar-plaza-video',
      title: 'Muktar Plaza Project Video',
      subtitle: 'Cinematic project presentation',
      description:
        'Watch the Muktar Plaza project presentation and explore the architectural vision, building character and overall development concept.',
      youtubeId: 'aBLqvD0SzEI',
      youtubeStart: 5,
      type: 'youtube',
    },
  ],
}

/* ================================================================
   TRANSITION
================================================================ */

const springTransition = {
  type: 'spring' as const,
  stiffness: 180,
  damping: 24,
  mass: 0.8,
}

/* ================================================================
   COMPONENT
================================================================ */

export default function FloorPlans() {
  const [activeCategory, setActiveCategory] =
    useState<AssetCategory>('plans')

  const [activeIndex, setActiveIndex] = useState(0)

  const [lightboxAsset, setLightboxAsset] =
    useState<Asset | null>(null)

  const activeAssets = useMemo(
    () => assetsMap[activeCategory],
    [activeCategory]
  )

  const activeAsset =
    activeAssets[activeIndex] ?? activeAssets[0]

  /* ================================================================
     RESET WHEN CATEGORY CHANGES
  ================================================================= */

  useEffect(() => {
    setActiveIndex(0)
  }, [activeCategory])

  /* ================================================================
     BODY LOCK FOR LIGHTBOX
  ================================================================= */

  useEffect(() => {
    if (lightboxAsset) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxAsset])

  /* ================================================================
     KEYBOARD NAVIGATION
  ================================================================= */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxAsset(null)
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current >= activeAssets.length - 1
            ? 0
            : current + 1
        )
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current <= 0
            ? activeAssets.length - 1
            : current - 1
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
      current >= activeAssets.length - 1
        ? 0
        : current + 1
    )
  }

  const previousAsset = () => {
    setActiveIndex((current) =>
      current <= 0
        ? activeAssets.length - 1
        : current - 1
    )
  }

  const selectAsset = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section
      id="floorplans"
      className="relative z-10 mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:px-10 lg:py-28"
    >
      {/* ================================================================
          HEADER
      ================================================================= */}

      <div className="mb-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[700px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
              05 — Plans & Space
            </span>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="font-serif text-4xl font-bold leading-[1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Muktar Plaza{' '}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Plans & Spaces
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-5 max-w-[680px] text-sm leading-7 text-neutral-400 sm:text-base"
          >
            Explore the complete planning vision of Muktar Plaza —
            from project information and floor plans to features,
            amenities and project videos.
          </motion.p>
        </div>

        {/* ================================================================
            ONLY TWO BUTTONS
        ================================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex shrink-0 gap-2"
        >
          {categories.map((category) => {
            const isActive =
              activeCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className="relative overflow-hidden rounded-full border border-white/15 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 sm:px-6"
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    transition={springTransition}
                    className="absolute inset-0 bg-gold-400"
                  />
                )}

                <span
                  className={`relative z-10 ${
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

      {/* ================================================================
          MAIN LAYOUT
      ================================================================= */}

      <div className="grid gap-5 lg:grid-cols-[390px_minmax(0,1fr)] xl:grid-cols-[410px_minmax(0,1fr)]">
        {/* ==============================================================
            LEFT COLUMN
        ============================================================== */}

        <div className="flex min-w-0 flex-col">
          {/* ASSET LIST */}

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080a0e]">
            <div className="max-h-[545px] overflow-y-auto px-1.5 py-1.5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
              {activeAssets.map((asset, index) => {
                const isActive =
                  activeIndex === index

                return (
                  <button
                    key={asset.id}
                    type="button"
                    onClick={() => selectAsset(index)}
                    className={`group relative flex w-full items-center gap-3 border-b border-white/[0.08] px-4 py-3.5 text-left transition-all duration-300 last:border-b-0 ${
                      isActive
                        ? 'bg-white/[0.045]'
                        : 'hover:bg-white/[0.025]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-item-line"
                        className="absolute bottom-1 top-1 left-0 w-[2px] rounded-full bg-gold-400"
                      />
                    )}

                    {/* NUMBER */}

                    <span
                      className={`w-7 shrink-0 text-[9px] font-semibold ${
                        isActive
                          ? 'text-gold-400'
                          : 'text-neutral-500'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* LINE */}

                    <span className="h-px w-5 shrink-0 bg-white/15" />

                    {/* TITLE */}

                    <span
                      className={`min-w-0 flex-1 truncate text-[11px] font-medium transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-neutral-400 group-hover:text-white'
                      }`}
                    >
                      {asset.title}
                    </span>

                    {/* ARROW */}

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isActive
                          ? 'border-gold-400 bg-gold-400 text-obsidian'
                          : 'border-white/10 text-neutral-500 group-hover:border-white/25 group-hover:text-white'
                      }`}
                    >
                      {asset.type === 'youtube' ? (
                        <Play className="ml-0.5 h-3 w-3 fill-current" />
                      ) : (
                        <ArrowRight className="h-3 w-3" />
                      )}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ==============================================================
              DETAILS CARD
          ============================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${activeAsset.id}`}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.4,
              }}
              className="mt-4 flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080a0e] p-5 sm:p-6"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gold-400">
                {activeCategory === 'videos'
                  ? 'Project Video'
                  : 'Plan Details'}
              </p>

              <h3 className="mt-3 font-serif text-2xl font-bold uppercase leading-tight text-white">
                {activeAsset.title}
              </h3>

              <p className="mt-3 text-[11px] leading-6 text-neutral-500">
                {activeAsset.description}
              </p>

              {activeAsset.highlights && (
                <div className="mt-5 space-y-2">
                  {activeAsset.highlights.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg border border-white/[0.07] px-3 py-2 text-[9px] text-neutral-400"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-gold-400" />

                        {item}
                      </div>
                    )
                  )}
                </div>
              )}

              <div className="mt-6 flex gap-2">
                <a
                  href="#contact"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-400 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.18em] text-obsidian transition-all hover:bg-gold-300"
                >
                  {activeCategory === 'videos'
                    ? 'Request Details'
                    : 'Request Detailed Plan'}

                  <ArrowRight className="h-3 w-3" />
                </a>

                {activeAsset.type === 'image' && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxAsset(activeAsset)
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-[8px] font-bold uppercase tracking-[0.18em] text-neutral-300 transition-all hover:border-gold-400/40 hover:text-white"
                  >
                    <Maximize2 className="h-3 w-3" />

                    <span className="hidden sm:inline">
                      Full Screen
                    </span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ==============================================================
            RIGHT VISUAL PANEL
        ============================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080a0e]"
        >
          {/* TOP HEADER */}

          <div className="flex items-start justify-between px-6 pb-4 pt-6 sm:px-7">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gold-400">
                {activeCategory === 'videos'
                  ? 'PROJECT VIDEO'
                  : 'FLOOR PLANS'}
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-neutral-600">
                MUKTAR PLAZA
              </p>
            </div>

            <div className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] tracking-[0.15em] text-neutral-500">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(activeAssets.length).padStart(2, '0')}
            </div>
          </div>

          {/* ==============================================================
              MEDIA
          ============================================================== */}

          <div className="relative mx-3 overflow-hidden rounded-xl border border-white/[0.08] bg-black sm:mx-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAsset.id}
                initial={{
                  opacity: 0,
                  scale: 1.015,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className={
                  activeAsset.type === 'youtube'
                    ? 'relative aspect-video w-full'
                    : 'relative flex min-h-[430px] items-center justify-center bg-[#050608] sm:min-h-[520px] lg:min-h-[560px]'
                }
              >
                {/* IMAGE */}

                {activeAsset.type === 'image' &&
                  activeAsset.image && (
                    <img
                      src={activeAsset.image}
                      alt={activeAsset.title}
                      className="block max-h-[560px] w-full object-contain"
                      draggable={false}
                    />
                  )}

                {/* YOUTUBE */}

                {activeAsset.type === 'youtube' &&
                  activeAsset.youtubeId && (
                    <iframe
                      src={`https://www.youtube.com/embed/${activeAsset.youtubeId}?start=${activeAsset.youtubeStart ?? 0}&rel=0&modestbranding=1`}
                      title={activeAsset.title}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ==============================================================
              IMAGE TITLE AREA
          ============================================================== */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeAsset.id}-title`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.35,
              }}
              className="px-6 pb-5 pt-5 sm:px-7"
            >
              <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-gold-400">
                {activeAsset.type === 'youtube'
                  ? 'Cinematic Presentation'
                  : 'Architectural Plan'}
              </p>

              <h3 className="mt-2 font-serif text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
                {activeAsset.title}
              </h3>

              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-neutral-600">
                {activeAsset.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ==============================================================
              THUMBNAIL NAVIGATION
          ============================================================== */}

          <div className="border-t border-white/[0.08] px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              {/* PREVIOUS */}

              <button
                type="button"
                onClick={previousAsset}
                aria-label="Previous"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:border-gold-400/40 hover:bg-gold-400 hover:text-obsidian"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* THUMBNAILS */}

              <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                {activeAssets.map(
                  (asset, index) => {
                    const isActive =
                      activeIndex === index

                    return (
                      <button
                        key={asset.id}
                        type="button"
                        onClick={() =>
                          selectAsset(index)
                        }
                        className={`group relative w-[86px] shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:w-[92px] ${
                          isActive
                            ? 'border-gold-400'
                            : 'border-white/10 hover:border-white/25'
                        }`}
                      >
                        {/* IMAGE THUMB */}

                        {asset.type === 'image' &&
                          asset.image && (
                            <div className="aspect-[1.45] bg-black">
                              <img
                                src={asset.image}
                                alt={asset.title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                draggable={false}
                              />
                            </div>
                          )}

                        {/* VIDEO THUMB */}

                        {asset.type ===
                          'youtube' && (
                          <div className="relative flex aspect-[1.45] items-center justify-center bg-[#111]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-obsidian">
                              <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                            </div>
                          </div>
                        )}

                        {/* TITLE */}

                        <div className="border-t border-white/10 bg-[#0b0d12] px-2 py-2">
                          <p
                            className={`truncate text-[8px] font-semibold ${
                              isActive
                                ? 'text-gold-400'
                                : 'text-neutral-500'
                            }`}
                          >
                            {asset.title}
                          </p>
                        </div>
                      </button>
                    )
                  }
                )}
              </div>

              {/* NEXT */}

              <button
                type="button"
                onClick={nextAsset}
                aria-label="Next"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:border-gold-400/40 hover:bg-gold-400 hover:text-obsidian"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* PROGRESS */}

          <div className="flex h-[2px] w-full">
            {activeAssets.map(
              (asset, index) => (
                <button
                  key={asset.id}
                  type="button"
                  onClick={() =>
                    selectAsset(index)
                  }
                  className="relative h-full flex-1 bg-white/[0.08]"
                >
                  {activeIndex === index && (
                    <motion.span
                      layoutId="progress"
                      className="absolute inset-0 bg-gold-400"
                    />
                  )}
                </button>
              )
            )}
          </div>
        </motion.div>
      </div>

      {/* ================================================================
          FULLSCREEN LIGHTBOX
      ================================================================= */}

      <AnimatePresence>
        {lightboxAsset &&
          lightboxAsset.type === 'image' &&
          lightboxAsset.image && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setLightboxAsset(null)
              }
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6 lg:p-10"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.35,
                }}
                onClick={(event) =>
                  event.stopPropagation()
                }
                className="relative flex max-h-[96vh] w-full max-w-[1900px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080a0e]"
              >
                {/* CLOSE */}

                <button
                  type="button"
                  onClick={() =>
                    setLightboxAsset(null)
                  }
                  className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur-xl transition-all hover:border-gold-400 hover:bg-gold-400 hover:text-obsidian"
                  aria-label="Close fullscreen"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* IMAGE */}

                <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-black p-2 sm:p-5">
                  <img
                    src={lightboxAsset.image}
                    alt={lightboxAsset.title}
                    className="block h-auto max-h-[88vh] w-auto max-w-full object-contain"
                    draggable={false}
                  />
                </div>

                {/* BOTTOM INFO */}

                <div className="flex shrink-0 items-center justify-between gap-4 border-t border-white/10 bg-[#080a0e] px-5 py-4 sm:px-7">
                  <div className="min-w-0">
                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-gold-400">
                      Architectural Plan
                    </p>

                    <h3 className="mt-1 truncate font-serif text-lg font-bold uppercase text-white sm:text-xl">
                      {lightboxAsset.title}
                    </h3>
                  </div>

                  {/* OPEN ORIGINAL */}

                  <a
                    href={lightboxAsset.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-[8px] font-bold uppercase tracking-[0.15em] text-neutral-300 transition-all hover:border-gold-400/40 hover:text-white"
                  >
                    <Maximize2 className="h-3 w-3" />
                    Original Image
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </section>
  )
}