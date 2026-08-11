'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Wifi,
  Car,
  Flame,
  Cpu,
  ArrowUpRight,
} from 'lucide-react'

const featuresList = [
  {
    icon: HighSpeedElevator,
    number: '01',
    title: 'Vertical Mobility',
    desc: 'Passenger lift provisions designed to support smooth movement between commercial levels and everyday building circulation.',
  },
  {
    icon: Flame,
    number: '02',
    title: 'Fire Safety Planning',
    desc: 'Fire-safety provisions planned around detection, emergency movement, firefighting access, and safer building operation.',
  },
  {
    icon: Car,
    number: '03',
    title: 'Parking & Access',
    desc: 'Planned vehicle access and parking facilities designed to make arrival, movement, and daily commercial use more convenient.',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Power Infrastructure',
    desc: 'Commercial-grade electrical infrastructure planned to support reliable day-to-day operation across the development.',
  },
  {
    icon: Shield,
    number: '05',
    title: 'Security & Monitoring',
    desc: 'Security-focused provisions for common areas and access points to help create a safer environment for businesses and visitors.',
  },
  {
    icon: Wifi,
    number: '06',
    title: 'Connectivity Ready',
    desc: 'Infrastructure planned with modern business connectivity in mind, helping commercial occupants stay connected and productive.',
  },
]

function HighSpeedElevator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m4 4l-4-4"
      />
    </svg>
  )
}

export default function Features() {
  return (
    <section
      id="features"
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
          SECTION HEADER
      ===================================================== */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          mb-14
          md:mb-16
          gap-6
        "
      >
        <div className="max-w-3xl">
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
            03 — Infrastructure & Amenities
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
            Designed Around
            <br />

            <span className="text-gold-gradient">
              The Way Business Works
            </span>
          </motion.h2>
        </div>

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
            text-neutral-400
            font-light
            text-sm
            md:text-base
            leading-relaxed
            max-w-md
          "
        >
          From access and vertical circulation to safety, power,
          security, and connectivity, the project is planned around
          the practical needs of a modern commercial environment.
        </motion.p>
      </div>

      {/* =====================================================
          FEATURE GRID
      ===================================================== */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          md:gap-6
        "
      >
        {featuresList.map((feat, idx) => {
          const Icon = feat.icon

          return (
            <motion.div
              key={feat.title}
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.65,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                group
                relative
                overflow-hidden
                p-7
                md:p-8
                rounded-2xl
                glass-panel
                border
                border-white/5
                hover:border-[#E2C45F]/35
                hover:bg-obsidian/60
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >
              {/* Background Glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-36
                  h-36
                  rounded-full
                  bg-[#E2C45F]/10
                  blur-3xl
                  opacity-40
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* Top Row */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-start
                  justify-between
                  mb-7
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-[#E2C45F]/10
                    border
                    border-[#E2C45F]/25
                    flex
                    items-center
                    justify-center
                    text-[#E2C45F]
                    group-hover:bg-[#E2C45F]/15
                    group-hover:border-[#E2C45F]/40
                    group-hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="w-5 h-5" />
                </div>

                <span
                  className="
                    font-serif
                    text-2xl
                    font-bold
                    text-white/15
                    group-hover:text-[#E2C45F]/40
                    transition-colors
                    duration-300
                  "
                >
                  {feat.number}
                </span>
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
                  {feat.title}
                </h3>

                <p
                  className="
                    text-neutral-400
                    text-sm
                    font-light
                    leading-relaxed
                  "
                >
                  {feat.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div
                className="
                  relative
                  z-10
                  mt-7
                  pt-4
                  border-t
                  border-white/10
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-neutral-500
                  "
                >
                  Muktar Plaza
                </span>

                <ArrowUpRight
                  className="
                    w-4
                    h-4
                    text-[#E2C45F]
                    opacity-40
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
          BOTTOM NOTE
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className="
          mt-8
          flex
          items-center
          gap-3
          text-xs
          text-neutral-500
          font-light
        "
      >
        <span
          className="
            w-7
            h-px
            bg-[#E2C45F]/60
          "
        />

        <span>
          Final specifications and facilities are subject to the
          approved project design and development plan.
        </span>
      </motion.div>
    </section>
  )
}