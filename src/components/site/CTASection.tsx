import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cta from "@/assets/cta-banner.jpg";

export default function CTASection() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl shadow-elegant"
        >
          <img
            src={cta}
            alt="Cargo plane over port at dusk"
            width={1920}
            height={800}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/85 to-royal/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,oklch(0.78_0.14_82/0.25),transparent_60%)]" />

          <div className="relative grid items-center gap-8 p-10 sm:p-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Ready to ship
              </div>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Move Your Cargo <span className="text-gradient-gold">With Confidence</span>
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-white/75">
                Partner with Eagle Horizon today and experience freight forwarding done right.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-semibold text-navy-deep shadow-gold transition hover:scale-105 hover:shadow-glow"
              >
                Contact Eagle Horizon Today
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
