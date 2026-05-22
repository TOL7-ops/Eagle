import { motion } from "framer-motion";
import { FileText, PackageCheck, Navigation, CheckCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  { icon: FileText, num: "01", title: "Request Quote", desc: "Share your cargo details. Get a tailored quote within hours." },
  { icon: PackageCheck, num: "02", title: "Cargo Pickup", desc: "Our team collects your shipment safely from your location." },
  { icon: Navigation, num: "03", title: "Shipment & Tracking", desc: "Real-time tracking and updates throughout transit." },
  { icon: CheckCheck, num: "04", title: "Successful Delivery", desc: "Cargo delivered on time, intact, with proof of delivery." },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow="Our Process"
          title="Four steps to seamless delivery"
          subtitle="A streamlined, transparent journey from your warehouse to your customer's door."
        />

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px lg:block">
            <div className="mx-auto h-full w-[85%] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          </div>

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-25 blur-xl" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold bg-white shadow-gold">
                    <s.icon className="h-9 w-9 text-royal" strokeWidth={1.8} />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-bold text-gold">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
