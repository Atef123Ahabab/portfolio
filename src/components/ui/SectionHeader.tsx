import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`section-header ${center ? "text-center" : ""}`}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <div className={`section-rule ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-6 text-ink-400 max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
