import { motion } from "framer-motion";
import { certifications } from "../../data/certifications";
import SectionHeader from "../ui/SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeader
        eyebrow="Certifications"
        title="Oracle Certified"
        subtitle="Eight Oracle Cloud Infrastructure certifications across DevOps, AI/ML, Cloud, and Data."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="bg-bg-base p-6 hover:bg-bg-card transition"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
              {c.track}
            </p>
            <h3 className="font-display text-sm font-semibold text-white leading-snug mb-3">
              {c.name}
            </h3>
            <p className="text-xs text-ink-500 font-mono">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
