import { useEffect, useRef, useState } from "react";
import { Briefcase, Heart, Award, Target } from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface Stat {
  target: number;
  suffix: string;
  label: string;
  icon: typeof Briefcase;
}

const stats: Stat[] = [
  { target: 100, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { target: 98, suffix: "%", label: "Client Satisfaction", icon: Heart },
  { target: 8, suffix: "+", label: "Years of Experience", icon: Award },
  { target: 95, suffix: "%", label: "Success Rate", icon: Target },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let raf: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function StatBlock({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.target, start);
  const Icon = stat.icon;

  return (
    <div className="flex flex-col items-center px-6 py-10 text-center sm:py-0">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/10 text-gold-400">
        <Icon size={24} />
      </div>
      <p className="mt-6 text-6xl font-semibold leading-none text-white sm:text-7xl lg:text-8xl">
        {value}
        <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
          {stat.suffix}
        </span>
      </p>
      <p className="mt-4 text-sm font-medium uppercase tracking-wide text-white/45 sm:text-base">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsCounterSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section className="relative overflow-hidden bg-ink py-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-96 w-96 translate-x-1/2 rounded-full bg-gold-400/15 blur-[130px]" />

      {/* Faint grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.25]" aria-hidden="true">
        <defs>
          <pattern id="statsGrid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="#FFFFFF" strokeOpacity="0.07" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#statsGrid)" />
      </svg>

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-5 text-center transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
          By the Numbers
        </p>
        <h2 className="mt-3 text-3xl font-medium leading-tight text-white sm:text-4xl">
          Results, not just promises.
        </h2>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-5 sm:grid-cols-2 sm:divide-y-0 sm:px-8 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat) => (
          <StatBlock key={stat.label} stat={stat} start={inView} />
        ))}
      </div>
    </section>
  );
}