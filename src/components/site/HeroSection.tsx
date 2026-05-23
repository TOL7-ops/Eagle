import { motion } from "framer-motion";
import { ArrowRight, Phone, Truck, ShieldCheck, Globe2 } from "lucide-react";
import hero from "@/assets/hero-logistics.jpg";

const stats = [
  { icon: Truck,       label: "Fast Delivery",   value: "24/7",     delay: 0   },
  { icon: ShieldCheck, label: "Secure Shipping",  value: "100%",     delay: 0.4 },
  { icon: Globe2,      label: "Global Reach",     value: "50+ Ports",delay: 0.8 },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#f5f1ea" }}
    >
      {/* ── Background image + linen overlay ── */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Cargo ship and cargo plane at sunset"
          className="h-full w-full object-cover"
          style={{ opacity: 0.38 }}
          width={1920}
          height={1280}
        />

        {/* Linen wash: solid on the left, dissolves into the image on the right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(108deg, rgba(245,241,234,0.96) 0%, rgba(245,241,234,0.82) 38%, rgba(245,241,234,0.22) 65%, rgba(245,241,234,0.04) 100%)",
          }}
        />

        {/* Subtle gold ambient glow bottom-right — mirrors the logo accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 90%, rgba(212,175,55,0.14) 0%, transparent 58%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]"
              style={{
                background: "rgba(245,241,230,0.75)",
                border: "1px solid rgba(196,154,34,0.35)",
                color: "#7a6220",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "#c49a22" }}
              />
              Soaring Higher, Together
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl text-navy-deep/85"
               
            >
              Reliable Freight Forwarding{" "}
              <span style={{ color: "#c49a22", fontStyle: "italic" }}>
                &amp; Logistics
              </span>{" "}
              Solutions
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 max-w-xl text-lg leading-relaxed"
              style={{ color: "#4a3e28" }}
            >
              Eagle Horizon Travel and Tour Ltd. delivers fast, secure, and efficient
              cargo and logistics services across borders — from Ghana to the world.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:scale-105 text-navy-deep/85"
                style={{
                  background: "#000049",
                  color: "#fff",
                  boxShadow: "0 4px 18px rgba(196,154,34,0.30)",
                }}
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition"
                style={{
                  border: "1px solid rgba(196,154,34,0.40)",
                  color: "#7a5e18",
                  background: "rgba(245,241,230,0.55)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196,154,34,0.10)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(196,154,34,0.65)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(245,241,230,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(196,154,34,0.40)";
                }}
              >
                <Phone className="h-4 w-4" /> Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right — stat cards */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto grid max-w-md gap-5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className={`rounded-2xl p-5 ${
                    i === 1 ? "lg:ml-12" : i === 2 ? "lg:ml-6" : ""
                  }`}
                  style={{
                    background: "rgba(245,241,228,0.82)",
                    border: "1px solid rgba(196,154,34,0.28)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 2px 16px rgba(196,154,34,0.08)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Gold icon badge */}
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: "rgba(196,154,34,0.18)",
                        border: "1px solid rgba(196,154,34,0.32)",
                      }}
                    >
                      <s.icon
                        className="h-6 w-6"
                        style={{ color: "#9a7318" }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#7a6a3a" }}
                      >
                        {s.label}
                      </div>
                      <div
                        className="font-display text-2xl font-bold"
                        style={{ color: "#1a1208" }}
                      >
                        {s.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, #f5f1ea, transparent)",
        }}
      />
    </section>
  );
}