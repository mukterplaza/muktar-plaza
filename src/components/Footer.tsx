'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold-500/20 bg-obsidian pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-12">

          {/* Brand Info */}
          <div className="flex flex-col justify-between md:col-span-5">
            <div>
              <a
                href="#"
                className="flex items-center gap-3"
                aria-label="Muktar Plaza Home"
              >
                {/* Logo */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-obsidian">
                    <span className="font-serif text-xl font-bold text-gold-400">
                      M
                    </span>
                  </div>
                </div>

                {/* Brand Name */}
                <span className="font-serif text-xl font-bold tracking-widest text-white">
                  MUKTAR PLAZA
                </span>
              </a>

              {/* Project Description */}
              <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-neutral-400">
                Muktar Plaza is a commercial and residential development at Rayerbag, Jatrabari, featuring dedicated commercial spaces and residential apartments. Construction is currently ongoing.
              </p>

              {/* Project Status */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold-500/20 bg-gold-500/5 px-4 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                  Construction Work Ongoing
                </span>
              </div>
            </div>

            {/* Developer Credit */}
            <div className="mt-8 text-xs leading-relaxed text-neutral-500">
              Designed &amp; Developed by TALHA. Inspired by global
              award-winning digital experiences.
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="mb-6 font-serif text-sm font-bold uppercase tracking-widest text-gold-400">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm text-neutral-300">

              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-gold-400"
                >
                  About Project
                </a>
              </li>

              <li>
                <a
                  href="#architecture"
                  className="transition-colors hover:text-gold-400"
                >
                  3D Walkthrough
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-gold-400"
                >
                  Infrastructure
                </a>
              </li>

              <li>
                <a
                  href="#specs"
                  className="transition-colors hover:text-gold-400"
                >
                  Specifications
                </a>
              </li>

              <li>
                <a
                  href="#floorplans"
                  className="transition-colors hover:text-gold-400"
                >
                  Floor Plans
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition-colors hover:text-gold-400"
                >
                  Visual Gallery
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  className="transition-colors hover:text-gold-400"
                >
                  Location
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-gold-400"
                >
                  Contact &amp; Booking
                </a>
              </li>

            </ul>
          </div>

          {/* Corporate Office & Project Location */}
          <div className="md:col-span-4">

            <h4 className="mb-6 font-serif text-sm font-bold uppercase tracking-widest text-gold-400">
              Corporate Office
            </h4>

            {/* Office Address */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Office Address
              </p>

              <p className="mt-2 text-sm font-light leading-relaxed text-neutral-300">
                Bibir Bagicha, Gate No. 4,
                <br />
                Jatrabari, Dhaka 1204
              </p>
            </div>

            {/* Project Location */}
            <div className="mt-6">

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                Project Location
              </p>

              <p className="mt-2 text-sm font-light leading-relaxed text-neutral-300">
                Rayerbag Bus Stand,
                <br />
                Jatrabari, Dhaka
              </p>

            </div>

            {/* Project Highlights */}
            <div className="mt-6 space-y-2">

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span className="text-xs text-neutral-400">
                  Commercial Shops
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span className="text-xs text-neutral-400">
                  Residential Flats
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                <span className="text-xs text-neutral-400">
                  Construction Work Ongoing
                </span>
              </div>

            </div>

            {/* Legal Links */}
            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs">

              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <span className="text-neutral-600">•</span>

              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                Terms of Service
              </a>

              <span className="text-neutral-600">•</span>

              <a
                href="#"
                className="text-neutral-400 transition-colors hover:text-white"
              >
                Project Information
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-light text-neutral-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Muktar Plaza. All rights reserved.
          </p>

          <p className="text-center sm:text-right">
            Architectural Excellence Built with Next.js &amp; Three.js
          </p>

        </div>

      </div>
    </footer>
  )
}