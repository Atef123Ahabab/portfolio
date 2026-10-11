import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../../data/certifications";
import SectionHeader from "../ui/SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeader
        eyebrow="04 · Certifications"
        title="Oracle Certified"
        subtitle="Eight Oracle Cloud Infrastructure certifications across DevOps, AI/ML, Cloud, and Data."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass p-5 hover:border-accent-violet/50 transition group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 group-hover:from-accent-cyan/40 group-hover:to-accent-violet/40 transition">
                <Award size={20} className="text-accent-cyan" />
              </div>
              <span className="text-xs font-mono text-slate-500">{c.year}</span>
            </div>
            <h3 className="font-display text-sm font-semibold text-white leading-snug">
              {c.name}
            </h3>
            <p className="text-xs text-slate-500 mt-2">{c.track}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
