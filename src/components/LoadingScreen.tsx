'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsFinished(true)
            if (onComplete) onComplete()
          }, 300)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center p-6"
        >
          {/* Logo Brand Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 p-[1px] shadow-2xl shadow-gold-500/20">
              <div className="w-full h-full bg-obsidian rounded-[15px] flex items-center justify-center">
                <span className="font-serif text-gold-400 font-bold text-3xl">M</span>
              </div>
            </div>
            <h1 className="font-serif text-2xl tracking-[0.2em] font-bold text-white uppercase">
              Muktar Plaza
            </h1>
            <span className="text-[10px] tracking-[0.3em] text-gold-400/80 uppercase font-light">
              3D Architectural Experience Loading
            </span>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <div className="mt-4 text-xs font-mono text-neutral-400 tracking-wider">
            {Math.min(progress, 100)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
