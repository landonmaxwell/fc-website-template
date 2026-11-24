import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link className={`project-card ${featured ? "featured" : ""}`} href={`/work/${project.slug}`} style={{ "--project-accent": project.accent } as React.CSSProperties}>
    <div className="project-image">{project.heroImage && <Image src={project.heroImage} alt="" fill sizes={featured ? "(max-width: 1100px) 100vw, 60vw" : "(max-width: 700px) 100vw, 30vw"} />}</div>
    <div className="project-card-copy"><span>{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><small>View project</small></div>
  </Link>;
}
