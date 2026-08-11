'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Features', href: '#features' },
  { name: 'Specifications', href: '#specs' },
  { name: 'Floor Plans', href: '#floorplans' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
]

interface HeaderProps {
  visible?: boolean
}

export default function Header({ visible = true }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Header scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  if (!visible) return null

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[100]
          transition-all
          duration-500
          ${
            isScrolled
              ? `
                py-3
                bg-[#080A0F]/92
                backdrop-blur-xl
                border-b
                border-white/10
                shadow-2xl
              `
              : `
                py-5
                bg-[#080A0F]/35
                backdrop-blur-md
              `
          }
        `}
      >
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            xl:px-12
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <a
            href="#"
            aria-label="Muktar Plaza Home"
            className="
              flex-shrink-0
              flex
              items-center
              group
            "
          >
            <div
              className="
                relative
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-xl
                p-[1px]
                bg-gradient-to-br
                from-[#F0D36D]
                via-[#E2C45F]
                to-[#B99532]
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:shadow-lg
                group-hover:shadow-[#E2C45F]/20
              "
            >
              <div
                className="
                  w-full
                  h-full
                  rounded-[10px]
                  bg-[#080A0F]
                  flex
                  items-center
                  justify-center
                "
              >
                <span
                  className="
                    font-serif
                    text-[#E2C45F]
                    font-bold
                    text-xl
                    sm:text-[22px]
                    leading-none
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                >
                  M
                </span>
              </div>
            </div>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <nav
            className="
              hidden
              lg:flex
              flex-1
              items-center
              justify-center
              gap-5
              xl:gap-7
              2xl:gap-9
            "
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  relative
                  whitespace-nowrap
                  py-2
                  text-[11px]
                  xl:text-xs
                  uppercase
                  tracking-[0.14em]
                  text-neutral-300
                  hover:text-[#E2C45F]
                  transition-colors
                  duration-300
                  group
                "
              >
                {item.name}

                {/* Underline */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-0
                    h-[1px]
                    bg-[#E2C45F]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* =================================================
              DESKTOP BOOK SPACE BUTTON
          ================================================= */}
          <div className="hidden lg:flex flex-shrink-0">
            <a
              href="#contact"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-2
                min-w-[142px]
                h-[52px]
                px-6
                rounded-full
                overflow-hidden

                bg-[#E2C45F]
                text-[#080A0F]

                text-[11px]
                font-bold
                uppercase
                tracking-[0.12em]

                shadow-[0_8px_30px_rgba(226,196,95,0.22)]

                hover:bg-[#F0D36D]
                hover:shadow-[0_10px_35px_rgba(226,196,95,0.38)]
                hover:-translate-y-[1px]

                transition-all
                duration-300
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
                  via-white/35
                  to-transparent
                  transition-transform
                  duration-700
                "
              />

              <span className="relative z-10 whitespace-nowrap">
                Book Space
              </span>

              <ArrowUpRight
                className="
                  relative
                  z-10
                  w-4
                  h-4
                  stroke-[2]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="
              lg:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/5
              text-white
              hover:text-[#E2C45F]
              hover:border-[#E2C45F]/40
              transition-all
              duration-300
            "
            aria-label={
              mobileMenuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
            animate={{
              opacity: 1,
              clipPath: 'inset(0 0 0% 0)',
            }}
            exit={{
              opacity: 0,
              clipPath: 'inset(0 0 100% 0)',
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-0
              z-[90]
              lg:hidden
              bg-[#080A0F]/98
              backdrop-blur-2xl
            "
          >
            <div
              className="
                h-full
                flex
                flex-col
                justify-between
                px-6
                sm:px-8
                pt-28
                pb-8
                overflow-y-auto
              "
            >
              {/* =================================================
                  MOBILE LINKS
              ================================================= */}
              <nav className="flex flex-col">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 + idx * 0.05,
                      duration: 0.4,
                    }}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      py-4
                      border-b
                      border-white/10
                      font-serif
                      text-[25px]
                      sm:text-3xl
                      text-neutral-200
                      hover:text-[#E2C45F]
                      transition-colors
                    "
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      className="
                        w-5
                        h-5
                        opacity-30
                        group-hover:opacity-100
                        group-hover:text-[#E2C45F]
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-all
                        duration-300
                      "
                    />
                  </motion.a>
                ))}
              </nav>

              {/* =================================================
                  MOBILE BOOK SPACE BUTTON
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
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="
                  pt-7
                  mt-8
                  border-t
                  border-white/10
                "
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    group
                    relative
                    overflow-hidden
                    w-full
                    min-h-[58px]
                    px-6
                    rounded-2xl

                    bg-[#E2C45F]
                    text-[#080A0F]

                    font-bold
                    tracking-[0.1em]
                    text-sm
                    uppercase

                    flex
                    items-center
                    justify-center
                    gap-2

                    shadow-xl
                    shadow-[#E2C45F]/15

                    hover:bg-[#F0D36D]
                    hover:shadow-[#E2C45F]/30
                    hover:-translate-y-1

                    transition-all
                    duration-300
                  "
                >
                  {/* Mobile Shine */}
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      group-hover:translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/35
                      to-transparent
                      transition-transform
                      duration-700
                    "
                  />

                  <span className="relative z-10">
                    Book Space Now
                  </span>

                  <ArrowUpRight
                    className="
                      relative
                      z-10
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}