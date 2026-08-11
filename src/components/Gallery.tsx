'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'

type GalleryItem = {
  id: string
  title: string
  category: string
  image?: string
  description: string
  type?: 'image' | 'video'
  src?: string
  poster?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 'exterior-gate',
    title: 'Grand Entrance Perspective',
    category: 'EXTERIOR',
    image: '/frames/8.jpg',
    description:
      'A premium exterior approach view showcasing the sculpted entrance and luxurious arrival sequence.',
  },
  {
    id: 'retail-courtyard',
    title: 'Commercial Forecourt',
    category: 'COMMERCIAL',
    image: '/frames/9.jpg.jpeg',
    description:
      'Showcase of the retail frontage and high-street orientation for the Muktar Plaza commercial zones.',
  },
  {
    id: 'tower-elevation',
    title: 'Architectural Elevation',
    category: '3D VIEWS',
    image: '/frames/1.jpg.jpeg',
    description:
      'A crisp 3D elevation that highlights the building’s sculpted form and facade materiality.',
  },
  {
    id: 'skyline-rooftop',
    title: 'Rooftop Aerial View',
    category: '3D VIEWS',
    image: '/frames/2.jpg.jpeg',
    description:
      'Aerial rooftop perspective with the helipad and landscaped terrace areas.',
  },
  {
    id: 'full-site',
    title: 'Full Site Aerial',
    category: '3D VIEWS',
    image: '/frames/3.jpg.jpeg',
    description:
      'An elevated study of the entire project showing the site arrangement and building context.',
  },
  {
    id: 'facade-study',
    title: 'Facade Composition',
    category: '3D VIEWS',
    image: '/frames/3 (1).png',
    description:
      'Detailed facade study of Muktar Plaza’s architectural language and glazing composition.',
  },
  {
    id: 'retail-entry',
    title: 'Retail Gateway',
    category: 'COMMERCIAL',
    image: '/frames/4.jpg',
    description:
      'Premium retail access and shop frontage that defines Muktar Plaza’s commercial offering.',
  },
  {
    id: 'lobby-approach',
    title: 'Lobby Approach',
    category: 'INTERIOR',
    image: '/frames/5.jpg',
    description:
      'Interior-facing entrance perspective that connects the retail lobby and landscaped courtyard.',
  },
  {
    id: 'residential-approach',
    title: 'Residential Approach',
    category: 'RESIDENTIAL',
    image: '/frames/6.jpg',
    description:
      'Residential arrival and facade view with lush planting and elegant balconies.',
  },
  {
    id: 'site-entry',
    title: 'Main Site Entry',
    category: 'EXTERIOR',
    image: '/frames/7.jpg',
    description:
      'A refined exterior entry presentation showing the gated arrival court and landscape experience.',
  },
  {
    id: 'overview-plan',
    title: '3D Top View',
    category: 'FLOOR PLANS',
    image: '/frames/12.jpg',
    description:
      'A 3D top view that blends plan and aerial design, revealing the project’s architectural geometry.',
  },
  {
    id: 'project-video-1',
    title: 'Project Preview',
    category: 'VIDEOS',
    type: 'video',
    src: '/frames/Untitled design (2).mp4',
    poster: '/frames/1.jpg.jpeg',
    description:
      'Cinematic preview of the Muktar Plaza architecture and site experience.',
  },
  {
    id: 'project-video-2',
    title: 'Design Walkthrough',
    category: 'VIDEOS',
    type: 'video',
    src: '/frames/Untitled design (12).mp4',
    poster: '/frames/2.jpg.jpeg',
    description:
      'A second cinematic walkthrough that highlights the project’s design intent and material palette.',
  },
]

const categories = [
  'ALL',
  'EXTERIOR',
  'INTERIOR',
  'RESIDENTIAL',
  'COMMERCIAL',
  '3D VIEWS',
  'FLOOR PLANS',
  'VIDEOS',
]

function GalleryCard({
  item,
  onClick,
}: {
  item: GalleryItem
  onClick: () => void
}) {
  const imageSrc = item.type === 'video' ? item.poster : item.image

  return (
    <motion.button
      layout
      type="button"
      onClick={onClick}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#06080f] text-left shadow-2xl shadow-black/40"
    >
      {/* Fixed aspect ratio prevents unwanted black areas */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#080b12] text-sm text-neutral-500">
            Image unavailable
          </div>
        )}

        {item.type === 'video' && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/90 text-obsidian shadow-xl shadow-gold-500/30 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-5 w-5" fill="currentColor" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="inline-flex rounded-full border border-gold-500/30 bg-black/50 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-gold-300 backdrop-blur-md">
            {item.category}
          </span>

          <h3 className="mt-3 line-clamp-2 font-serif text-xl font-bold leading-tight">
            {item.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-300">
            {item.description}
          </p>
        </div>
      </div>
    </motion.button>
  )
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return galleryItems
    }

    return galleryItems.filter(
      (item) => item.category === selectedCategory,
    )
  }, [selectedCategory])

  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!selectedItem) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedItem])

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section
      id="gallery"
      className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12"
    >
      {/* Header */}
      <div className="mb-14 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
        >
          06 — Visual Portfolio
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl"
        >
          Architectural{' '}
          <span className="text-gold-gradient">Gallery</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neutral-300"
        >
          A premium Muktar Plaza portfolio experience featuring curated visuals,
          architectural views, and cinematic media.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 ${
              selectedCategory === category
                ? 'border-gold-500 bg-gold-500 text-obsidian shadow-lg shadow-gold-500/20'
                : 'border-white/10 bg-white/5 text-neutral-400 hover:border-gold-500/30 hover:bg-white/10 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Balanced Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 py-20 text-center">
          <p className="text-neutral-400">No gallery items found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-10"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-7xl overflow-hidden rounded-[2rem] border border-gold-500/30 bg-[#05070d] shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close preview"
                onClick={() => setSelectedItem(null)}
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white transition hover:bg-gold-500 hover:text-obsidian"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex max-h-[92vh] flex-col overflow-y-auto lg:flex-row">
                {/* Media */}
                <div className="flex min-h-[280px] w-full items-center justify-center bg-black lg:min-h-[650px] lg:w-3/4">
                  {selectedItem.type === 'video' ? (
                    <video
                      controls
                      autoPlay
                      preload="metadata"
                      poster={selectedItem.poster}
                      className="max-h-[80vh] w-full object-contain"
                    >
                      <source src={selectedItem.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="max-h-[80vh] w-full object-contain"
                    />
                  )}
                </div>

                {/* Details */}
                <div className="flex w-full flex-col justify-center border-t border-white/10 bg-[#06080f] p-8 lg:w-1/4 lg:border-l lg:border-t-0 lg:p-10">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold-400">
                    {selectedItem.category}
                  </p>

                  <h3 className="font-serif text-3xl font-bold text-white">
                    {selectedItem.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-neutral-300">
                    {selectedItem.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="mt-8 w-full rounded-full border border-white/10 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
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