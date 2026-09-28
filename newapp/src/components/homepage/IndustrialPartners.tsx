import { useEffect, useRef, useState } from "react";

import metaLogo from "../../assets/partners/meta.png";
import asaLogo from "../../assets/partners/asa.png";
import bingLogo from "../../assets/partners/bing.png";
import chamberLogo from "../../assets/partners/chamber.png";
import googleLogo from "../../assets/partners/google.png";
import isoLogo from "../../assets/partners/iso.png";
import linkedinLogo from "../../assets/partners/linkedin.png";
import pashaLogo from "../../assets/partners/pasha.png";
import psebLogo from "../../assets/partners/pseb.png";
import secpLogo from "../../assets/partners/secp.png";
import shopifyLogo from "../../assets/partners/shopify.png";
import snapLogo from "../../assets/partners/snap.png";
import tiktokLogo from "../../assets/partners/tiktok.png";

/**
 * IndustrialPartners
 * ------------------------------------------------------------------
 * A "tech stack" / partners section with a dotted background. Logos
 * sit scattered around a centered heading / paragraph / CTA. As the
 * section scrolls into view, each logo sharpens (blur -> 0), fades
 * in, and drifts inward toward the button.
 *
 * Logo assets are imported directly from src/assets/partners so the
 * bundler (Vite/CRA/webpack) resolves and hashes each file for you.
 * If IndustrialPartners.tsx doesn't live one folder above /assets
 * (e.g. it's nested deeper, like src/components/sections/), adjust
 * the "../assets/partners/..." paths below to match — count one
 * "../" per folder level between this file and /src.
 *
 * Stack: React + TypeScript + Tailwind CSS
 * ------------------------------------------------------------------
 */

type Logo = {
  id: string;
  label: string; // shown as alt text / accessible name
  src?: string; // image url — falls back to initials tile if omitted
  // Resting position once "revealed", as % of the section's box.
  top: string;
  left: string;
  size: number; // px, square tile
  // How far outward (in px) the logo starts before it drifts in.
  driftX: number;
  driftY: number;
  delay: number; // 0–1, stagger within the scroll progress
};

const LOGOS: Logo[] = [
  { id: "meta", label: "Meta", src: metaLogo, top: "16%", left: "10%", size: 78, driftX: -40, driftY: -30, delay: 0.05 },
  { id: "asa", label: "ASA", src: asaLogo, top: "24%", left: "26%", size: 72, driftX: -30, driftY: 20, delay: 0.15 },
  { id: "bing", label: "Bing", src: bingLogo, top: "10%", left: "50%", size: 74, driftX: 10, driftY: -45, delay: 0.0 },
  { id: "chamber", label: "Chamber of Commerce", src: chamberLogo, top: "20%", left: "70%", size: 78, driftX: 35, driftY: -20, delay: 0.1 },
  { id: "google", label: "Google", src: googleLogo, top: "8%", left: "88%", size: 80, driftX: 55, driftY: -35, delay: 0.2 },
  { id: "iso", label: "ISO", src: isoLogo, top: "44%", left: "12%", size: 74, driftX: -55, driftY: 0, delay: 0.25 },
  { id: "linkedin", label: "LinkedIn", src: linkedinLogo, top: "34%", left: "86%", size: 76, driftX: 50, driftY: 10, delay: 0.05 },
  { id: "pasha", label: "PASHA", src: pashaLogo, top: "68%", left: "13%", size: 72, driftX: -50, driftY: 25, delay: 0.3 },
  { id: "pseb", label: "PSEB", src: psebLogo, top: "72%", left: "27%", size: 72, driftX: -25, driftY: 45, delay: 0.15 },
  { id: "secp", label: "SECP", src: secpLogo, top: "78%", left: "46%", size: 72, driftX: 0, driftY: 55, delay: 0.35 },
  { id: "shopify", label: "Shopify", src: shopifyLogo, top: "66%", left: "76%", size: 72, driftX: 30, driftY: 35, delay: 0.1 },
  { id: "snap", label: "Snapchat", src: snapLogo, top: "56%", left: "88%", size: 76, driftX: 55, driftY: 15, delay: 0.2 },
  { id: "tiktok", label: "TikTok", src: tiktokLogo, top: "80%", left: "82%", size: 70, driftX: 45, driftY: 45, delay: 0.4 },
];

// clamp a number between 0 and 1
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

// ease-out cubic, so the drift settles rather than arriving linearly
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function IndustrialPartners() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const computeProgress = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // Progress goes 0 -> 1 as the section travels from just entering
      // the viewport (bottom edge touches viewport bottom) to being
      // comfortably centered (top edge reaches ~35% of viewport height).
      const start = vh; // section top this far below viewport top => progress 0
      const end = vh * 0.35; // section top at this height => progress 1
      const raw = (start - rect.top) / (start - end);

      setProgress(clamp01(raw));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(computeProgress);
        ticking = true;
      }
    };

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-100 py-20 sm:py-28 lg:py-36"
      aria-label="Technology stack behind our digital solutions"
    >
      {/* dotted background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#c9c9c9 1.4px, transparent 1.4px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* subtle vignette so logos fade near the edges (desktop scatter layout only) */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(245,245,245,0.9) 85%)",
        }}
        aria-hidden="true"
      />

      {/* scattered logos — desktop / wide screens only, needs horizontal room to breathe */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        {LOGOS.map((logo) => {
          // stagger: each logo gets its own local progress window
          const local = clamp01((progress - logo.delay) / (1 - logo.delay));
          const eased = easeOutCubic(local);

          const translateX = logo.driftX * (1 - eased);
          const translateY = logo.driftY * (1 - eased);
          const blurPx = 10 * (1 - eased);
          const opacity = 0.15 + 0.85 * eased;
          const scale = 0.85 + 0.15 * eased;

          return (
            <div
              key={logo.id}
              className="absolute flex items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm"
              style={{
                top: logo.top,
                left: logo.left,
                width: logo.size,
                height: logo.size,
                transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                filter: `blur(${blurPx}px)`,
                opacity,
                transition: "transform 120ms linear, filter 120ms linear, opacity 120ms linear",
              }}
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="h-3/4 w-3/4 object-contain"
                  draggable={false}
                />
              ) : (
                <span className="text-xs font-semibold tracking-wide text-neutral-500">
                  {logo.label.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* center content */}
      <div className="relative mx-auto flex max-w-xl flex-col items-center px-6 text-center">
        <h2 className="text-2xl font-bold leading-tight text-neutral-900 sm:text-3xl lg:text-4xl">
          The Tech Stack Behind
          <br />
          <span className="text-gold-600">our Digital Solutions</span>
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:mt-5 sm:text-base lg:text-lg">
          We build with modern, battle-tested tools so every product we ship is fast,
          reliable, and easy to grow.
        </p>

        <button
          type="button"
          className="mt-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition-colors hover:shadow-[0_0_30px_6px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:mt-8 sm:px-7 sm:py-3"
        >
          Book a Free Consultation
        </button>

        {/* static logo grid — mobile / tablet, replaces the scatter effect below lg */}
        <div className="mt-10 grid w-full grid-cols-4 gap-3 sm:mt-12 sm:grid-cols-5 sm:gap-4 lg:hidden">
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="flex aspect-square items-center justify-center rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm sm:rounded-2xl sm:p-3"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.label}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              ) : (
                <span className="text-xs font-semibold tracking-wide text-neutral-500">
                  {logo.label.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}