'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-12 border-t border-gold-500/20 bg-obsidian z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 p-[1px] flex items-center justify-center">
                  <div className="w-full h-full bg-obsidian rounded-[7px] flex items-center justify-center">
                    <span className="font-serif text-gold-400 font-bold text-xl">M</span>
                  </div>
                </div>
                <span className="font-serif tracking-widest text-xl font-bold text-white">
                  MUKTAR PLAZA
                </span>
              </a>
              <p className="mt-4 text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
                A prestigious commercial landmark engineered for luxury retail, corporate visionaries, and enduring investment growth.
              </p>
            </div>
            <div className="mt-8 text-xs text-neutral-400">
              Designed & Developed by TALHA. Inspired by global award-winning web standards.
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Project</a></li>
              <li><a href="#architecture" className="hover:text-gold-400 transition-colors">3D Walkthrough</a></li>
              <li><a href="#features" className="hover:text-gold-400 transition-colors">Infrastructure</a></li>
              <li><a href="#specs" className="hover:text-gold-400 transition-colors">Specifications</a></li>
              <li><a href="#floorplans" className="hover:text-gold-400 transition-colors">Floor Plans</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Visual Gallery</a></li>
            </ul>
          </div>

          {/* Quick Legal & Contact */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-bold text-gold-400 uppercase tracking-widest mb-6">
              Corporate Office
            </h4>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Bibir Bagicha, Gate no 4, Jatrabari, Dhaka 1204 <br />
              Project Locatoin: Rayerbag Bus Stand, Jatrabari, Dhaka. <br />
          
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-neutral-600">•</span>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a>
              <span className="text-neutral-600">•</span>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">RAJUK License</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-light">
          <p>© {new Date().getFullYear()} Muktar Plaza. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Architectural Excellence Built with Next.js & Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
