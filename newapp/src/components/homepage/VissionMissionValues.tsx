import type { ReactNode } from "react";

/**
 * VisionMissionValues
 * ------------------------------------------------------------------
 * Vision / Mission / Values section, restyled to match the Ingenious
 * Concepts hero: near-black background, warm amber-orange gradient
 * accents, pill buttons, and a soft glow behind the headline.
 *
 * Font: this assumes the bold rounded sans used in your hero (e.g.
 * "Plus Jakarta Sans" / "Sora") is already loaded globally via your
 * Tailwind config / index.css, so the section just inherits font-sans.
 * If it isn't yet, add it once in your global stylesheet:
 *   @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
 *   body { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
 *
 * Stack: React + TypeScript + Tailwind CSS
 * ------------------------------------------------------------------
 */

type Plate = {
  numeral: string;
  title: string;
  body: string;
  action: string;
  icon: ReactNode;
};

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PLATES: Plate[] = [
  {
    numeral: "I",
    title: "Vision",
    body: "A future where every business we touch runs on ideas built with the same care as the products they sell — clear, considered, and made to last.",
    action: "Read the full vision",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.8" />
        <path d="M12 2.5V5" />
        <path d="M12 19v2.5" />
      </svg>
    ),
  },
  {
    numeral: "II",
    title: "Mission",
    body: "We take a client's roughest idea, sketch it into a working concept, and engineer it into a product — without losing the spark it started with.",
    action: "See the mission in action",
    icon: (
      <svg {...iconProps}>
        <path d="M20.5 3.5 3.5 11l6.5 2.3L12.2 20.5l8.3-17Z" />
      </svg>
    ),
  },
  {
    numeral: "III",
    title: "Values",
    body: "Curiosity that asks one more question. Craft that sweats the small joins. Honesty that tells a client the truth before they have to ask for it.",
    action: "Explore our values",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.8 19.5 6v6c0 4.6-3.1 7.4-7.5 8.7C7.6 19.4 4.5 16.6 4.5 12V6L12 2.8Z" />
        <path d="M9 12.3l2 2 4-4.2" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7h9M7.5 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-amber-300/30" />
      <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-amber-300/30" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b border-l border-amber-300/30" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-amber-300/30" />
    </>
  );
}

function CompassEmblem() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="h-full w-full text-white motion-safe:animate-[spin_70s_linear_infinite]"
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="96" fill="none" stroke="currentColor" strokeOpacity="0.14" />
      <circle cx="120" cy="120" r="72" fill="none" stroke="currentColor" strokeOpacity="0.22" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const major = i % 6 === 0;
        return (
          <line
            key={i}
            x1="120"
            y1={major ? 18 : 24}
            x2="120"
            y2="30"
            stroke="currentColor"
            strokeOpacity={major ? 0.5 : 0.2}
            strokeWidth={major ? 1.4 : 1}
            transform={`rotate(${angle} 120 120)`}
          />
        );
      })}
      <path d="M120 48 L132 120 L120 130 L108 120 Z" fill="url(#compassNeedle)" />
      <path d="M120 192 L132 120 L120 110 L108 120 Z" fill="currentColor" fillOpacity="0.3" />
      <circle cx="120" cy="120" r="5" fill="#fff" />
      <defs>
        <linearGradient id="compassNeedle" x1="108" y1="48" x2="132" y2="130">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function VisionMissionValues() {
  return (
    <section className="relative overflow-hidden bg-[#08070a] py-28 sm:py-32">
      {/* warm glow behind the heading, matching the hero */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(249,146,34,0.16) 0%, rgba(249,146,34,0.06) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* faint scattered dots, top-right — echoes the hero's corner texture */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle at top right, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at top right, black, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* heading + compass */}
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-xl">

            <h2 className="mt-6 text-4xl font-bold leading-[1.15] text-white sm:text-5xl">
              Built on a vision,
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                run by a discipline
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-400">
              Every studio says it cares about ideas. We wrote ours down — what we're
              working toward, how we get there, and the standards we won't lower to get
              there faster.
            </p>
          </div>

          <div className="relative mx-auto hidden h-56 w-56 md:block lg:h-64 lg:w-64">
            <CompassEmblem />
          </div>
        </div>

        {/* plates */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {PLATES.map((plate) => (
            <div
              key={plate.title}
              className="group relative flex flex-col border border-white/10 bg-white/[0.03] p-8 pt-9 transition-colors hover:border-amber-300/30"
            >
              <CornerTicks />

              <div className="flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-amber-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(251,191,36,0.16), rgba(249,115,22,0.10))",
                    border: "1px solid rgba(251,191,36,0.25)",
                  }}
                >
                  {plate.icon}
                </div>
                <span className="font-mono text-xs text-amber-300/60">
                  Plate {plate.numeral}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">{plate.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">{plate.body}</p>

              <button
                type="button"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-amber-300/50 hover:text-amber-300"
              >
                {plate.action}
                <ArrowIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}