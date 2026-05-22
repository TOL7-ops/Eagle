import { motion } from "framer-motion";
import { Award, Users, BadgePercent, Radio, ShieldCheck, LifeBuoy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  { icon: Award, title: "Reliable Delivery", desc: "On-time performance you can plan around." },
  { icon: Users, title: "Experienced Team", desc: "Decade of expertise in international logistics." },
  { icon: BadgePercent, title: "Affordable Rates", desc: "Transparent, competitive pricing with no surprises." },
  { icon: Radio, title: "Real-Time Communication", desc: "Live updates from pickup to delivery." },
  { icon: ShieldCheck, title: "Safe Cargo Handling", desc: "Rigorous safety standards on every shipment." },
  { icon: LifeBuoy, title: "Customer Support", desc: "Responsive support whenever you need it." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(0.78_0.14_82/0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,oklch(0.55_0.2_260/0.35),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          light
          center
          eyebrow="Why Choose Us"
          title="Built on trust. Driven by excellence."
          subtitle="What makes Eagle Horizon the preferred logistics partner for businesses across borders."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-7 transition hover:bg-white/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-navy-deep shadow-gold transition group-hover:scale-110">
                <f.icon className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
