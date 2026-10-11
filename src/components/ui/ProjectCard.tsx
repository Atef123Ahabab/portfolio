import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative overflow-hidden bg-bg-card border border-white/10 aspect-video">
        {project.images[0] ? (
          <img
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-500 font-mono text-xs uppercase tracking-widest">
            {project.title}
          </div>
        )}
      </div>

      <div>
        <h3 className="font-display text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-ink-400 leading-relaxed mb-6">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="text-sm text-ink-300 flex gap-3">
              <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent transition"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent transition"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
