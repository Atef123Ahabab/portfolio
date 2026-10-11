import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="text-sm font-mono text-accent-cyan mb-2">{eyebrow}</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
