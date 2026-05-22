import { motion } from "framer-motion";
import {
  Package, Container, Plane, Ship, FileCheck2, Headphones, MapPinned, Truck,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  { icon: Package, title: "Freight Forwarding", desc: "Seamless coordination of cargo across global trade routes." },
  { icon: Container, title: "Cargo Handling", desc: "Professional loading, storage, and care for every shipment." },
  { icon: Plane, title: "Air Freight", desc: "Time-critical air cargo with global airline partnerships." },
  { icon: Ship, title: "Sea Freight", desc: "Cost-efficient FCL & LCL ocean shipping worldwide." },
  { icon: FileCheck2, title: "Customs Clearance", desc: "Fast, compliant customs documentation and brokerage." },
  { icon: Headphones, title: "Logistics Consultation", desc: "Expert advisory to optimize your supply chain." },
  { icon: MapPinned, title: "Travel & Tour Assistance", desc: "Tailored travel solutions for business and leisure." },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "Complete pickup-to-destination logistics, hassle-free." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-secondary/40 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,oklch(0.78_0.14_82/0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow="Our Services"
          title="End-to-end logistics, crafted for you"
          subtitle="From the first quote to the final delivery, we handle every step of your cargo journey with precision and care."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gold-gradient opacity-0 blur-3xl transition group-hover:opacity-40" />
              <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-deep/85 text-white shadow-elegant transition group-hover:scale-110">
                  <s.icon className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
