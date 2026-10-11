import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="About" title="A little about me" />

      <div className="grid md:grid-cols-3 gap-14">
        <div className="md:col-span-2 space-y-6">
          {profile.about.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-ink-300 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="space-y-6">
          {profile.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-baseline justify-between border-b border-white/10 pb-4"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-ink-400">
                {s.label}
              </span>
              <span className="font-display text-2xl font-bold text-white">
                {s.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
