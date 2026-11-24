import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import JsonLd from "@/components/JsonLd";
import { projectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const generateStaticParams = () => projects.map((project) => ({ slug: project.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = projectBySlug((await params).slug);
  if (!project) return {};
  const title = project.metadataTitle ?? `${project.title} | ${siteConfig.identity.name}`;
  const description = project.metadataDescription ?? project.summary;
  const image = project.socialImage ?? project.heroImage ?? siteConfig.seo.globalSocialImage;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description, url: `/work/${project.slug}`, siteName: siteConfig.identity.name, locale: siteConfig.identity.locale, type: "website", images: [{ url: image, width: 1200, height: 630, alt: `${project.title} social preview` }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = projectBySlug((await params).slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];
  const canonicalUrl = `${siteConfig.identity.siteUrl}/work/${project.slug}`;
  const description = project.metadataDescription ?? project.summary;
  const socialImage = project.socialImage ?? project.heroImage ?? siteConfig.seo.globalSocialImage;
  const videoUrl = project.video?.platform === "youtube" ? `https://www.youtube.com/watch?v=${project.video.id}` : project.video ? `https://vimeo.com/${project.video.id}` : undefined;
  const embedUrl = project.video?.platform === "youtube" ? `https://www.youtube.com/embed/${project.video.id}` : project.video ? `https://player.vimeo.com/video/${project.video.id}` : undefined;
  return <main className="project-page" style={{ "--project-accent": project.accent } as React.CSSProperties}><JsonLd data={[
    { "@context": "https://schema.org", "@type": "CreativeWork", "@id": `${canonicalUrl}#creativework`, url: canonicalUrl, name: project.title, description, image: `${siteConfig.identity.siteUrl}${socialImage}`, temporalCoverage: String(project.year), genre: project.category, keywords: project.services.join(", "), creator: { "@id": `${siteConfig.identity.siteUrl}/#owner` }, inLanguage: siteConfig.identity.language },
    ...(project.video ? [{ "@context": "https://schema.org", "@type": "VideoObject", "@id": `${canonicalUrl}#video`, name: project.title, description, thumbnailUrl: [`${siteConfig.identity.siteUrl}${socialImage}`], uploadDate: project.video.uploadDate, duration: project.video.duration, embedUrl, contentUrl: videoUrl, inLanguage: siteConfig.identity.language }] : []),
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.identity.siteUrl }, { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.identity.siteUrl}/work` }, { "@type": "ListItem", position: 3, name: project.title, item: canonicalUrl }] },
  ]} /><header className="project-header"><span>{project.category}</span><h1>{project.title}</h1><p>{project.summary}</p><div><span>{project.year}</span>{project.services.map((service) => <span key={service}>{service}</span>)}</div></header><div className="project-hero">{project.heroImage ? <Image src={project.heroImage} alt={`${project.title} hero`} width={1920} height={1080} sizes="(max-width: 1100px) 100vw, 60vw"/> : <span>{project.title}</span>}</div><section className="project-story"><aside><span>Services</span>{project.services.map((service) => <p key={service}>{service}</p>)}</aside><div><article><span>The project</span><p>{project.introduction}</p></article><article><span>The approach</span><p>{project.approach}</p></article><article><span>The outcome</span><p>{project.outcome}</p></article>{project.externalLinks?.length && <div className="external-links">{project.externalLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}</div></section>{project.gallery?.length && <section className="gallery-section"><header><span>Gallery</span><h2>Inside the work.</h2></header><Gallery images={project.gallery}/></section>}<Link className="next-project" href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}</strong></Link></main>;
}
