'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Play,
  X,
  ArrowUpRight,
  Maximize2,
  Image as ImageIcon,
} from 'lucide-react'

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
  index,
  onClick,
}: {
  item: GalleryItem
  index: number
  onClick: () => void
}) {
  const imageSrc = item.type === 'video' ? item.poster : item.image

  return (
    <motion.button
      layout
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: 20,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.2),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[1.75rem]
        border
        border-white/[0.08]
        bg-[#06080f]
        text-left
        shadow-2xl
        shadow-black/30
        transition-shadow
        duration-500
        hover:border-gold-500/30
        hover:shadow-gold-500/10
      "
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-[1.07]
            "
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#080b12] text-neutral-500">
            <ImageIcon className="h-7 w-7" />
            <span className="text-xs">Image unavailable</span>
          </div>
        )}

        {/* Cinematic overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
            opacity-90
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gold-500/0
            transition-colors
            duration-500
            group-hover:bg-gold-500/[0.04]
          "
        />

        {/* Top metadata */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span
            className="
              rounded-full
              border
              border-gold-500/30
              bg-black/45
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.23em]
              text-gold-300
              backdrop-blur-md
            "
          >
            {item.category}
          </span>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/40
              text-white
              opacity-0
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >
            <Maximize2 className="h-4 w-4" />
          </span>
        </div>

        {/* Video indicator */}
        {item.type === 'video' && (
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-16
              w-16
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-gold-500/90
              text-obsidian
              shadow-xl
              shadow-gold-500/25
              transition-transform
              duration-500
              group-hover:scale-110
            "
          >
            <Play
              className="ml-1 h-5 w-5"
              fill="currentColor"
            />
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <h3
            className="
              font-serif
              text-xl
              font-bold
              leading-tight
              text-white
              transition-colors
              duration-300
              group-hover:text-gold-300
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-2
              line-clamp-2
              max-w-[95%]
              text-xs
              leading-relaxed
              text-neutral-300
            "
          >
            {item.description}
          </p>

          <div
            className="
              mt-4
              flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-gold-400
              opacity-70
              transition-opacity
              group-hover:opacity-100
            "
          >
            <span>
              {item.type === 'video'
                ? 'Watch Preview'
                : 'View Project'}
            </span>

            <ArrowUpRight className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
    </motion.button>
  )
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return galleryItems
    }

    return galleryItems.filter(
      (item) => item.category === selectedCategory,
    )
  }, [selectedCategory])

  // Lock background scroll while preview is open
  useEffect(() => {
    if (!selectedItem) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedItem])

  // Escape key closes preview
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
      className="
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        py-28
        md:px-12
        md:py-32
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="mb-12 text-center md:mb-14">
        <motion.span
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            inline-block
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-gold-400
            md:text-xs
          "
        >
          06 — Visual Portfolio
        </motion.span>

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-4
            font-serif
            text-4xl
            font-bold
            leading-[1.05]
            text-white
            sm:text-5xl
            md:text-6xl
          "
        >
          Architectural{' '}
          <span className="text-gold-gradient">
            Gallery
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            font-light
            leading-relaxed
            text-neutral-400
            md:text-base
          "
        >
          Explore the visual identity of Muktar Plaza through
          architectural views, commercial spaces, 3D studies,
          floor plans, interiors, and cinematic project media.
        </motion.p>
      </div>

      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}
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
          duration: 0.7,
          delay: 0.2,
        }}
        className="
          mb-12
          flex
          gap-2
          overflow-x-auto
          pb-2
          scrollbar-hide
          md:flex-wrap
          md:justify-center
          md:overflow-visible
        "
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category

          return (
            <button
              key={category}
              type="button"
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`
                relative
                shrink-0
                rounded-full
                border
                px-4
                py-2.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                transition-all
                duration-300
                md:px-5
                md:py-3
                ${
                  isActive
                    ? 'border-gold-500 bg-gold-500 text-obsidian shadow-lg shadow-gold-500/20'
                    : 'border-white/10 bg-white/[0.04] text-neutral-400 hover:border-gold-500/30 hover:bg-white/[0.08] hover:text-white'
                }
              `}
            >
              {category}
            </button>
          )
        })}
      </motion.div>

      {/* =====================================================
          GALLERY GRID
      ===================================================== */}
      {filteredItems.length === 0 ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            py-20
            text-center
          "
        >
          <ImageIcon className="mx-auto mb-4 h-8 w-8 text-neutral-600" />

          <p className="text-sm text-neutral-400">
            No gallery items found.
          </p>
        </motion.div>
      ) : (
        <motion.div
          layout
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* =====================================================
          LIGHTBOX / FULLSCREEN PREVIEW
      ===================================================== */}
      <AnimatePresence>
        {selectedItem && (
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
            onClick={() => setSelectedItem(null)}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/95
              p-3
              backdrop-blur-xl
              sm:p-5
              md:p-8
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                flex
                max-h-[94vh]
                w-full
                max-w-7xl
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#05070d]
                shadow-2xl
                md:rounded-[2rem]
                lg:flex-row
              "
            >
              {/* Close */}
              <button
                type="button"
                aria-label="Close preview"
                onClick={() =>
                  setSelectedItem(null)
                }
                className="
                  absolute
                  right-3
                  top-3
                  z-30
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  bg-black/70
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-gold-500
                  hover:bg-gold-500
                  hover:text-obsidian
                  md:right-5
                  md:top-5
                "
              >
                <X className="h-5 w-5" />
              </button>

              {/* =================================================
                  MEDIA
              ================================================= */}
              <div
                className="
                  flex
                  min-h-[260px]
                  w-full
                  items-center
                  justify-center
                  bg-black
                  md:min-h-[400px]
                  lg:min-h-[680px]
                  lg:w-[72%]
                "
              >
                {selectedItem.type === 'video' ? (
                  <video
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    poster={selectedItem.poster}
                    className="
                      max-h-[70vh]
                      w-full
                      object-contain
                      lg:max-h-[82vh]
                    "
                  >
                    <source
                      src={selectedItem.src}
                      type="video/mp4"
                    />
                    Your browser does not support the
                    video tag.
                  </video>
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="
                      max-h-[70vh]
                      w-full
                      object-contain
                      lg:max-h-[82vh]
                    "
                  />
                )}
              </div>

              {/* =================================================
                  DETAILS
              ================================================= */}
              <div
                className="
                  flex
                  w-full
                  flex-col
                  justify-center
                  overflow-y-auto
                  border-t
                  border-white/10
                  bg-[#06080f]
                  p-6
                  sm:p-8
                  lg:w-[28%]
                  lg:border-l
                  lg:border-t-0
                  lg:p-10
                "
              >
                <div>
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-gold-500/25
                      bg-gold-500/[0.06]
                      px-3
                      py-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-gold-400
                    "
                  >
                    {selectedItem.category}
                  </span>

                  <h3
                    className="
                      mt-5
                      font-serif
                      text-2xl
                      font-bold
                      leading-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {selectedItem.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-sm
                      font-light
                      leading-7
                      text-neutral-400
                    "
                  >
                    {selectedItem.description}
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedItem(null)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      py-3.5
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-white
                      transition-all
                      duration-300
                      hover:border-gold-500/30
                      hover:bg-white/[0.08]
                    "
                  >
                    Close Preview
                    <X className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href="#contact"
                    onClick={() =>
                      setSelectedItem(null)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-gold-500
                      py-3.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-obsidian
                      transition-all
                      duration-300
                      hover:bg-gold-400
                      hover:shadow-lg
                      hover:shadow-gold-500/20
                    "
                  >
                    Request Information
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}