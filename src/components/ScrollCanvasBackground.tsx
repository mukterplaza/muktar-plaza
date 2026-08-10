'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScrollCanvasBackgroundProps {
  totalFrames?: number
  onLoaded?: () => void
}

export default function ScrollCanvasBackground({
  totalFrames = 78,
  onLoaded,
}: ScrollCanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)

  // Preload images
  useEffect(() => {
    let isMounted = true
    const loadedImages: HTMLImageElement[] = []
    let count = 0

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image()
      const frameNum = i.toString().padStart(3, '0')
      img.src = `/frames/frame-${frameNum}.jpg`
      img.onload = () => {
        if (!isMounted) return
        count++
        setLoadedCount(count)
        if (count === totalFrames && onLoaded) {
          onLoaded()
        }
      }
      loadedImages.push(img)
    }

    imagesRef.current = loadedImages

    return () => {
      isMounted = false
    }
  }, [totalFrames, onLoaded])

  // Canvas drawing & Scroll Sync
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return

      const scrollFraction = Math.min(Math.max(scrollY / maxScroll, 0), 1)
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(scrollFraction * totalFrames)
      )

      setCurrentFrameIndex(frameIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [totalFrames])

  // Draw current frame on canvas with cover scale
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = imagesRef.current[currentFrameIndex]
    if (!img || !img.complete) return

    const render = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width
      canvas.height = height

      ctx.clearRect(0, 0, width, height)

      // Object fit: cover math
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

    const handleResize = () => {
      render()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentFrameIndex, loadedCount])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-500 opacity-85"
      />
      {/* Dark gradient overlay for modern cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-obsidian/50 to-obsidian" />
    </div>
  )
}
