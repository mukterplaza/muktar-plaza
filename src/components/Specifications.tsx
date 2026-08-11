'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Building2,
  Zap,
  Layers3,
  ArrowUpRight,
} from 'lucide-react'

const specsData = [
  {
    number: '01',
    icon: Building2,
    category: 'Structural Specifications',
    intro:
      'A structural system planned around the approved architectural requirements, site conditions, and applicable building standards.',
    items: [
      {
        label: 'Foundation',
        detail:
          'RCC foundation and piling system designed according to site investigation, soil conditions, structural requirements, and approved engineering design.',
      },
      {
        label: 'Superstructure',
        detail:
          'Reinforced concrete structural system developed in accordance with applicable BNBC requirements and project-specific engineering calculations.',
      },
      {
        label: 'Seismic Design',
        detail:
          'Structural design considers applicable seismic provisions and project-specific analysis to support safe performance under design earthquake conditions.',
      },
    ],
  },
  {
    number: '02',
    icon: Zap,
    category: 'Electrical & MEP',
    intro:
      'Building services planned to support efficient commercial operation, safety, comfort, and reliable day-to-day performance.',
    items: [
      {
        label: 'Electrical Infrastructure',
        detail:
          'Electrical distribution and building power infrastructure planned according to the project load requirements and applicable standards.',
      },
      {
        label: 'Backup Power',
        detail:
          'Backup power provisions planned to support essential building operations and selected common facilities during power interruptions.',
      },
      {
        label: 'HVAC Provision',
        detail:
          'Air-conditioning provisions can be integrated according to individual commercial requirements, floor planning, and approved MEP design.',
      },
    ],
  },
  {
    number: '03',
    icon: Layers3,
    category: 'Finishing & Building Systems',
    intro:
      'Architectural finishes and building systems are selected with durability, appearance, maintenance, and commercial usability in mind.',
    items: [
      {
        label: 'Exterior Treatment',
        detail:
          'Contemporary facade treatment designed to create a distinctive commercial identity while balancing aesthetics, performance, and maintenance.',
      },
      {
        label: 'Common Areas',
        detail:
          'Entrance, lobby, circulation, and shared spaces are planned with a premium architectural language and practical commercial use in mind.',
      },
      {
        label: 'Security & CCTV',
        detail:
          'Security and surveillance provisions planned for key entrances, common areas, circulation zones, and other relevant building access points.',
      },
    ],
  },
]

export default function Specifications() {
  return (
    <section
      id="specs"
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
          04 — Engineering Standards
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
          Technical
          <br />

          <span className="text-gold-gradient">
            Specifications
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-5
            text-neutral-400
            text-sm
            md:text-base
            font-light
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          Explore the core engineering and building-system considerations
          behind Muktar Plaza, presented with clarity and technical
          transparency.
        </motion.p>
      </div>

      {/* =====================================================
          SPECIFICATION CARDS
      ===================================================== */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-5
          md:gap-6
        "
      >
        {specsData.map((specGroup, idx) => {
          const Icon = specGroup.icon

          return (
            <motion.article
              key={specGroup.category}
              initial={{
                opacity: 0,
                y: 35,
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
                delay: idx * 0.1,
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
                hover:border-[#E2C45F]/35
                hover:-translate-y-1
                transition-all
                duration-500
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  rounded-full
                  bg-[#E2C45F]/10
                  blur-3xl
                  opacity-40
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
              />

              {/* Card Header */}
              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                    pb-6
                    border-b
                    border-white/10
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        w-11
                        h-11
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
                        transition-all
                        duration-300
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span
                        className="
                          block
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-neutral-500
                          mb-1
                        "
                      >
                        Technical
                      </span>

                      <h3
                        className="
                          font-serif
                          text-lg
                          md:text-xl
                          font-bold
                          text-white
                          group-hover:text-[#E2C45F]
                          transition-colors
                          duration-300
                        "
                      >
                        {specGroup.category}
                      </h3>
                    </div>
                  </div>

                  <span
                    className="
                      font-serif
                      text-2xl
                      font-bold
                      text-white/10
                      group-hover:text-[#E2C45F]/30
                      transition-colors
                    "
                  >
                    {specGroup.number}
                  </span>
                </div>

                {/* Intro */}
                <p
                  className="
                    text-xs
                    md:text-sm
                    text-neutral-400
                    font-light
                    leading-relaxed
                    mt-6
                  "
                >
                  {specGroup.intro}
                </p>
              </div>

              {/* Specification Items */}
              <div className="relative z-10 mt-7 space-y-6">
                {specGroup.items.map((item, itemIndex) => (
                  <div
                    key={item.label}
                    className="
                      relative
                      pl-7
                    "
                  >
                    <CheckCircle2
                      className="
                        absolute
                        left-0
                        top-0.5
                        w-4
                        h-4
                        text-[#E2C45F]
                      "
                    />

                    <div className="flex items-center justify-between gap-3">
                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-white
                        "
                      >
                        {item.label}
                      </h4>

                      <span
                        className="
                          text-[9px]
                          text-neutral-600
                          font-mono
                        "
                      >
                        0{itemIndex + 1}
                      </span>
                    </div>

                    <p
                      className="
                        text-xs
                        text-neutral-500
                        font-light
                        mt-1.5
                        leading-relaxed
                      "
                    >
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom */}
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
                "
              >
                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-neutral-600
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
            </motion.article>
          )
        })}
      </div>

      {/* =====================================================
          TECHNICAL NOTE
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
          rounded-xl
          border
          border-[#E2C45F]/15
          bg-[#E2C45F]/[0.03]
          px-5
          py-4
          flex
          items-start
          gap-3
        "
      >
        <span
          className="
            mt-1.5
            w-1.5
            h-1.5
            rounded-full
            bg-[#E2C45F]
            shrink-0
          "
        />

        <p
          className="
            text-[11px]
            md:text-xs
            text-neutral-500
            font-light
            leading-relaxed
          "
        >
          Technical descriptions shown here are presented for project
          overview purposes. Final structural, electrical, MEP,
          material, and finishing specifications remain subject to
          approved drawings, engineering calculations, site conditions,
          and the final development plan.
        </p>
      </motion.div>
    </section>
  )
}