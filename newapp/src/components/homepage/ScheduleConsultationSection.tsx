import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import consultationGif from "../../assets/consultation.gif";

const services = [
  "AI Digital Marketing",
  "SEO & GEO",
  "E-Commerce",
  "Software Development",
  "Design",
  "Gaming & XR",
  "Automation",
  "Staff Augmentation",
  "Cybersecurity",
];

const marqueeWords = [
  "Innovative",
  "Reliable",
  "Scalable",
  "Secure",
  "Creative",
  "Strategic",
  "Ingenious",
];

interface FormState {
  name: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

const emptyForm: FormState = { name: "", email: "", city: "", service: "", message: "" };

export default function ScheduleConsultationSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [marqueePaused, setMarqueePaused] = useState(false);

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your backend / email service / CRM.
    setSubmitted(true);
    setForm(emptyForm);
  };

  const inputClasses =
    "w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-gold-500/15";

  return (
    <section className="relative overflow-hidden bg-gray-100 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 transition-all duration-700 sm:px-8 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: gif + marquee */}
          <div className="flex flex-col justify-center">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_20px_50px_-24px_rgba(10,10,11,0.2)]">
              <img
                src={consultationGif}
                alt="Ingenious Concepts at work"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Continuously moving word marquee — pauses + highlights on hover */}
            <div
              className="mt-8 overflow-hidden"
              onMouseEnter={() => setMarqueePaused(true)}
              onMouseLeave={() => setMarqueePaused(false)}
            >
              <div
                className="flex w-max gap-8 animate-marquee"
                style={{ animationPlayState: marqueePaused ? "paused" : "running" }}
              >
                {[...marqueeWords, ...marqueeWords].map((word, i) => (
                  <span
                    key={`${word}-${i}`}
                    className="flex items-center gap-8 text-2xl font-medium text-ink/45 transition-colors duration-200 hover:text-gold-500 sm:text-3xl"
                  >
                    {word}
                    <span className="text-gold-500/40">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: heading, paragraph, form */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
              Schedule a Consultation
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl">
              Let's map out your next move.
            </h2>
            <p className="mt-4 text-base text-ink/55 sm:text-lg">
              Tell us a bit about what you're working on and pick the service
              closest to it — we'll come prepared with real ideas, not a
              generic sales pitch.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-gold-500/30 bg-gold-500/10 px-6 py-8 text-center">
                <p className="text-base font-medium text-ink">
                  Thanks — we've got it.
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  We'll reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClasses}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className={inputClasses}
                  />
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${inputClasses} ${form.service ? "text-ink" : "text-ink/35"}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="text-ink">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${inputClasses} resize-none`}
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_10px_30px_-8px_rgba(245,166,35,0.5)] sm:w-auto"
                >
                  Schedule consultation
                  <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}