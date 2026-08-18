'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  Compass,
  Shield,
  Award,
} from 'lucide-react'

export default function ProjectIntro() {
  return (
    <section
      id="about"
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* =====================================================
            LEFT COLUMN — PROJECT INTRO
        ===================================================== */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Section Label */}
            <span
              className="
                text-[10px]
                md:text-xs
                uppercase
                tracking-[0.3em]
                text-[#E2C45F]
                font-semibold
              "
            >
              01 — Why Muktar Plaza
            </span>

            {/* Heading */}
            <h2
              className="
                font-serif
                text-4xl
                md:text-5xl
                font-bold
                text-white
                mt-4
                leading-[1.1]
              "
            >
              Designed for Business. 
              <br />

              <span className="text-gold-gradient">
                Planned for Living.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                text-neutral-300
                leading-relaxed
                font-light
                text-base
                md:text-lg
                max-w-xl
              "
            >
              Muktar Plaza is a thoughtfully planned commercial and residential development at Rayerbag, Jatrabari — bringing together strategic connectivity, modern architecture, practical space planning, and everyday convenience.
            </p>

            <p
              className="
                mt-4
                text-neutral-400
                leading-relaxed
                font-light
                text-sm
                md:text-base
                max-w-xl
              "
            >
              
            </p>

            {/* Small Trust Line */}
            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.16em]
                text-neutral-400
              "
            >
              <span
                className="
                  block
                  w-8
                  h-px
                  bg-[#E2C45F]/70
                "
              />

              <span>
                Rayerbag · Jatrabari · Dhaka
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT COLUMN — PROJECT HIGHLIGHTS
        ===================================================== */}
        <div
          className="
            lg:col-span-7
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-5
          "
        >

          {/* =================================================
              CARD 01 — ARCHITECTURE
          ================================================= */}
          <motion.div
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
              duration: 0.6,
              delay: 0.1,
            }}
            className="
              p-7
              md:p-8
              rounded-2xl
              glass-panel
              border
              border-white/5
              hover:border-[#E2C45F]/40
              transition-all
              duration-300
              group
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#E2C45F]/10
                border
                border-[#E2C45F]/30
                flex
                items-center
                justify-center
                text-[#E2C45F]
                mb-6
                group-hover:scale-110
                group-hover:bg-[#E2C45F]/15
                transition-all
                duration-300
              "
            >
              <Building2 className="w-6 h-6" />
            </div>

            <h3
              className="
                font-serif
                text-xl
                font-bold
                text-white
                mb-2
                group-hover:text-[#E2C45F]
                transition-colors
              "
            >
              Strategic Highway Location
            </h3>

            <p
              className="
                text-sm
                text-neutral-400
                font-light
                leading-relaxed
              "
            >
              Direct connectivity with Dhaka–Chittagong Highway and surrounding commercial zones.
            </p>
          </motion.div>

          {/* =================================================
              CARD 02 — SPACE PLANNING
          ================================================= */}
          <motion.div
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              p-7
              md:p-8
              rounded-2xl
              glass-panel
              border
              border-white/5
              hover:border-[#E2C45F]/40
              transition-all
              duration-300
              group
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#E2C45F]/10
                border
                border-[#E2C45F]/30
                flex
                items-center
                justify-center
                text-[#E2C45F]
                mb-6
                group-hover:scale-110
                group-hover:bg-[#E2C45F]/15
                transition-all
                duration-300
              "
            >
              <Compass className="w-6 h-6" />
            </div>

            <h3
              className="
                font-serif
                text-xl
                font-bold
                text-white
                mb-2
                group-hover:text-[#E2C45F]
                transition-colors
              "
            >
              Commercial Visibility
            </h3>

            <p
              className="
                text-sm
                text-neutral-400
                font-light
                leading-relaxed
              "
            >
              A location designed to support retail, business and customer accessibility.
            </p>
          </motion.div>

          {/* =================================================
              CARD 03 — ENGINEERING & SAFETY
          ================================================= */}
          <motion.div
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
              duration: 0.6,
              delay: 0.3,
            }}
            className="
              p-7
              md:p-8
              rounded-2xl
              glass-panel
              border
              border-white/5
              hover:border-[#E2C45F]/40
              transition-all
              duration-300
              group
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#E2C45F]/10
                border
                border-[#E2C45F]/30
                flex
                items-center
                justify-center
                text-[#E2C45F]
                mb-6
                group-hover:scale-110
                group-hover:bg-[#E2C45F]/15
                transition-all
                duration-300
              "
            >
              <Shield className="w-6 h-6" />
            </div>

            <h3
              className="
                font-serif
                text-xl
                font-bold
                text-white
                mb-2
                group-hover:text-[#E2C45F]
                transition-colors
              "
            >
              Thoughtful Planning
            </h3>

            <p
              className="
                text-sm
                text-neutral-400
                font-light
                leading-relaxed
              "
            >
              Well-organized circulation, access and space planning for practical everyday use.
            </p>
          </motion.div>

          {/* =================================================
              CARD 04 — LOCATION & VALUE
          ================================================= */}
          <motion.div
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
              duration: 0.6,
              delay: 0.4,
            }}
            className="
              p-7
              md:p-8
              rounded-2xl
              glass-panel
              border
              border-white/5
              hover:border-[#E2C45F]/40
              transition-all
              duration-300
              group
            "
          >
            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#E2C45F]/10
                border
                border-[#E2C45F]/30
                flex
                items-center
                justify-center
                text-[#E2C45F]
                mb-6
                group-hover:scale-110
                group-hover:bg-[#E2C45F]/15
                transition-all
                duration-300
              "
            >
              <Award className="w-6 h-6" />
            </div>

            <h3
              className="
                font-serif
                text-xl
                font-bold
                text-white
                mb-2
                group-hover:text-[#E2C45F]
                transition-colors
              "
            >
              Engineering & Safety
            </h3>

            <p
              className="
                text-sm
                text-neutral-400
                font-light
                leading-relaxed
              "
            >
              Structural, fire-safety and building-system planning based on applicable standards.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}