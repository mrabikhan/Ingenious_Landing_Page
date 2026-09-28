import { useEffect, useRef, useState } from "react";
import lahoreImg from "../../assets/lahore-cover.webp";
import dallasImg from "../../assets/dallas-cover.webp";
import sydneyImg from "../../assets/sydney-cover.webp";

interface LocationSlide {
  city: string;
  tag: string;
  blurb: string;
  image: string;
}

const locations: LocationSlide[] = [
  {
    city: "Lahore",
    tag: "Headquarters",
    blurb: "Our core engineering, design and delivery hub, running the full stack end to end.",
    image: lahoreImg,
  },
  {
    city: "Dallas",
    tag: "North America",
    blurb: "Client partnerships and account strategy for our North American customers.",
    image: dallasImg,
  },
  {
    city: "Sydney",
    tag: "Asia Pacific",
    blurb: "Regional growth and support coverage across the Asia Pacific timezone.",
    image: sydneyImg,
  },
];

export default function LocationsSection() {
  const [active, setActive] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActive(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );

    triggerRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-ink"
      style={{ height: `${locations.length * 100}vh` }}
      aria-label="Our locations"
    >
      {/* Pinned visual panel */}
      <div className="sticky top-0 h-[65vh] w-full overflow-hidden sm:h-[70vh]">
        {locations.map((loc, i) => (
          <div
            key={loc.city}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={loc.image}
              alt={`${loc.city} office`}
              className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${
                active === i ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
          </div>
        ))}

        {/* Text overlay, follows the active slide */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-12 sm:pb-14 lg:px-16">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-400">
            {locations[active].tag}
          </span>
          <h2 className="mt-2 text-5xl font-medium leading-none text-white sm:text-7xl lg:text-8xl">
            {locations[active].city}
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/70 sm:text-base">
            {locations[active].blurb}
          </p>

          {/* Progress indicator */}
          <div className="mt-6 flex items-center gap-2">
            {locations.map((loc, i) => (
              <span
                key={loc.city}
                className={`h-1 rounded-full transition-all duration-500 ${
                  active === i ? "w-8 bg-gold-400" : "w-4 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Invisible scroll triggers — one per viewport-height segment */}
      {locations.map((loc, i) => (
        <div
          key={loc.city}
          ref={(el) => {
            triggerRefs.current[i] = el;
          }}
          data-index={i}
          className="absolute inset-x-0 h-screen"
          style={{ top: `${i * 100}vh` }}
        />
      ))}
    </section>
  );
}