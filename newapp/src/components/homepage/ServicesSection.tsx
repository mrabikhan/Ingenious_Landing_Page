import { useState } from "react";
import {
  TrendingUp,
  Search,
  ShoppingCart,
  Code2,
  Palette,
  Gamepad2,
  Workflow,
  Users,
  ShieldCheck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "../../hooks/useInView";
import growImg from "../../assets/services/grow.jpg";
import buildImg from "../../assets/services/build.jpg";
import secureImg from "../../assets/services/secure.jpg";

interface ServiceItem {
  title: string;
  short: string;
  detail: string;
  icon: LucideIcon;
}

interface ServiceCluster {
  id: string;
  label: string;
  tagline: string;
  image: string;
  items: ServiceItem[];
}

const clusters: ServiceCluster[] = [
  {
    id: "grow",
    label: "Grow",
    tagline: "Get found, get chosen, get paid",
    image: growImg,
    items: [
      {
        title: "AI Digital Marketing",
        short: "SEO, content and PPC, tuned by AI-assisted targeting.",
        detail:
          "SEO, content and PPC campaigns built to compound over time rather than expire the moment the budget stops, with AI-assisted targeting sharpening every dollar spent.",
        icon: TrendingUp,
      },
      {
        title: "SEO & GEO",
        short: "Rank higher on search, get cited on generative engines.",
        detail:
          "Rank higher on classic search and start getting cited by generative engines like ChatGPT and Gemini, before your competitors figure out how.",
        icon: Search,
      },
      {
        title: "E-Commerce",
        short: "Storefronts on Shopify, WooCommerce and custom CMS.",
        detail:
          "Storefronts on Shopify, WooCommerce or a custom CMS, engineered to convert browsers into buyers on any device, not just look good on a demo call.",
        icon: ShoppingCart,
      },
    ],
  },
  {
    id: "build",
    label: "Build",
    tagline: "Ship the product",
    image: buildImg,
    items: [
      {
        title: "Software Development",
        short: "Web and mobile apps, engineered for scale from day one.",
        detail:
          "Web and mobile apps engineered for scale from day one — from a weekend MVP to a platform serving millions, on a stack your future team won't dread inheriting.",
        icon: Code2,
      },
      {
        title: "Design",
        short: "Figma-first UI/UX and brand identity systems.",
        detail:
          "Figma-first UI/UX and brand identity systems that make your product feel considered and consistent, not assembled from a dozen mismatched templates.",
        icon: Palette,
      },
      {
        title: "Gaming & XR",
        short: "Games, AR and VR experiences on modern engines.",
        detail:
          "Games, AR and VR experiences built on modern engines, for brands who want their product to be remembered — not just glanced at and forgotten.",
        icon: Gamepad2,
      },
    ],
  },
  {
    id: "secure",
    label: "Secure & Scale",
    tagline: "Operate with confidence",
    image: secureImg,
    items: [
      {
        title: "Automation",
        short: "Workflows, n8n pipelines, chatbots and CRM automation.",
        detail:
          "Workflows, n8n pipelines, chatbots and CRM automations that quietly remove hours of manual, repetitive work from your team's week — every week.",
        icon: Workflow,
      },
      {
        title: "Staff Augmentation",
        short: "Vetted talent that plugs into your team, fast.",
        detail:
          "Vetted engineers, designers and marketers who plug directly into your existing team and tools fast, without the usual months-long hiring overhead.",
        icon: Users,
      },
      {
        title: "Cybersecurity",
        short: "Compliance, penetration testing, managed security.",
        detail:
          "Compliance readiness, penetration testing and managed security, so your growth never outruns your defenses — or your customers' trust in you.",
        icon: ShieldCheck,
      },
    ],
  },
];

const flatServices = clusters.flatMap((cluster) =>
  cluster.items.map((item) => ({ ...item, clusterId: cluster.id, clusterLabel: cluster.label, image: cluster.image }))
);

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const current = flatServices[active];

  return (
    <section className="bg-white py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
            What We Do
          </p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Nine disciplines, working as one team.
          </h2>
          <p className="mt-5 text-base text-ink/55 sm:text-lg">
            Hover or tap a service to see it up close. Everything below is
            handled in-house — no subcontractors passing your project
            between agencies.
          </p>
        </div>

        {/* Explorer */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12">
          {/* Sticky visual panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[480px]">
              {clusters.map((cluster) => (
                <img
                  key={cluster.id}
                  src={cluster.image}
                  alt={cluster.label}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    current.clusterId === cluster.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />

              <div key={active} className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">
                <span className="w-fit animate-fade-up rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/80 backdrop-blur-sm">
                  {current.clusterLabel}
                </span>
                <div
                  className="mt-4 flex h-11 w-11 animate-fade-up items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-ink"
                  style={{ animationDelay: "60ms" }}
                >
                  <current.icon size={20} />
                </div>
                <h3
                  className="mt-4 animate-fade-up text-2xl font-medium text-white sm:text-3xl"
                  style={{ animationDelay: "110ms" }}
                >
                  {current.title}
                </h3>
                <p
                  className="mt-2 max-w-sm animate-fade-up text-sm text-white/70 sm:text-base"
                  style={{ animationDelay: "160ms" }}
                >
                  {current.detail}
                </p>
              </div>

              {/* index counter */}
              <div className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
                {String(active + 1).padStart(2, "0")} / {String(flatServices.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Grouped list */}
          <div>
            {clusters.map((cluster) => (
              <div key={cluster.id} className="mb-8 last:mb-0">
                <div className="mb-2 flex items-baseline gap-3 px-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {cluster.label}
                  </p>
                  <p className="text-xs text-ink/35">{cluster.tagline}</p>
                </div>

                <div className="space-y-1">
                  {cluster.items.map((item) => {
                    const globalIndex = flatServices.findIndex(
                      (s) => s.title === item.title && s.clusterId === cluster.id
                    );
                    const isActive = active === globalIndex;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onMouseEnter={() => setActive(globalIndex)}
                        onClick={() => setActive(globalIndex)}
                        className={`group flex w-full items-start gap-4 rounded-2xl px-4 py-4 text-left transition-colors duration-200 ${
                          isActive ? "bg-gold-50" : "hover:bg-ink/[0.03]"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                            isActive
                              ? "bg-gradient-to-br from-gold-400 to-gold-600 text-ink"
                              : "bg-ink/5 text-ink/50 group-hover:bg-ink/10"
                          }`}
                        >
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block text-sm font-medium sm:text-base ${
                              isActive ? "text-ink" : "text-ink/80"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="mt-0.5 block text-xs text-ink/45 sm:text-sm">
                            {item.short}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={16}
                          className={`mt-1 shrink-0 text-gold-600 transition-all duration-200 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl border border-ink/10 bg-[#FAFAF8] px-7 py-6 sm:flex-row">
          <p className="text-sm text-ink/60">
            Not sure which service fits your goal? We'll help you figure it
            out on a short call.
          </p>
          <a
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink/85"
          >
            Talk to our team
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}