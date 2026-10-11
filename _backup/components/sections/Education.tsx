import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeader eyebrow="05 · Education" title="Academic background" />

      <div className="relative border-l-2 border-white/10 ml-4 space-y-12">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-bg-base border-2 border-accent-cyan flex items-center justify-center">
              <GraduationCap size={12} className="text-accent-cyan" />
            </div>
            <p className="text-xs font-mono text-accent-violet mb-1">{e.period}</p>
            <h3 className="font-display text-xl font-semibold text-white">
              {e.degree}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{e.institution}</p>
            <p className="text-slate-500 text-sm mt-1">{e.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
