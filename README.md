# Ingenious Concepts – Corporate Landing Page

## 📖 Overview
The **Ingenious Concepts Landing Page** is a premium, ultra-modern corporate website designed for a global software, design, and growth agency (operating across Lahore, Dallas, and Sydney). The landing page is engineered to showcase the company's core disciplines—Growth, Build, and Secure & Scale—through highly interactive, aesthetic, and responsive UI components.

## 🚀 Tech Stack
This project is built using modern web development technologies focusing on performance, modularity, and premium aesthetics:

- **Framework**: [React](https://react.dev/) bundled with [Vite](https://vitejs.dev/) for blazing fast HMR and optimized builds.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for static typing and robust component architecture.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) using a custom configured `@theme` system for utility-first styling, glassmorphism, and complex CSS animations.
- **Icons**: [Lucide React](https://lucide.dev/) for clean, customizable SVG iconography.
- **Animations**: Custom Tailwind keyframes (e.g., `animate-float`, `animate-fade-up`, `animate-marquee`) and a custom `useInView` intersection observer hook for smooth scroll-triggered reveals.

## ✨ Key Features
- **Ultra-Modern UI/UX**: Features deep dark themes (`bg-ink`), glassmorphic panels (`backdrop-blur`), glowing neon borders, and dynamic bento-box layouts.
- **Interactive Sticky Scroll**: The Services section utilizes a highly polished sticky visual panel that updates dynamically as users scroll or hover through the service offerings.
- **Mobile-First Responsive Design**: Includes tailored native touch carousels for mobile devices (like the Google Reviews section) while retaining rich marquee animations on desktop.
- **Smooth Animations**: Incorporates ambient background glows, infinite continuous marquees, spinning SVGs, and scroll-triggered element reveals.
- **Mega Menu Navigation**: A sophisticated desktop mega menu with grouped disciplines and featured visual panels, complemented by a smooth slide-out drawer for mobile navigation.

## 📂 Project Structure
The core application logic is located within the `newapp` directory:

```text
Ingenious Landing Page/
├── README.md              # Project documentation
└── newapp/                # Main application folder
    ├── src/
    │   ├── assets/        # Static assets (images, svg maps, trusted logos)
    │   ├── components/
    │   │   └── homepage/  # Modular page sections (Hero, Services, Footer, etc.)
    │   ├── data/          # Static data config (MegaMenu links, etc.)
    │   ├── hooks/         # Custom React hooks (e.g., useInView)
    │   ├── App.tsx        # Root application component
    │   ├── index.css      # Tailwind v4 imports and custom @theme tokens
    │   └── main.tsx       # React DOM entry point
    ├── vite.config.ts     # Vite bundler configuration
    ├── package.json       # Project dependencies and scripts
    └── tsconfig.json      # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1. **Navigate into the project directory:**
   ```bash
   cd newapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be running locally (usually on `http://localhost:5173`).

4. **Build for production:**
   ```bash
   npm run build
   ```

---
*Designed & Developed for Ingenious Concepts.*
