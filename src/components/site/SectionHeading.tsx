import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? "bg-white/10 text-gold" : "bg-royal/10 text-royal"
        }`}>
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl ${
        light ? "text-white" : "text-navy-deep"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${
          light ? "text-white/70" : "text-muted-foreground"
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
