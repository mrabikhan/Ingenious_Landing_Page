import trustedBgImage from "../../assets/trusted/clientcover.webp";

import deltaLogo from "../../assets/trusted/delta.png";
import chaayeLogo from "../../assets/trusted/chaaye.png";
import cureLogo from "../../assets/trusted/cure.png";
import formationLogo from "../../assets/trusted/formation.png";
import hashingLogo from "../../assets/trusted/hashing.png";
import percentLogo from "../../assets/trusted/percent.png";
import revoluticLogo from "../../assets/trusted/revolutic.png";
import riskLogo from "../../assets/trusted/risk.png";
import taxLogo from "../../assets/trusted/tax.png";
import cribLogo from "../../assets/trusted/crib.png";
import bajwaHospitalLogo from "../../assets/trusted/bajwahospital.png";
import vlccLogo from "../../assets/trusted/vlcc.png";

/**
 * TrustedBy
 * ------------------------------------------------------------------
 * Continuous right-to-left logo marquee. The whole strip pauses on
 * hover, and the logo under the cursor sheds its grayscale filter
 * and comes into full color while its neighbors stay muted.
 *
 * Logo assets are imported from src/assets/trusted — adjust the
 * "../assets/trusted/..." paths below if your files live somewhere
 * else (count one "../" per folder level between this file and /src).
 *
 * Background: a fixed (parallax-style) image sits behind the section
 * with a black gradient overlay for contrast. Swap trustedBgImage's
 * import path at the top of the file for your actual background
 * image — I've assumed src/assets/backgrounds/trusted-bg.jpg.
 *
 * Stack: React + TypeScript + Tailwind CSS
 * ------------------------------------------------------------------
 */

type Logo = {
  id: string;
  label: string;
  src: string;
};

const LOGOS: Logo[] = [
  { id: "delta", label: "Delta", src: deltaLogo },
  { id: "chaaye", label: "Chaaye", src: chaayeLogo },
  { id: "cure", label: "Cure", src: cureLogo },
  { id: "formation", label: "Formation", src: formationLogo },
  { id: "hashing", label: "Hashing", src: hashingLogo },
  { id: "percent", label: "Percent", src: percentLogo },
  { id: "revolutic", label: "Revolutic", src: revoluticLogo },
  { id: "risk", label: "Risk", src: riskLogo },
  { id: "tax", label: "Tax", src: taxLogo },
  { id: "crib", label: "Crib", src: cribLogo },
  { id: "bajwahospital", label: "Bajwa Hospital", src: bajwaHospitalLogo },
  { id: "vlcc", label: "VLCC", src: vlccLogo },
];

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-20 w-36 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-4 transition-colors duration-300 hover:border-amber-300/40 hover:bg-white/20 sm:h-24 sm:w-44 sm:rounded-2xl sm:px-8">
      <img
        src={logo.src}
        alt={logo.label}
        draggable={false}
        className="max-h-8 w-auto object-contain opacity-80 grayscale transition-all duration-300 ease-out hover:scale-110 hover:opacity-100 hover:grayscale-0 sm:max-h-10"
      />
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section
      className="relative overflow-hidden bg-[#08070a] py-20 sm:py-28"
      aria-label="Companies that trust us"
    >
      {/* fixed background image */}
      <div
        className="trusted-bg-fixed pointer-events-none absolute inset-0"
        style={{ backgroundImage: `url(${trustedBgImage})` }}
        aria-hidden="true"
      />

      {/* black gradient overlay for contrast over the image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* warm glow behind the heading, consistent with the rest of the site */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,146,34,0.14) 0%, rgba(249,146,34,0.05) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gray-300">
          Trusted by
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Backed by teams who
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            ship with confidence
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
          From clinics to fintech, growing brands hand us the parts of their business
          they can't afford to get wrong.
        </p>
      </div>

      {/* marquee */}
      <div className="relative mt-14 sm:mt-16">
        {/* edge fades so logos enter/exit cleanly rather than clipping mid-tile */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent sm:w-32" />

        <div className="animate-trusted-marquee flex w-max gap-4 hover:[animation-play-state:paused] sm:gap-6">
          {[0, 1].map((pass) => (
            <div
              key={pass}
              className="flex flex-shrink-0 gap-4 sm:gap-6"
              aria-hidden={pass === 1}
            >
              {LOGOS.map((logo) => (
                <LogoTile key={`${pass}-${logo.id}`} logo={logo} />
              ))}
            </div>
          ))}
        </div>

        {/* accessible, non-repeating list for screen readers */}
        <ul className="sr-only">
          {LOGOS.map((logo) => (
            <li key={logo.id}>{logo.label}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .trusted-bg-fixed {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        /* iOS Safari doesn't render background-attachment: fixed reliably —
           fall back to a plain scrolling background below tablet width. */
        @media (max-width: 767px) {
          .trusted-bg-fixed {
            background-attachment: scroll;
          }
        }
        @keyframes trusted-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-trusted-marquee {
          animation: trusted-marquee 32s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-trusted-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}