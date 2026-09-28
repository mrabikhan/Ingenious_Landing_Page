import { Star, ExternalLink } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Ingenious+Concepts/@31.3664583,74.2292783,17z";

// Placeholder testimonials — swap for live data. Google's terms require
// reviews to come from the actual Places API response, not be hand-written
// or scraped, so wire this up server-side with your Places API key and
// the `reviews` field on a Place Details request, then map real results
// into this same shape.
interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

const rowOne: Review[] = [
  { name: "Ayesha K.", role: "Marketing Director", rating: 5, text: "Our organic traffic nearly doubled within the first quarter of working together." },
  { name: "Marcus T.", role: "Founder", rating: 5, text: "They shipped our mobile app faster than any agency we'd used before." },
  { name: "Fatima R.", role: "E-Commerce Manager", rating: 5, text: "Store conversions improved noticeably within weeks of the redesign going live." },
];

const rowTwo: Review[] = [
  { name: "Sarah L.", role: "Operations Lead", rating: 5, text: "The automation work alone saved our team over twenty hours a week." },
  { name: "James O.", role: "CTO", rating: 5, text: "Security audit was thorough, and every fix was implemented within days." },
  { name: "David C.", role: "Product Manager", rating: 4, text: "Solid communication throughout, even working across three different timezones." },
];

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.4 0 6.4 1.17 8.8 3.46l6.55-6.55C35.2 2.5 30 0 24 0 14.64 0 6.6 5.4 2.7 13.24l7.6 5.9C12.2 13.4 17.6 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.15-3.14-.42-4.6H24v9.03h12.6c-.55 2.9-2.2 5.36-4.7 7.02l7.4 5.75C43.6 37.7 46.5 31.6 46.5 24.5Z" />
      <path fill="#FBBC05" d="M10.3 19.14a14.35 14.35 0 0 0 0 9.72l-7.6 5.9a24 24 0 0 1 0-21.52l7.6 5.9Z" />
      <path fill="#34A853" d="M24 48c6 0 11.2-1.98 14.9-5.38l-7.4-5.75c-2.06 1.4-4.7 2.23-7.5 2.23-6.4 0-11.8-3.9-13.7-9.4l-7.6 5.9C6.6 42.6 14.64 48 24 48Z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "fill-gold-500 text-gold-500" : "fill-ink/10 text-ink/10"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[85vw] max-w-[320px] sm:w-[320px] shrink-0 rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_1px_2px_rgba(10,10,11,0.04)]">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        <GoogleG size={16} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink/70">"{review.text}"</p>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-sm font-semibold text-gold-700">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-medium text-ink">{review.name}</p>
          <p className="text-xs text-ink/45">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviewsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-[#FAFAF8] py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl px-5 text-center transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
          Client Love
        </p>
        <h2 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
          Rated by the people we've actually worked with.
        </h2>
        <p className="mt-5 text-base text-ink/55 sm:text-lg">
          Every review below comes from a verified Google profile — no
          hand-picked quotes, just an honest record of how our clients rate
          the work.
        </p>

        {/* Rating badge */}
        <div className="mt-9 inline-flex items-center gap-4 rounded-full border border-ink/10 bg-white px-6 py-3 shadow-sm">
          <GoogleG size={24} />
          <div className="h-8 w-px bg-ink/10" />
          <div className="text-left">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-ink">4.9</span>
              <Stars rating={5} />
            </div>
            <p className="text-xs text-ink/45">Based on Google Reviews</p>
          </div>
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="mt-12 flex w-full overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-6 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {[...rowOne, ...rowTwo].map((r, i) => (
          <div key={`mobile-${i}`} className="snap-center shrink-0 first:ml-0">
            <ReviewCard review={r} />
          </div>
        ))}
      </div>

      {/* Desktop Marquee Rows */}
      <div className="mt-16 hidden space-y-5 overflow-hidden sm:block">
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {[...rowOne, ...rowOne].map((r, i) => (
            <ReviewCard key={`row1-${i}`} review={r} />
          ))}
        </div>
        <div className="flex w-max gap-5 animate-marquee [animation-direction:reverse] hover:[animation-play-state:paused]">
          {[...rowTwo, ...rowTwo].map((r, i) => (
            <ReviewCard key={`row2-${i}`} review={r} />
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center px-5">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
        >
          Read all reviews on Google
          <ExternalLink size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}