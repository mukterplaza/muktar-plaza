# Insaf Muktar Plaza — Premium Real Estate Website

A cinematic, scroll-driven premium real estate website for **Insaf Muktar Plaza**, a 14-storey mixed-use landmark (B + G + 12) developed by Insaf Real Estate Ltd., located adjacent to Rayerbagh Bus Stand in Jatrabari, Dhaka, Bangladesh.

---

## 🏢 About the Project

**Insaf Muktar Plaza** offers:
- 168 commercial shops across ground + 3 floors
- 30 residential apartments on floors 4–12
- RAJUK-approved structural design
- 100% earthquake-resistant construction
- Prime city-hub location with high ROI potential

---

## ✨ Website Features

- **Cinematic Scroll-Driven Intro** — 78-frame canvas animation synchronized to scroll position
- **Custom Cursor** — Premium interactive cursor with hover effects
- **Glassmorphism UI** — Modern dark aesthetic with gold accents
- **Smooth Animations** — Powered by Framer Motion & GSAP
- **Fully Responsive** — Mobile, tablet, and desktop optimized
- **SEO Optimized** — Open Graph + Twitter Card metadata
- **Sections:**
  - Hero with animated stats
  - Project Introduction
  - Architecture Experience (3D details)
  - Infrastructure & Features
  - Engineering Specifications
  - Floor Plans
  - Image Gallery
  - Location & Accessibility
  - Contact & Reservation CTA
  - Footer

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org/) | Framework (App Router) |
| [React 18](https://react.dev/) | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-First Styling |
| [Framer Motion](https://www.framer-motion.com/) | Animations |
| [GSAP](https://greensock.com/gsap/) | Advanced Animations |
| [Three.js](https://threejs.org/) | 3D Rendering |
| [Lucide React](https://lucide.dev/) | Icons |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mukterplaza/muktar-plaza.git
cd muktar-plaza

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
muktarplaza/
├── public/
│   └── frames/           # 78 cinematic scroll frames (JPG)
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles & design tokens
│   │   ├── layout.tsx    # Root layout with SEO metadata
│   │   └── page.tsx      # Main page composition
│   └── components/
│       ├── CinematicIntro.tsx      # Scroll-driven 78-frame canvas intro
│       ├── CustomCursor.tsx        # Premium interactive cursor
│       ├── Header.tsx              # Sticky navigation
│       ├── Hero.tsx                # Hero section with animated stats
│       ├── ProjectIntro.tsx        # Project overview
│       ├── ArchitectureExperience.tsx  # 3D architecture details
│       ├── Features.tsx            # Infrastructure & features
│       ├── Specifications.tsx      # Engineering specs
│       ├── FloorPlans.tsx          # Interactive floor plans
│       ├── Gallery.tsx             # Image gallery
│       ├── Location.tsx            # Location & accessibility
│       ├── ContactCTA.tsx          # Contact & reservation
│       ├── LoadingScreen.tsx       # Loading screen
│       ├── ScrollCanvasBackground.tsx  # Scroll canvas BG
│       └── Footer.tsx              # Footer
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 📍 Location

**Insaf Muktar Plaza**  
Adjacent to Rayerbagh Bus Stand,  
Jatrabari, Dhaka — 1204, Bangladesh

---

## 📞 Contact

**Insaf Real Estate Ltd.**  
Email: insaflimited2018@gmail.com

---

## 📄 License

© 2024 Insaf Real Estate Ltd. All rights reserved.
