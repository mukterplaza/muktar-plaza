'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  ChevronDown,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-between
        pt-32
        pb-16
        px-6
        md:px-12
        max-w-7xl
        mx-auto
        z-10
        pointer-events-none
      "
    >
      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div
        className="
          flex
          flex-col
          items-start
          max-w-3xl
          pointer-events-auto
        "
      >
        {/* Eyebrow */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            inline-flex
            items-center
            gap-2
            px-3
            py-1.5
            rounded-full
            bg-[#E2C45F]/10
            border
            border-[#E2C45F]/30
            backdrop-blur-md
            mb-6
          "
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E2C45F]" />

          <span
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.18em]
              text-[#E2C45F]
              font-semibold
            "
          >
            A New Commercial Address
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            font-serif
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-tight
            text-white
            leading-[1.02]
          "
        >
          MUKTAR
          <br />

          <span className="text-gold-gradient">
            PLAZA
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-6
            text-base
            sm:text-lg
            md:text-xl
            text-neutral-300
            font-light
            leading-relaxed
            max-w-xl
          "
        >
          A thoughtfully planned commercial development
          designed for high-visibility retail, business,
          and long-term value at Rayerbag, Jatrabari.
        </motion.p>

        {/* =================================================
            CTA BUTTONS
        ================================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="
            mt-8
            flex
            flex-wrap
            gap-3
            sm:gap-4
          "
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="
              group
              relative
              overflow-hidden
              px-6
              sm:px-8
              py-4
              rounded-full
              bg-[#E2C45F]
              text-[#080A0F]
              font-bold
              tracking-[0.08em]
              uppercase
              text-[10px]
              sm:text-xs
              shadow-xl
              shadow-[#E2C45F]/20
              hover:bg-[#F0D36D]
              hover:shadow-[#E2C45F]/40
              hover:-translate-y-0.5
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {/* Shine */}
            <span
              className="
                absolute
                inset-0
                -translate-x-full
                group-hover:translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform
                duration-700
              "
            />

            <span className="relative z-10">
              Request Price & Floor Plan
            </span>

            <ArrowUpRight
              className="
                relative
                z-10
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>

          {/* Secondary CTA */}
          <a
            href="#architecture"
            className="
              group
              px-6
              sm:px-8
              py-4
              rounded-full
              bg-white/5
              border
              border-white/15
              backdrop-blur-md
              text-white
              font-semibold
              tracking-[0.08em]
              uppercase
              text-[10px]
              sm:text-xs
              hover:border-[#E2C45F]/50
              hover:bg-white/10
              hover:text-[#E2C45F]
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span>
              Explore 3D Experience
            </span>

            <ArrowUpRight
              className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          HERO BOTTOM INFORMATION
      ===================================================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="
          flex
          flex-col
          md:flex-row
          items-start
          md:items-end
          justify-between
          gap-8
          pt-12
          mt-12
          border-t
          border-white/10
          pointer-events-auto
        "
      >
        {/* Project Highlights */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-x-8
            gap-y-6
            w-full
            md:w-auto
          "
        >
          {/* Highlight 01 */}
          <div>
            <p
              className="
                text-lg
                sm:text-2xl
                lg:text-3xl
                font-serif
                font-bold
                text-[#E2C45F]
              "
            >
              N1
            </p>

            <p
              className="
                text-[9px]
                sm:text-xs
                uppercase
                tracking-[0.12em]
                text-neutral-400
                mt-1
              "
            >
              Highway Corridor
            </p>
          </div>

          {/* Highlight 02 */}
          <div>
            <p
              className="
                text-lg
                sm:text-2xl
                lg:text-3xl
                font-serif
                font-bold
                text-[#E2C45F]
              "
            >
              Commercial
            </p>

            <p
              className="
                text-[9px]
                sm:text-xs
                uppercase
                tracking-[0.12em]
                text-neutral-400
                mt-1
              "
            >
              Development
            </p>
          </div>

          {/* Highlight 03 */}
          <div className="col-span-2 sm:col-span-1">
            <p
              className="
                text-lg
                sm:text-2xl
                lg:text-3xl
                font-serif
                font-bold
                text-[#E2C45F]
              "
            >
              Rayerbag
            </p>

            <p
              className="
                text-[9px]
                sm:text-xs
                uppercase
                tracking-[0.12em]
                text-neutral-400
                mt-1
              "
            >
              Jatrabari, Dhaka
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="
            flex
            items-center
            gap-3
            text-neutral-400
            text-[10px]
            sm:text-xs
            tracking-[0.18em]
            uppercase
            animate-bounce
          "
        >
          <span>
            Scroll to explore
          </span>

          <ChevronDown
            className="
              w-4
              h-4
              text-[#E2C45F]
            "
          />
        </div>
      </motion.div>
    </section>
  )
}