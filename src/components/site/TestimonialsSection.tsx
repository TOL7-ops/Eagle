import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Kwame Mensah",
    role: "Operations Director, Accra Imports",
    initials: "KM",
    quote:
      "Eagle Horizon transformed our supply chain. Their team is responsive, professional, and our cargo always arrives on time. They've become a true extension of our business.",
  },
  {
    name: "Sarah Okonkwo",
    role: "Founder, Volta Trade Co.",
    initials: "SO",
    quote:
      "From customs clearance to door-to-door delivery, every step was seamless. The transparency and real-time updates gave us complete peace of mind.",
  },
  {
    name: "James Adjei",
    role: "Procurement Lead, Pan-African Goods",
    initials: "JA",
    quote:
      "Reliable, affordable, and genuinely customer-focused. Eagle Horizon delivers on every promise. They are our go-to freight partner across West Africa.",
  },
];

export default function TestimonialsSection() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow="Testimonials"
          title="Trusted by businesses that move"
          subtitle="Stories from the partners we help grow every day."
        />

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl bg-card p-10 shadow-elegant sm:p-14"
            >
              <Quote className="absolute -top-6 left-10 h-14 w-14 text-gold opacity-90" />
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 font-display text-xl leading-relaxed text-navy-deep sm:text-2xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-deep/85 font-display text-lg font-bold text-white shadow-soft">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy-deep">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy transition hover:bg-navy hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to testimonial ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-gold-gradient" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy transition hover:bg-navy hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
