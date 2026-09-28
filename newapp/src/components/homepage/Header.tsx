import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { megaMenuColumns, primaryNavLinks } from "../../data/Megamenudata";
import logo from "../../assets/logo-color.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(megaMenuColumns[0].id);

  // Header goes solid once the hero has scrolled past ~64px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isDark = !scrolled && !mobileOpen;
  const currentColumn =
    megaMenuColumns.find((c) => c.id === activeColumn) ?? megaMenuColumns[0];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || mobileOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Ingenious Concepts home">
          <img
            src={logo}
            alt="Ingenious Concepts"
            className={`h-8 w-auto sm:h-9 transition-all duration-300 ${
              isDark ? "brightness-0 invert" : ""
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <div onMouseEnter={() => setServicesOpen(true)}>
            <button
              type="button"
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isDark ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {primaryNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isDark ? "text-white/90 hover:text-white" : "text-ink/80 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_0_0_0_rgba(245,166,35,0.5)] transition-all duration-300 hover:shadow-[0_0_24px_4px_rgba(245,166,35,0.45)] hover:-translate-y-0.5"
        >
          Start a project
          <ArrowRight size={15} />
        </a>

        {/* Mobile trigger */}
        <button
          type="button"
          className={`lg:hidden rounded-full p-2 transition-colors ${
            isDark ? "text-white" : "text-ink"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mega menu panel (desktop) */}
      <div
        className={`hidden lg:block absolute inset-x-0 top-full origin-top border-t border-black/5 bg-white shadow-xl transition-all duration-300 ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[1.6fr_1fr] gap-10 px-8 py-10">
          {/* Columns */}
          <div className="grid grid-cols-3 gap-8">
            {megaMenuColumns.map((column) => (
              <div
                key={column.id}
                onMouseEnter={() => setActiveColumn(column.id)}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {column.label}
                </p>
                <p className="mt-1 text-xs text-ink/50">{column.tagline}</p>
                <ul className="mt-4 space-y-1">
                  {column.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 transition-colors hover:bg-gold-50"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700 transition-transform duration-300 group-hover:scale-110">
                            <Icon size={18} strokeWidth={2} />
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-ink">
                              {item.title}
                            </span>
                            <span className="block text-xs text-ink/50 leading-snug">
                              {item.description}
                            </span>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured visual panel — reacts to the hovered column */}
          <div className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white">
            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${currentColumn.accent} opacity-30 blur-2xl transition-all duration-500`}
            />
            <Sparkles size={20} className="text-gold-400" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-400">
              {currentColumn.label} at Ingenious Concepts
            </p>
            <h3 className="mt-2 text-lg font-medium leading-snug">
              {currentColumn.tagline}
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              One team across Lahore, Dallas and Sydney handles the full{" "}
              {currentColumn.label.toLowerCase()} workstream — no handoffs.
            </p>
            <a
              href="/services"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300"
            >
              View all services
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed z-40 inset-x-0 top-[64px] bottom-0 bg-white transition-transform duration-300 overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6">
          <button
            type="button"
            className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-ink"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`grid transition-all duration-300 ${
              mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {megaMenuColumns.map((column) => (
                <div key={column.id} className="px-3 py-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {column.label}
                  </p>
                  <div className="mt-2 space-y-1">
                    {column.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 rounded-lg py-2 text-sm text-ink/80"
                        >
                          <Icon size={16} className="text-gold-600" />
                          {item.title}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {primaryNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-3 text-sm font-semibold text-ink"
          >
            Start a project
            <ArrowRight size={15} />
          </a>
        </nav>
      </div>
    </>
  );
}