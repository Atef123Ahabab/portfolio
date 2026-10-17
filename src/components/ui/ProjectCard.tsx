import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "../../data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  
  // Carousel State
  const [currentImg, setCurrentImg] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

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
      <div className="relative group overflow-hidden bg-bg-card border border-white/10 aspect-video">
        {project.featured && (
          <span className="absolute top-3 left-3 z-20 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-accent/90 text-white">
            Featured
          </span>
        )}
        
        {/* Image Carousel */}
        {project.images.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={project.images[currentImg]}
                alt={`${project.title} - screenshot ${currentImg + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
                className="w-full h-full object-cover absolute inset-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </AnimatePresence>

            {/* Navigation Arrows (Only show if more than 1 image) */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-accent/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-accent/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.preventDefault(); setCurrentImg(i); }}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        i === currentImg ? "bg-accent w-4" : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
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