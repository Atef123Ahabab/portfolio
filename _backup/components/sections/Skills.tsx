import { motion } from "framer-motion";
import { skillGroups } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="02 · Skills"
        title="What I work with"
        subtitle="A toolkit spanning testing, automation, full-stack development, cloud, and DevOps."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass p-6 hover:border-accent-cyan/40 transition"
          >
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 hover:border-accent-cyan/50 hover:text-white transition"
                >
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
