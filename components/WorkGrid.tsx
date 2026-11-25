"use client";
import SearchFilters from "./SearchFilters/SearchFilters";
import type { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
export default function WorkGrid({ projects }: { projects: Project[] }) {
return <div className="work-search"><SearchFilters items={[...projects].sort((a,b) => b.year-a.year)} getSearchText={project => [project.title, project.summary, project.category, ...project.services].join(" ")} groups={[{key:"category",label:"Category",options:[...new Set(projects.map(p=>p.category))].map(value=>({value,label:value})),matches:(project,values)=>values.includes(project.category)}]} renderItem={project=><ProjectCard key={project.slug} project={project}/>}/></div>;
}

