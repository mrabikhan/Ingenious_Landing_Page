import { useState, type FormEvent } from "react";
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import logo from "../../assets/logo-color.webp";
import worldMap from "../../assets/world-map.svg";

// lucide-react 1.0 removed all trademarked brand/logo icons (LinkedIn,
// Twitter/X, Instagram, GitHub, etc.) for legal reasons. Brand marks are
// hand-drawn here so this component doesn't depend on lucide for them.
type IconProps = { size?: number };

function LinkedinIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.38V21H3.5V8.75Zm6.25 0h3.24v1.68h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.06 2.26 4.06 5.2V21h-3.38v-5.53c0-1.32-.02-3.01-1.83-3.01-1.84 0-2.12 1.44-2.12 2.92V21H9.75V8.75Z" />
    </svg>
  );
}
function XIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.6 10.62 20.38 3h-1.6l-5.88 6.62L8.2 3H2.4l7.1 9.9L2.4 21h1.6l6.2-7 5 7h5.8l-7.4-10.38Zm-2.2 2.47-.72-1-5.72-8h2.46l4.62 6.46.72 1 6 8.4h-2.46l-4.9-6.86Z" />
    </svg>
  );
}
function InstagramIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function GithubIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.78 10.77.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.26-5.19-5.62 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.33-5.21 5.61.41.35.77 1.04.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/ingeniousconcepts", icon: LinkedinIcon },
  { label: "X (Twitter)", href: "https://x.com/ingeniousconcepts", icon: XIcon },
  { label: "Instagram", href: "https://instagram.com/ingeniousconcepts", icon: InstagramIcon },
  { label: "GitHub", href: "https://github.com/ingenious-concepts", icon: GithubIcon },
];

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Explore More", href: "/explore" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const contactDetails = [
  { label: "Business", value: "business@ingeniousc.com", href: "mailto:business@ingeniousc.com", icon: Mail },
  { label: "Sales", value: "sales@ingeniousc.com", href: "mailto:sales@ingeniousc.com", icon: Mail },
  { label: "Pakistan", value: "+92 321 404 4590", href: "tel:+923214044590", icon: Phone },
  { label: "USA", value: "+1 214 235 8360", href: "tel:+12142358360", icon: Phone },
];

export default function Footer() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: wire this up to your email provider / API endpoint.
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative min-h-[900px] overflow-hidden bg-ink text-white sm:min-h-[600px]">
      {/* Quiet world map, offices marked — sits behind the whole footer */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={worldMap}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/90 to-ink" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 pt-20 pb-10 transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <img src={logo} alt="Ingenious Concepts" className="h-8 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Digital product, growth and security under one roof — engineered
              from Lahore, delivered worldwide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-200 hover:border-white/25 hover:text-white"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Company</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Get in touch</p>
            <ul className="mt-4 space-y-3.5">
              {contactDetails.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.value}>
                    <a href={c.href} className="group flex items-start gap-2.5">
                      <Icon size={14} className="mt-0.5 shrink-0 text-white/35 transition-colors group-hover:text-gold-400" />
                      <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                        {c.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Stay in the loop</p>
            <p className="mt-4 text-sm text-white/55">Product updates and growth insights, no spam.</p>

            {submitted ? (
              <div className="mt-4 flex items-center gap-2 text-sm text-gold-300">
                <CheckCircle2 size={16} />
                You're subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2 py-1.5 transition-colors focus-within:border-white/30">
                  <Mail size={16} className="ml-2 shrink-0 text-white/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    aria-label="Email address"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-opacity hover:opacity-85"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Ingenious Concepts. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xs text-white/40 transition-colors hover:text-white/70">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}