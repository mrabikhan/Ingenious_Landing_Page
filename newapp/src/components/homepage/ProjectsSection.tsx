import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import vantageImg from "../../assets/projects/vantage-crm.jpg";
import meridianImg from "../../assets/projects/meridian-health.jpg";
import loomcraftImg from "../../assets/projects/loomcraft.jpg";
import pulseImg from "../../assets/projects/pulse-fitness.jpg";
import northbridgeImg from "../../assets/projects/northbridge-bank.jpg";

interface Project {
  title: string;
  tag: string;
  caption: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Vantage CRM — Workflow Automation",
    tag: "Automation",
    caption:
      "Vantage CRM — an n8n-powered automation layer that cut manual order processing time for a logistics client by more than half.",
    url: "vantagecrm.io",
    image: vantageImg,
  },
  {
    title: "Meridian Health — Telehealth Platform",
    tag: "Software Development",
    caption:
      "Meridian Health — a HIPAA-conscious booking and video-consult web app built to handle appointment volume without breaking a sweat.",
    url: "meridianhealth.app",
    image: meridianImg,
  },
  {
    title: "Loomcraft — E-Commerce Redesign",
    tag: "E-Commerce",
    caption:
      "Loomcraft — a Shopify storefront rebuild for a homeware brand, focused on cutting checkout friction and mobile load times.",
    url: "loomcraft.com",
    image: loomcraftImg,
  },
  {
    title: "Pulse Fitness — VR Training App",
    tag: "Gaming & XR",
    caption:
      "Pulse Fitness — a VR training experience built to keep members engaged well past the usual two-week gym-app drop-off.",
    url: "pulsefitness.vr",
    image: pulseImg,
  },
  {
    title: "Northbridge Bank — Security Audit",
    tag: "Cybersecurity",
    caption:
      "Northbridge Bank — a full penetration test and compliance readiness review ahead of a regional banking license renewal.",
    url: "northbridgebank.com",
    image: northbridgeImg,
  },
];

const stats = [
  { target: 100, suffix: "+", label: "Digital projects delivered" },
  { target: 40, suffix: "%", label: "Average conversion lift" },
];

function useCountUp(target: number, start: boolean, duration = 1400) {
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

function StatItem({
  stat,
  start,
}: {
  stat: (typeof stats)[number];
  start: boolean;
}) {
  const value = useCountUp(stat.target, start);
  return (
    <div>
      <p className="text-4xl font-semibold text-ink sm:text-5xl">
        {value}
        <span className="text-gold-600">{stat.suffix}</span>
      </p>
      <p className="mt-1 max-w-[10rem] text-xs text-ink/50 sm:text-sm">
        {stat.label}
      </p>
    </div>
  );
}

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-[#FAFAF8] shadow-[0_20px_60px_-24px_rgba(10,10,11,0.25)]">
      <div className="flex items-center gap-3 border-b border-ink/10 bg-white px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="flex-1 rounded-full bg-ink/[0.04] px-3 py-1 text-center text-xs text-ink/40">
          {project.url}
        </div>
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState(1);
  const [paused, setPaused] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const project = projects[active];
  const AUTOPLAY_MS = 5000;

  // Auto-advance to the next project — resets on manual selection too,
  // since `active` is a dependency. Pauses while the person is hovering.
  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, paused, inView]);

  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-gold-300/20 blur-[110px]" />
      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Projects{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                we're proud
              </span>{" "}
              of.
            </h2>
          </div>
          <p className="max-w-xs text-base text-ink/50 sm:text-right sm:text-lg">
            You can rely on us as your trusted technology partner, delivering
            quality results that meet your expectations.
          </p>
        </div>

        {/* Explorer */}
        <div
          className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.2fr] lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* List + stats */}
          <div>
            <div className="border-l border-ink/10">
              {projects.map((p, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group relative flex w-full flex-col gap-2 border-l-2 py-4 pl-5 pr-3 text-left transition-colors duration-200 -ml-px ${
                      isActive
                        ? "border-gold-500"
                        : "border-transparent hover:border-ink/15"
                    }`}
                  >
                    <span className="flex items-start gap-4">
                      <span
                        className={`text-sm font-medium tabular-nums transition-colors ${
                          isActive ? "text-gold-600" : "text-ink/25"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-sm font-medium leading-snug transition-colors sm:text-base ${
                          isActive ? "text-ink" : "text-ink/35 group-hover:text-ink/60"
                        }`}
                      >
                        {p.title}
                      </span>
                    </span>

                    {/* Autoplay progress bar — only on the active row */}
                    {isActive && (
                      <span className="ml-9 h-[2px] max-w-[220px] overflow-hidden rounded-full bg-ink/10">
                        <span
                          key={`${active}-${paused}`}
                          className="block h-full origin-left bg-gold-500 [animation:progress_5s_linear_forwards]"
                          style={{ animationPlayState: paused ? "paused" : "running" }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} start={inView} />
              ))}
            </div>
          </div>

          {/* Preview */}
          <div>
            <div key={active} className="animate-fade-up">
              <BrowserFrame project={project} />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/55 sm:text-lg">
                <span className="font-medium text-ink">{project.tag} — </span>
                {project.caption}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-ink/85"
          >
            See all projects
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}