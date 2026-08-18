'use client'

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

interface CinematicIntroProps {
  totalFrames?: number
  onComplete?: () => void
}

export default function CinematicIntro({
  totalFrames = 63,
  onComplete,
}: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const imagesRef = useRef<HTMLImageElement[]>([])
  const animationFrameRef = useRef<number | null>(null)
  const resizeFrameRef = useRef<number | null>(null)

  const [currentFrame, setCurrentFrame] = useState(0)
  const [progress, setProgress] = useState(0)
  const [loadedCount, setLoadedCount] = useState(0)
  const [isDone, setIsDone] = useState(false)

  /*
   * =========================================================
   * FRAME CONFIGURATION
   * =========================================================
   *
   * JPG:
   *
   * frame-001.jpg
   * frame-002.jpg
   * ...
   * frame-060.jpg
   * frame-061.jpg
   * frame-062.jpg
   *
   * FINAL:
   *
   * final-frame.png
   *
   * IMPORTANT:
   *
   * frame-063.jpg and anything after it
   * will NOT be loaded.
   *
   * Total:
   *
   * 62 JPG + 1 PNG = 63 frames
   * =========================================================
   */

  const JPG_FRAME_COUNT = 62

  const FRAME_PATH = '/frames/frame-'

  const FINAL_FRAME_PATH =
    '/frames/final-frame.png'

  const TOTAL_ANIMATION_FRAMES =
    JPG_FRAME_COUNT + 1

  /*
   * =========================================================
   * DRAW FRAME
   * =========================================================
   */

  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current
      const images = imagesRef.current

      if (!canvas || !images.length) {
        return
      }

      const img = images[frameIndex]

      if (!img) {
        return
      }

      if (!img.complete) {
        return
      }

      if (
        img.naturalWidth === 0 ||
        img.naturalHeight === 0
      ) {
        return
      }

      const ctx = canvas.getContext('2d')

      if (!ctx) {
        return
      }

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      )

      const width = window.innerWidth
      const height = window.innerHeight

      const targetWidth =
        Math.floor(width * dpr)

      const targetHeight =
        Math.floor(height * dpr)

      /*
       * Resize canvas only when necessary
       */

      if (
        canvas.width !== targetWidth ||
        canvas.height !== targetHeight
      ) {
        canvas.width = targetWidth
        canvas.height = targetHeight

        canvas.style.width =
          `${width}px`

        canvas.style.height =
          `${height}px`
      }

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      )

      /*
       * Clear previous frame
       */

      ctx.clearRect(
        0,
        0,
        width,
        height
      )

      /*
       * =====================================================
       * IMAGE ASPECT RATIO
       * =====================================================
       */

      const imgAspect =
        img.naturalWidth /
        img.naturalHeight

      const canvasAspect =
        width / height

      let drawWidth = width
      let drawHeight = height

      let offsetX = 0
      let offsetY = 0

      /*
       * =====================================================
       * COVER IMAGE
       * =====================================================
       */

      if (canvasAspect > imgAspect) {
        drawWidth = width

        drawHeight =
          width / imgAspect

        offsetY =
          (height - drawHeight) / 2
      } else {
        drawHeight = height

        drawWidth =
          height * imgAspect

        offsetX =
          (width - drawWidth) / 2
      }

      /*
       * =====================================================
       * DRAW IMAGE
       * =====================================================
       */

      ctx.drawImage(
        img,
        offsetX,
        offsetY,
        drawWidth,
        drawHeight
      )
    },
    []
  )

  /*
   * =========================================================
   * PRELOAD ALL FRAMES
   * =========================================================
   *
   * 001 → 062 = JPG
   * 063       = final-frame.png
   *
   * =========================================================
   */

  useEffect(() => {
    let cancelled = false

    const images: HTMLImageElement[] = []

    let loaded = 0

    setLoadedCount(0)

    /*
     * =====================================================
     * LOAD JPG FRAMES
     * =====================================================
     *
     * frame-001.jpg → frame-062.jpg
     *
     * =====================================================
     */

    for (
      let i = 1;
      i <= JPG_FRAME_COUNT;
      i++
    ) {
      const img = new Image()

      img.decoding = 'async'
      img.loading = 'eager'

      const frameNumber =
        i.toString().padStart(3, '0')

      const imagePath =
        `${FRAME_PATH}${frameNumber}.jpg`

      img.src = imagePath

      img.onload = () => {
        if (cancelled) {
          return
        }

        loaded += 1

        setLoadedCount(loaded)

        /*
         * Draw first frame immediately
         */

        if (i === 1) {
          requestAnimationFrame(() => {
            drawFrame(0)
          })
        }

        /*
         * If this is the currently visible frame,
         * redraw it after loading.
         */

        if (
          i - 1 === currentFrame
        ) {
          requestAnimationFrame(() => {
            drawFrame(currentFrame)
          })
        }
      }

      img.onerror = () => {
        if (cancelled) {
          return
        }

        console.error(
          `[CinematicIntro] Failed to load: ${imagePath}`
        )
      }

      images.push(img)
    }

    /*
     * =====================================================
     * LOAD FINAL FRAME
     * =====================================================
     *
     * This is the LAST frame.
     *
     * Array index = 62
     *
     * URL:
     *
     * /frames/final-frame.png
     *
     * =====================================================
     */

    const finalImage =
      new Image()

    finalImage.decoding = 'async'
    finalImage.loading = 'eager'

    finalImage.src =
      FINAL_FRAME_PATH

    finalImage.onload = () => {
      if (cancelled) {
        return
      }

      loaded += 1

      setLoadedCount(loaded)

      /*
       * Draw final image if it is currently visible.
       */

      if (
        currentFrame ===
        TOTAL_ANIMATION_FRAMES - 1
      ) {
        requestAnimationFrame(() => {
          drawFrame(
            TOTAL_ANIMATION_FRAMES - 1
          )
        })
      }
    }

    finalImage.onerror = () => {
      if (cancelled) {
        return
      }

      console.error(
        `[CinematicIntro] Failed to load final frame: ${FINAL_FRAME_PATH}`
      )
    }

    /*
     * Add final image as frame 63
     */

    images.push(finalImage)

    /*
     * Save all images
     */

    imagesRef.current = images

    /*
     * Cleanup
     */

    return () => {
      cancelled = true

      images.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [
    drawFrame,
    currentFrame,
  ])

  /*
   * =========================================================
   * RENDER CURRENT FRAME
   * =========================================================
   */

  useEffect(() => {
    if (
      animationFrameRef.current !== null
    ) {
      cancelAnimationFrame(
        animationFrameRef.current
      )
    }

    animationFrameRef.current =
      requestAnimationFrame(() => {
        drawFrame(currentFrame)
      })

    return () => {
      if (
        animationFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current
        )
      }
    }
  }, [
    currentFrame,
    drawFrame,
  ])

  /*
   * =========================================================
   * HANDLE SCROLL
   * =========================================================
   */

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) {
        return
      }

      ticking = true

      requestAnimationFrame(() => {
        const container =
          containerRef.current

        if (!container) {
          ticking = false
          return
        }

        const rect =
          container.getBoundingClientRect()

        const containerHeight =
          container.offsetHeight

        const viewportHeight =
          window.innerHeight

        const maxScrollDistance =
          containerHeight -
          viewportHeight

        if (
          maxScrollDistance <= 0
        ) {
          ticking = false
          return
        }

        const scrolled =
          -rect.top

        const rawProgress =
          scrolled /
          maxScrollDistance

        const clampedProgress =
          Math.min(
            Math.max(
              rawProgress,
              0
            ),
            1
          )

        /*
         * ===================================================
         * SCROLL → FRAME
         * ===================================================
         *
         * 0%
         * ↓
         * frame-001.jpg
         *
         * ...
         *
         * frame-060.jpg
         * ↓
         * frame-061.jpg
         * ↓
         * frame-062.jpg
         * ↓
         * final-frame.png
         *
         * ===================================================
         */

        const frameIndex =
          Math.min(
            TOTAL_ANIMATION_FRAMES - 1,
            Math.floor(
              clampedProgress *
                (
                  TOTAL_ANIMATION_FRAMES - 1
                )
            )
          )

        setCurrentFrame(
          frameIndex
        )

        setProgress(
          clampedProgress
        )

        /*
         * ===================================================
         * COMPLETION CALLBACK
         * ===================================================
         */

        if (
          clampedProgress >= 0.98 &&
          !isDone
        ) {
          setIsDone(true)

          onComplete?.()
        }

        ticking = false
      })
    }

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    )

    /*
     * Initial calculation
     */

    handleScroll()

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [
    onComplete,
    isDone,
  ])

  /*
   * =========================================================
   * RESIZE CANVAS
   * =========================================================
   */

  useEffect(() => {
    const handleResize = () => {
      if (
        resizeFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          resizeFrameRef.current
        )
      }

      resizeFrameRef.current =
        requestAnimationFrame(() => {
          drawFrame(currentFrame)
        })
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      )

      if (
        resizeFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          resizeFrameRef.current
        )
      }
    }
  }, [
    currentFrame,
    drawFrame,
  ])

  /*
   * =========================================================
   * LOADING PROGRESS
   * =========================================================
   */

  const loadingProgress =
    TOTAL_ANIMATION_FRAMES > 0
      ? Math.round(
          (
            loadedCount /
            TOTAL_ANIMATION_FRAMES
          ) * 100
        )
      : 0

  /*
   * =========================================================
   * UI
   * =========================================================
   */

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        h-[350vh]
        bg-black
        z-10
        overflow-clip
      "
    >
      {/* ===================================================
          STICKY VIEWPORT
          =================================================== */}

      <div
        className="
          sticky
          top-0
          left-0
          w-full
          h-screen
          overflow-hidden
          flex
          flex-col
          justify-between
          p-8
          md:p-12
        "
      >
        {/* =================================================
            CANVAS
            ================================================= */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            w-full
            h-full
            z-0
          "
        />

        {/* =================================================
            SUBTLE OVERLAY
            ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/25
            via-transparent
            to-black/45
            pointer-events-none
            z-[1]
          "
        />

        {/* =================================================
            TOP UI
            ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            items-center
            justify-between
            w-full
            max-w-7xl
            mx-auto
          "
        >
          {/* Scroll instruction */}

          <div
            className="
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-black/50
              border
              border-yellow-500/30
              backdrop-blur-md
            "
          >
            <Sparkles
              className="
                w-3.5
                h-3.5
                text-yellow-400
              "
            />

            <span
              className="
                text-[10px]
                uppercase
                tracking-widest
                text-yellow-400
                font-semibold
              "
            >
              ↓ Scroll Down to Explore
            </span>
          </div>

          {/* Progress */}

          <div
            className="
              font-mono
              text-xs
              text-yellow-400
              bg-black/50
              border
              border-yellow-500/30
              px-3
              py-1.5
              rounded-full
              backdrop-blur-md
            "
          >
            {Math.round(
              progress * 100
            )}
            %
          </div>
        </div>

        {/* =================================================
            BOTTOM UI
            ================================================= */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
            gap-2
            w-full
            text-center
          "
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="
              flex
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-neutral-200
              font-medium
            "
          >
            <span>
              Scroll to Experience Muktar Plaza
            </span>

            <ChevronDown
              className="
                w-4
                h-4
                text-yellow-400
              "
            />
          </motion.div>

          {/* Progress bar */}

          <div
            className="
              w-48
              h-1
              bg-white/10
              rounded-full
              overflow-hidden
              mt-2
            "
          >
            <div
              className="
                h-full
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
              "
              style={{
                width: `${
                  progress * 100
                }%`,
              }}
            />
          </div>

          {/* Loading indicator */}

          {loadingProgress < 100 && (
            <div
              className="
                mt-2
                text-[9px]
                uppercase
                tracking-widest
                text-white/50
              "
            >
              Loading {loadingProgress}%
            </div>
          )}
        </div>
      </div>
    </section>
  )
}