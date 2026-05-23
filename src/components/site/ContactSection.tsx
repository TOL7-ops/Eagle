import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { z } from "zod";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+233 (0) 244 160 840", "+233 (0) 203 535 970"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["eaglehorizontravelandtourltd@gmail.com"],
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["Rainbow Road-Aflao", "Ketu South, Volta Region, Ghana"],
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Thank you! We'll get back to you shortly.");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setLoading(false);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow="Get In Touch"
          title="Let's move your cargo, together"
          subtitle="Reach out for a quote, consultation, or just to say hello. Our team is ready."
        />

        <div className="mt-8 grid gap-5 lg:mt-16 lg:grid-cols-5 lg:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-2"
          >
            {contactItems.map((c) => (
              <div
                key={c.label}
                className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-3 shadow-soft transition-all duration-300 hover:border-gold hover:shadow-elegant sm:p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-deep/90 text-white">
                  <c.icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-royal">
                    {c.label}
                  </div>

                  <div className="mt-1 space-y-1">
                    {c.lines.map((line) => (
                      <p
                        key={line}
                        className="break-words text-sm leading-relaxed text-foreground/85 sm:text-[15px]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Eagle Horizon location"
                src="https://maps.google.com/maps?q=Aflao%20Ketu%20South%20Ghana&t=&z=12&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="h-[200px] w-full border-0 sm:h-[280px]"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-3"
          >
            <div className="absolute inset-0 rounded-3xl bg-navy-gold-gradient opacity-10 blur-3xl" />

            <div className="relative rounded-3xl border border-border bg-card p-4 shadow-elegant sm:p-6 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-navy-deep sm:h-11 sm:w-11">
                  <MessageSquare className="h-5 w-5" />
                </div>

                <h3 className="font-display text-lg font-bold leading-tight text-navy-deep sm:text-2xl">
                  Send us a message
                </h3>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-5">
                <Field
                  label="Full Name"
                  id="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />

                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />

                <div className="sm:col-span-2">
                  <Field
                    label="Phone"
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-navy-deep"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us about your cargo, route, and timing..."
                    maxLength={1000}
                    className="w-full resize-none rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-elegant transition-all duration-300 hover:bg-royal disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-navy-deep"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
      />
    </div>
  );
}