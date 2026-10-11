import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="03 · Projects"
        title="Things I've built"
        subtitle="A selection of work spanning AI, full-stack engineering, and applied ML."
      />

      <div className="space-y-24">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
