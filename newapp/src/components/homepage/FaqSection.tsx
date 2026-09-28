import { useState } from "react";
import { ChevronDown, ArrowUpRight, MessageCircleQuestion } from "lucide-react";
import { useInView } from "../../hooks/useInView";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What services does Ingenious Concepts actually cover?",
    answer:
      "Nine, grouped into three lanes: Grow (AI digital marketing, SEO & GEO, e-commerce), Build (software development, design, gaming & XR), and Secure & Scale (automation, staff augmentation, cybersecurity). Most clients start with one and expand as the relationship grows.",
  },
  {
    question: "Do you only work with companies based in Pakistan?",
    answer:
      "No — we're headquartered in Lahore but run client partnerships from Dallas for North America and Sydney for Asia Pacific, so you get regional-hours coverage no matter where your team sits.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A focused engagement like an SEO audit or a brand refresh can wrap in 2–3 weeks; a full product build usually runs 8–16 weeks. We'll give you a real timeline after a short discovery call, not a generic estimate.",
  },
  {
    question: "Can you plug into a team we already have?",
    answer:
      "Yes — that's exactly what staff augmentation is for. We can slot vetted specialists directly into your existing workflow and tools, or run a project independently and hand it off when it's done. Your call.",
  },
  {
    question: "What does getting started actually look like?",
    answer:
      "Send us a note through the contact form or email business@ingeniousc.com. We reply within one business day, usually with a few clarifying questions before scheduling a call with the right regional team.",
  },
];

function FaqCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-gold-500/40 bg-gradient-to-br from-gold-50/80 to-white shadow-[0_8px_30px_-8px_rgba(245,166,35,0.25)]"
          : "border-ink/10 bg-white hover:border-ink/20 hover:shadow-[0_4px_20px_-6px_rgba(10,10,11,0.08)]"
      }`}
    >
      {/* accent bar */}
      <span
        className={`absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-gold-400 to-gold-600 transition-transform duration-300 ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      />
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-5 px-6 py-5 text-left sm:px-7 sm:py-6"
      >
        <span
          className={`shrink-0 font-mono text-xs font-medium tabular-nums transition-colors ${
            isOpen ? "text-gold-600" : "text-ink/30"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex-1 text-base font-medium transition-colors sm:text-lg ${
            isOpen ? "text-ink" : "text-ink/80"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "rotate-180 border-transparent bg-gradient-to-br from-gold-400 to-gold-600 text-ink"
              : "border-ink/15 text-ink/40 group-hover:border-ink/30"
          }`}
        >
          <ChevronDown size={15} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-xl px-6 pb-6 pl-[3.1rem] text-sm leading-relaxed text-ink/55 sm:px-7 sm:pb-7 sm:pl-[3.6rem] sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* soft ambient glow, even on the light background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold-300/25 blur-[100px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-5 transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.3fr] lg:gap-16">
          {/* Left rail */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Questions worth asking before you commit.
            </h2>
            <p className="mt-4 text-base text-ink/55">
              The things most clients ask us first. If yours isn't here, just
              ask directly.
            </p>

            <div className="mt-8 rounded-2xl border border-ink/10 bg-gradient-to-br from-ink to-[#1a2338] p-6 text-white">
              <MessageCircleQuestion size={22} className="text-gold-400" />
              <p className="mt-4 text-sm font-medium">Still have questions?</p>
              <p className="mt-1.5 text-sm text-white/55">
                Email us and a real person replies within one business day.
              </p>
              <a
                href="mailto:business@ingeniousc.com"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300"
              >
                business@ingeniousc.com
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FaqCard
                key={item.question}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}