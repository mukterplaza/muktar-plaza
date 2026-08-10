'use client'

import React, { useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import CinematicIntro from '@/components/CinematicIntro'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectIntro from '@/components/ProjectIntro'
import ArchitectureExperience from '@/components/ArchitectureExperience'
import Features from '@/components/Features'
import Specifications from '@/components/Specifications'
import FloorPlans from '@/components/FloorPlans'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  const [introCompleted, setIntroCompleted] = useState(false)

  return (
    <main className="relative min-h-screen bg-obsidian text-white selection:bg-gold-500 selection:text-black">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* PHASE 01 & 02: Isolated Cinematic 3D Scroll Intro Gate */}
      <CinematicIntro onComplete={() => setIntroCompleted(true)} />

      {/* PHASE 03 & 04: Main Website (Reveals & Appears After Intro Gate) */}
      <div className="relative z-20 bg-obsidian">
        {/* Sticky Header — Only visible after Intro */}
        <Header visible={introCompleted} />

        {/* Content Flow */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={introCompleted ? { opacity: 1, y: 0 } : { opacity: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* 01 Hero Section */}
          <Hero />

          {/* 02 Project Intro */}
          <ProjectIntro />

          {/* 03 3D Architecture Details */}
          <ArchitectureExperience />

          {/* 04 Infrastructure & Features */}
          <Features />

          {/* 05 Engineering Specs */}
          <Specifications />

          {/* 06 Floor Plans */}
          <FloorPlans />

          {/* 07 Image Gallery */}
          <Gallery />

          {/* 08 Location & Accessibility */}
          <Location />

          {/* 09 Contact & Reservation */}
          <ContactCTA />

          {/* 10 Footer */}
          <Footer />
        </motion.div>
      </div>
    </main>
  )
}
