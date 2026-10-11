import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeader from "../ui/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader eyebrow="Work" title="My work" />
      <div className="space-y-32">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
