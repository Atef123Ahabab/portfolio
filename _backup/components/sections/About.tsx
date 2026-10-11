import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader eyebrow="01 · About" title="Who I am" />

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          {profile.about.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-slate-300 leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 content-start">
          {profile.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass p-5 text-center hover:border-accent-cyan/40 transition"
            >
              <div className="font-display text-3xl font-bold gradient-text">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
