'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

interface CinematicIntroProps {
  totalFrames?: number
  onComplete?: () => void
}

export default function CinematicIntro({
  totalFrames = 78,
  onComplete,
}: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [currentFrame, setCurrentFrame] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isDone, setIsDone] = useState(false)

  // 1. Preload 78 frames into memory
  useEffect(() => {
    let isMounted = true
    const loadedImages: HTMLImageElement[] = []

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      const frameNum = i.toString().padStart(3, '0')
      img.src = `/frames/frame-${frameNum}.jpg`
      loadedImages.push(img)
    }

    imagesRef.current = loadedImages

    return () => {
      isMounted = false
    }
  }, [totalFrames])

  // 2. Scroll listener bound to CinematicIntro container height
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      // How far we scrolled inside the 300vh container
      const scrolledInContainer = -rect.top
      const maxScrollDistance = containerHeight - viewportHeight

      if (maxScrollDistance <= 0) return

      const rawProgress = scrolledInContainer / maxScrollDistance
      const clampedProgress = Math.min(Math.max(rawProgress, 0), 1)

      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(clampedProgress * totalFrames)
      )

      setCurrentFrame(frameIndex)
      setProgress(clampedProgress)

      if (clampedProgress >= 0.98 && !isDone) {
        setIsDone(true)
        if (onComplete) onComplete()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [totalFrames, onComplete, isDone])

  // 3. Render frame to canvas with high-DPI & cover fitting
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = imagesRef.current[currentFrame]
    if (!img || !img.complete) return

    const render = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width
      canvas.height = height

      ctx.clearRect(0, 0, width, height)

      const imgAspect = img.naturalWidth / img.naturalHeight
      const canvasAspect = width / height

      let drawWidth = width
      let drawHeight = height
      let offsetX = 0
      let offsetY = 0

      if (canvasAspect > imgAspect) {
        drawHeight = width / imgAspect
        offsetY = (height - drawHeight) / 2
      } else {
        drawWidth = height * imgAspect
        offsetX = (width - drawWidth) / 2
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    }

    render()

    const handleResize = () => render()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentFrame])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[350vh] bg-obsidian z-10 overflow-clip"
    >
      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between p-8 md:p-12">
        {/* Isolated Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-transparent to-obsidian/90 pointer-events-none z-1" />

        {/* Minimal On-Screen Intro overlay (No header, no menu, no text cards) */}
        <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian/60 border border-gold-500/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
              3D Architectural Sequence
            </span>
          </div>

          <div className="font-mono text-xs text-gold-400 bg-obsidian/60 border border-gold-500/30 px-3 py-1.5 rounded-full backdrop-blur-md">
            {Math.round(progress * 100)}%
          </div>
        </div>

        {/* Bottom Prompts */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 w-full text-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium"
          >
            <span>Scroll to Experience Muktar Plaza</span>
            <ChevronDown className="w-4 h-4 text-gold-400" />
          </motion.div>

          {/* Progress bar line */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
