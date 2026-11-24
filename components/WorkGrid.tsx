"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const [category, setCategory] = useState("All");
  const visible = useMemo(() => projects.filter((project) => category === "All" || project.category === category).sort((a, b) => b.year - a.year), [category, projects]);
  return <><div className="filter-row" aria-label="Filter projects">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><div className="work-grid">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></>;
}
