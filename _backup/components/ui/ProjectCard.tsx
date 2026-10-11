import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-violet rounded-2xl blur opacity-30 group-hover:opacity-60 transition" />
        <div className="relative glass overflow-hidden rounded-2xl aspect-video">
          {project.images[0] ? (
            <img
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-600">
              <Sparkles size={40} />
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-xs font-mono text-accent-violet mb-2">
          {project.year} · Featured
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-5">{project.description}</p>

        <ul className="space-y-2 mb-5">
          {project.highlights.map((h) => (
            <li key={h} className="text-sm text-slate-300 flex gap-2">
              <span className="text-accent-cyan mt-1">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/15 hover:bg-white/10 text-slate-200 transition"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-base font-semibold hover:opacity-90 transition"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
