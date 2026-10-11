import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="Skills"
        title="What I work with"
        subtitle="A toolkit spanning testing, automation, full-stack engineering, cloud, and DevOps."
      />

      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 items-start border-t border-white/10 pt-8"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-400 pt-1">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
