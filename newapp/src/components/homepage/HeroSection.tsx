import { ArrowRight, PlayCircle, ChevronDown} from "lucide-react";
import { useInView } from "../../hooks/useInView";

export default function HeroSection() {
  const { ref: headRef, inView: headIn } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: visualRef, inView: visualIn } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32 min-h-screen flex flex-col justify-center">
      {/* Ambient glow + rotating swirl rings, echoing the logo mark */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        {/* Deep ambient glow */}
        <div className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[140px]" />
        
        {/* Subtle animated grid background for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

        <svg
          className="absolute right-[-5%] top-[10%] h-[35rem] w-[35rem] animate-spin-slow opacity-20 sm:h-[45rem] sm:w-[45rem]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="92" stroke="url(#ring1)" strokeWidth="1" strokeDasharray="4 10" />
          <circle cx="100" cy="100" r="70" stroke="url(#ring2)" strokeWidth="0.5" strokeDasharray="2 8" />
          <circle cx="100" cy="100" r="45" stroke="url(#ring1)" strokeWidth="0.5" strokeDasharray="1 6" />
          <defs>
            <linearGradient id="ring1" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#F7C948" />
              <stop offset="100%" stopColor="#E8720C" />
            </linearGradient>
            <linearGradient id="ring2" x1="200" y1="0" x2="0" y2="200">
              <stop offset="0%" stopColor="#F2861A" />
              <stop offset="100%" stopColor="#F7C948" />
            </linearGradient>
          </defs>
        </svg>
        {/* Dark radial fade at the bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_85%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full relative z-10">
        <div
          ref={headRef}
          className={`flex flex-col items-center text-center transition-all duration-1000 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >


          <h1 className="max-w-5xl text-5xl font-bold tracking-tight leading-[1.1] text-white sm:text-7xl lg:text-[5.5rem]">
            Ideas, engineered into <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              products that perform
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-white/50 sm:text-xl font-light leading-relaxed">
            Ingenious Concepts builds your software, runs your growth engine, and
            secures what you ship — unified global teams delivering excellence
            without compromise.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-base font-semibold text-ink overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(245,166,35,0.3)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Start a project
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-medium text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <PlayCircle size={20} className="text-gold-400 transition-transform duration-300 group-hover:scale-110" />
              See what we do
            </a>
          </div>
        </div>

        {/* Floating Glass Feature Card (Replacing Numbers) */}
        <div 
          ref={visualRef}
          className={`mt-24 relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            visualIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/20 via-orange-500/20 to-gold-500/20 rounded-3xl blur-xl opacity-40"></div>
          <div className="relative rounded-3xl border border-white/10 bg-ink/40 p-8 backdrop-blur-xl sm:p-10 overflow-hidden shadow-2xl">
            {/* Glossy top edge highlight */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-medium text-white">Global execution, flawless delivery.</h3>
                <p className="text-base text-white/50 leading-relaxed max-w-lg mx-auto md:mx-0">
                  We blend deep engineering expertise with strategic design thinking to build scalable, high-performance systems for modern enterprises.
                </p>
              </div>
              
              <div className="flex shrink-0 items-center justify-center gap-6 relative">
                {/* Abstract animated geometric composition */}
                <div className="relative h-20 w-20 animate-float">
                  <div className="absolute inset-0 rounded-full border border-gold-400/20" />
                  <div className="absolute inset-2 rounded-full border border-gold-500/40 border-t-transparent animate-spin-slow" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold-400 to-orange-600 opacity-90 shadow-[0_0_20px_rgba(245,166,35,0.4)]" />
                </div>
                <div className="relative h-14 w-14 animate-float" style={{ animationDelay: '1.5s' }}>
                   <div className="absolute inset-0 rounded-xl border border-orange-400/20 rotate-45" />
                   <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-orange-400 to-gold-600 opacity-70 rotate-45 backdrop-blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">Scroll to explore</span>
        <a
          href="#services"
          aria-label="Scroll to services"
          className="text-white/30 transition-colors hover:text-gold-400 animate-bounce-slow"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}