import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

// Update to your real WhatsApp Business number, digits only, no + or spaces.
const WHATSAPP_NUMBER = "+923390091499";
const SCROLL_THRESHOLD = 400;

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed right-5 z-40 flex flex-col items-center gap-3 sm:right-6"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))" }}
    >
      {/* Scroll to top — only visible once the page has been scrolled */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-[0_8px_24px_-8px_rgba(10,10,11,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(10,10,11,0.45)] ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={18} />
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
        <MessageCircle size={26} className="relative" fill="currentColor" strokeWidth={0} />

        {/* Tooltip label */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
          Chat on WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink" />
        </span>
      </a>
    </div>
  );
}