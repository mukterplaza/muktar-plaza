'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  Layers3,
  Maximize2,
} from 'lucide-react'

const experienceItems = [
  {
    number: '01',
    icon: Building2,
    title: 'Arrival & Entrance',
    description:
      'Experience the project from the main approach to the entrance sequence, with a focus on facade presence, access, and the overall arrival experience.',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Commercial Spaces',
    description:
      'Explore the commercial levels through the 3D experience and see how frontage, circulation, and usable space come together for everyday business.',
  },
  {
    number: '03',
    icon: Maximize2,
    title: 'Upper-Level Perspective',
    description:
      'Move upward through the project to experience its changing proportions, architectural form, and relationship with the surrounding city.',
  },
]

export default function ArchitectureExperience() {
  return (
    <section
      id="architecture"
      className="
        relative
        py-28
        md:py-32
        px-6
        md:px-12
        max-w-7xl
        mx-auto
        z-10
      "
    >
      {/* =====================================================
          SECTION INTRO
      ===================================================== */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">

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
            md:text-xs
            uppercase
            tracking-[0.3em]
            text-[#E2C45F]
            font-semibold
          "
        >
          02 — 3D Architecture Experience
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
            font-serif
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-bold
            text-white
            mt-4
            leading-[1.05]
          "
        >
          Experience Muktar Plaza
          <br />

          <span className="text-gold-gradient">
            From Every Perspective
          </span>
        </motion.h2>

        <motion.p
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
            delay: 0.2,
          }}
          className="
            mt-5
            text-neutral-300
            font-light
            text-base
            md:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          Explore the architectural form, commercial spaces, and
          overall project experience through our immersive visual
          presentation.
        </motion.p>
      </div>

      {/* =====================================================
          EXPERIENCE CARDS
      ===================================================== */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
          md:gap-6
        "
      >
        {experienceItems.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                glass-panel
                border
                border-white/5
                p-7
                md:p-8
                transition-all
                duration-500
                hover:border-[#E2C45F]/40
                hover:-translate-y-1
              "
            >
              {/* Background Glow */}
              <div
                className="
                  absolute
                  -top-10
                  -right-10
                  w-32
                  h-32
                  rounded-full
                  bg-[#E2C45F]/10
                  blur-3xl
                  opacity-60
                  group-hover:opacity-100
                  group-hover:bg-[#E2C45F]/15
                  transition-all
                  duration-500
                "
              />

              {/* Number + Icon */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-start
                  justify-between
                  mb-8
                "
              >
                <span
                  className="
                    font-serif
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-[#E2C45F]
                  "
                >
                  {item.number}
                </span>

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-[#E2C45F]
                    group-hover:bg-[#E2C45F]/10
                    group-hover:border-[#E2C45F]/30
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="
                    font-serif
                    text-xl
                    md:text-2xl
                    font-bold
                    text-white
                    mb-3
                    group-hover:text-[#E2C45F]
                    transition-colors
                    duration-300
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-sm
                    text-neutral-400
                    font-light
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  relative
                  z-10
                  mt-8
                  pt-5
                  border-t
                  border-white/10
                  flex
                  items-center
                  justify-between
                  text-[10px]
                  uppercase
                  tracking-[0.16em]
                  text-neutral-500
                "
              >
                <span>
                  Muktar Plaza
                </span>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    text-[#E2C45F]
                    opacity-50
                    group-hover:opacity-100
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* =====================================================
          BOTTOM EXPERIENCE NOTE
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="
          mt-8
          flex
          flex-col
          sm:flex-row
          items-start
          sm:items-center
          justify-between
          gap-4
          px-5
          md:px-6
          py-4
          rounded-xl
          border
          border-white/10
          bg-white/[0.02]
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              w-2
              h-2
              rounded-full
              bg-[#E2C45F]
              shadow-[0_0_12px_rgba(226,196,95,0.6)]
            "
          />

          <p
            className="
              text-xs
              md:text-sm
              text-neutral-400
              font-light
            "
          >
            Scroll through the project to discover its architectural
            character and spatial experience.
          </p>
        </div>

        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#E2C45F]
            whitespace-nowrap
          "
        >
          3D Experience
        </span>
      </motion.div>
    </section>
  )
}