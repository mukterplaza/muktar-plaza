'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

type VideoItem = {
  id: string
  platform: 'facebook' | 'youtube'
  url: string
}

const videos: VideoItem[] = [
  {
    id: 'facebook-01',
    platform: 'facebook',
    url: 'https://www.facebook.com/reel/4407810269464609',
  },
  {
    id: 'facebook-02',
    platform: 'facebook',
    url: 'https://www.facebook.com/reel/1281944480583562',
  },
  {
    id: 'facebook-03',
    platform: 'facebook',
    url: 'https://www.facebook.com/reel/27657207667206341',
  },
  {
    id: 'facebook-04',
    platform: 'facebook',
    url: 'https://www.facebook.com/reel/1727659562017655',
  },
  {
    id: 'facebook-05',
    platform: 'facebook',
    url: 'https://www.facebook.com/emsrakib/videos/1219746850292759',
  },
  {
    id: 'facebook-06',
    platform: 'facebook',
    url: 'https://www.facebook.com/emsrakib/videos/2916124842072034',
  },
  {
    id: 'facebook-07',
    platform: 'facebook',
    url: 'https://www.facebook.com/reel/911371198377521',
  },
  {
    id: 'facebook-08',
    platform: 'facebook',
    url: 'https://www.facebook.com/reel/731461833016576',
  },
  {
    id: 'youtube-01',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=aBLqvD0SzEI',
  },
]

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url)

    if (parsed.hostname === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '')

      return videoId
        ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
        : ''
    }

    const videoId = parsed.searchParams.get('v')

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
      : ''
  } catch {
    return ''
  }
}

function getFacebookEmbedUrl(url: string) {
  const encodedUrl = encodeURIComponent(url)

  return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=true&width=560`
}

function VideoCard({
  item,
  index,
}: {
  item: VideoItem
  index: number
}) {
  const isYouTube = item.platform === 'youtube'

  const embedUrl = isYouTube
    ? getYouTubeEmbedUrl(item.url)
    : getFacebookEmbedUrl(item.url)

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="overflow-hidden rounded-[1.5rem] border border-white/[0.10] bg-[#06080f] shadow-2xl shadow-black/30 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/30"
    >
      <div
        className={
          isYouTube
            ? 'relative aspect-video w-full overflow-hidden bg-black'
            : 'relative min-h-[460px] w-full overflow-hidden bg-white'
        }
      >
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={
              isYouTube
                ? `Muktar Plaza YouTube Video ${index + 1}`
                : `Muktar Plaza Facebook Video ${index + 1}`
            }
            className="absolute inset-0 h-full w-full border-0"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full min-h-[300px] items-center justify-center bg-[#080b12] p-6 text-center text-xs text-neutral-500">
            Video embed is not available.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 p-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-400">
            MUKTAR PLAZA
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            {isYouTube
              ? 'YouTube Video'
              : 'Facebook Video'}{' '}
            — {String(index + 1).padStart(2, '0')}
          </p>
        </div>

        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-gold-500/40 hover:bg-gold-500 hover:text-black"
        >
          Open
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  )
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-12 text-center">
        <motion.span
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400"
        >
          06 — Project Videos
        </motion.span>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.7,
          }}
          className="mt-4 font-serif text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Muktar Plaza{' '}
          <span className="text-gold-gradient">
            Videos
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-base"
        >
          Explore Muktar Plaza project videos,
          architectural presentations and project
          updates.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <VideoCard
            key={video.id}
            item={video}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}