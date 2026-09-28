import { ArrowRight, Phone, Sparkles, Rocket, Code2, ShieldCheck, TrendingUp } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import ctaBg from "../../assets/ctacover.webp";

const floatingIcons = [
  { Icon: Rocket, className: "left-[8%] top-[18%]", delay: "0s" },
  { Icon: Code2, className: "right-[10%] top-[22%]", delay: "0.6s" },
  { Icon: ShieldCheck, className: "left-[14%] bottom-[16%]", delay: "1.1s" },
  { Icon: TrendingUp, className: "right-[14%] bottom-[20%]", delay: "1.6s" },
];

export default function CtaSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section className="relative overflow-hidden bg-ink py-28">
      {/* Background photo */}
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      {/* Black overlay for legibility */}
      <div className="absolute inset-0 bg-black/72" />
      {/* Ink-tinted gradient to tie the photo into the brand palette, darkest at the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_0%,rgba(10,10,11,0.55)_100%)]" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/25 blur-[140px]" />

      {/* Faint grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]" aria-hidden="true">
        <defs>
          <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#FFFFFF" strokeOpacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctaGrid)" />
      </svg>

      {/* Floating decorative icons — hidden on small screens to avoid clutter */}
      {floatingIcons.map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gold-400/70 backdrop-blur-sm animate-float sm:flex ${className}`}
          style={{ animationDelay: delay }}
        >
          <Icon size={20} />
        </div>
      ))}

      <div
        ref={ref}
        className={`relative mx-auto max-w-3xl px-5 text-center transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
          <Sparkles size={13} className="text-gold-400" />
          Let's build something ingenious
        </span>

        <h2 className="mt-7 text-4xl font-medium leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Your competitors are already{" "}
          <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
            automating.
          </span>{" "}
          Are you?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          Every week you wait is a week your growth, product, and security
          stay stuck doing things the slow way. Let's fix that — starting
          with a conversation, not a contract.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:business@ingeniousc.com"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_36px_8px_rgba(245,166,35,0.4)] hover:-translate-y-0.5"
          >
            Start a project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+923214044590"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/90 transition-colors hover:border-white/30 hover:text-white"
          >
            <Phone size={16} />
            Book a free call
          </a>
        </div>

        <p className="mt-8 text-xs text-white/35">
          No contracts you can't walk away from — just work worth staying for.
        </p>
      </div>
    </section>
  );
}