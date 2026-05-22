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
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
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
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow="Get In Touch"
          title="Let's move your cargo, together"
          subtitle="Reach out for a quote, consultation, or just to say hello. Our team is ready."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              {contactItems.map((c) => (
                <div
                  key={c.label}
                  className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:border-gold hover:shadow-elegant"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-deep/85 text-white shadow-soft">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-royal">
                      {c.label}
                    </div>
                    {c.lines.map((line) => (
                      <div key={line} className="mt-0.5 text-foreground/85 break-words">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Eagle Horizon location"
                src="https://maps.google.com/maps?q=Aflao%20Ketu%20South%20Ghana&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-3"
          >
            <div className="absolute -inset-4 rounded-3xl bg-navy-gold-gradient opacity-10 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-navy-deep">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-deep">Send us a message</h3>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" id="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Email" id="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <div className="sm:col-span-2">
                  <Field label="Phone" id="phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-deep">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
                    placeholder="Tell us about your cargo, route, and timing..."
                    maxLength={1000}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 font-semibold text-white shadow-elegant transition hover:bg-royal disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, id, type = "text", value, onChange,
}: {
  label: string; id: string; type?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy-deep">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20"
        maxLength={255}
      />
    </div>
  );
}
