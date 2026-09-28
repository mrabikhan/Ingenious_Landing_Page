import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Lightweight IntersectionObserver hook for scroll-triggered animations.
 * No external animation library required — pair the returned boolean with
 * Tailwind classes, e.g. `className={inView ? "animate-fade-up" : "opacity-0"}`.
 */
export function useInView<T extends HTMLElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.2, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}