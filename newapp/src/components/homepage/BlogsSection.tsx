import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import generativeSeoImg from "../../assets/blogs/generative-seo.jpg";
import n8nImg from "../../assets/blogs/n8n-workflows.jpg";
import penTestingImg from "../../assets/blogs/pen-testing.jpg";

interface BlogPost {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    title: "Generative Engine Optimization: SEO's next chapter",
    excerpt:
      "How we're getting client content cited directly inside ChatGPT, Gemini and Perplexity answers.",
    tag: "SEO & GEO",
    href: "/blog/generative-engine-optimization",
    image: generativeSeoImg,
  },
  {
    title: "5 n8n workflows that quietly save teams 10+ hours a week",
    excerpt: "The unglamorous automations that pay for themselves fastest.",
    tag: "Automation",
    href: "/blog/n8n-workflows-that-save-hours",
    image: n8nImg,
  },
  {
    title: "What a penetration test actually finds",
    excerpt: "A behind-the-scenes look at a recent client security engagement.",
    tag: "Cybersecurity",
    href: "/blog/what-a-penetration-test-finds",
    image: penTestingImg,
  },
];

export default function BlogsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="bg-white py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-5 transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Latest{" "}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Insights &amp; Resources
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-ink/55 sm:text-base">
              Stay ahead with the latest industry trends across AI, growth
              and security. Notes from the projects we're actually shipping,
              written by the people doing the work.
            </p>
          </div>
          <a
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_10px_30px_-8px_rgba(245,166,35,0.45)] sm:self-auto"
          >
            See all blogs
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Resting-state gradient + tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
                {post.tag}
              </span>
              <h3 className="absolute inset-x-5 bottom-5 text-lg font-medium leading-snug text-white transition-opacity duration-500 group-hover:opacity-0">
                {post.title}
              </h3>

              {/* Hover overlay: darkens, reveals excerpt + explore button */}
              <div className="absolute inset-0 flex flex-col justify-end bg-ink/80 p-6 opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
                <span className="w-fit rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-gold-300">
                  {post.tag}
                </span>
                <h3 className="mt-3 translate-y-3 text-lg font-medium leading-snug text-white opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 translate-y-3 text-sm text-white/60 opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex w-fit translate-y-3 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink opacity-0 transition-all duration-500 delay-150 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}