import { motion } from "framer-motion";
import { education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeader eyebrow="Education" title="Academic background" />

      <div className="space-y-0">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid md:grid-cols-[140px_1fr_auto] gap-4 md:gap-8 items-baseline border-t border-white/10 py-8"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
              {e.period}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-1">
                {e.degree}
              </h3>
              <p className="text-sm text-ink-400">{e.institution}</p>
            </div>
            <span className="font-mono text-xs text-accent">{e.detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
