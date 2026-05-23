import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import about from "@/assets/about-logistics.jpg";
import SectionHeading from "./SectionHeading";

const points = [
  "Trusted freight forwarder rooted in Ghana, serving the world",
  "End-to-end international cargo expertise across air, sea, and land",
  "Customer-first approach with transparent pricing and tracking",
  "Operationally efficient teams that move shipments on time",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* decorative glow: avoid negative inset on very small screens to prevent overflow */}
            <div className="absolute inset-0 sm:-inset-4 rounded-3xl bg-navy-gold-gradient opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={about}
                alt="Logistics team in warehouse"
                width={1280}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold-gradient p-6 shadow-gold sm:block">
              <div className="font-display text-4xl font-bold text-navy-deep">10+</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-navy-deep/80">
                Years of Trust
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="Your trusted partner in global freight forwarding"
              subtitle="Eagle Horizon Travel and Tour Ltd. is a Ghana-based logistics company built on reliability, customer satisfaction, and deep expertise in international cargo. We connect businesses to markets — safely, efficiently, and on time."
            />
            <ul className="mt-8 space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                  <span className="text-foreground/85">{p}</span>
                </motion.li>
              ))}
            </ul>
            <a
              href="#services"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white shadow-elegant transition hover:bg-royal hover:scale-105"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
