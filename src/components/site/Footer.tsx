import { Plane, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "../../assets/Eagle_Lens_Letterhead.jpg-removebg-preview.png";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const services = [
  "Freight Forwarding",
  "Air Freight",
  "Sea Freight",
  "Customs Clearance",
  "Door-to-Door Delivery",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,oklch(0.55_0.2_260/0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_100%,oklch(0.78_0.14_82/0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <img src={logoImg} alt="Eagle Horizon logo" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">Eagle Horizon</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Travel & Tour Ltd.</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70 italic">
              "Soaring Higher, Together"
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Reliable freight forwarding and logistics solutions, built on trust and delivered with excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:bg-gold hover:text-navy-deep"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/70 transition hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/70 transition hover:text-gold">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <div>+233 (0) 244 160 840</div>
                  <div>+233 (0) 203 535 970</div>
                </div>
              </li>
              <li className="flex items-start gap-2 break-words">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="break-all">eaglehorizontravelandtourltd@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Rainbow Road-Aflao, Ketu South, Volta Region, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Eagle Horizon Travel and Tour Ltd. All rights reserved.</p>
          <p>Designed with precision. Delivered with pride.</p>
        </div>
      </div>
    </footer>
  );
}
