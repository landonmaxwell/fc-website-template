import type { ReactNode } from "react";
import styles from "./ProjectCaseStudy.module.css";

export type NarrativeLink = { phrase: string; url: string };
export type ProjectCaseStudyData = {
  title: string; summary: string; category: string; year: string; client?: string;
  roles: readonly string[]; introduction: string; approach: string; outcome?: string;
  textLinks?: readonly NarrativeLink[];
};

function linkedText(text: string, links: readonly NarrativeLink[] = []) {
  const matches = links.map((link) => ({ ...link, index: text.indexOf(link.phrase) })).filter((link) => link.index >= 0).sort((a, b) => a.index - b.index);
  const result: ReactNode[] = []; let cursor = 0;
  for (const link of matches) { if (link.index < cursor) continue; result.push(text.slice(cursor, link.index), <a key={`${link.phrase}-${link.url}`} href={link.url} target="_blank" rel="noreferrer">{link.phrase}</a>); cursor = link.index + link.phrase.length; }
  result.push(text.slice(cursor)); return result;
}

export default function ProjectCaseStudy({ project, hero, publishedWork, gallery, nextProject }: { project: ProjectCaseStudyData; hero?: ReactNode; publishedWork?: ReactNode; gallery?: ReactNode; nextProject?: ReactNode }) {
  return <article className={styles.page}>
    <header className={styles.header}><p>{project.category}</p><h1>{project.title}</h1><p className={styles.summary}>{project.summary}</p><dl><dt>Year</dt><dd>{project.year}</dd>{project.client && <><dt>Client</dt><dd>{project.client}</dd></>}</dl></header>
    {hero}<section className={styles.story}><aside><p>My role</p><ul>{project.roles.map((role) => <li key={role}>{role}</li>)}</ul></aside><div className={styles.narrative}>
      <section><p className={styles.label}>The project</p><p className={styles.lead}>{linkedText(project.introduction, project.textLinks)}</p></section>
      <section><p className={styles.label}>The approach</p><p>{linkedText(project.approach, project.textLinks)}</p></section>
      {project.outcome && <section><p className={styles.label}>What remained</p><p>{linkedText(project.outcome, project.textLinks)}</p></section>}
    </div></section>{publishedWork}{gallery}{nextProject}
  </article>;
}


