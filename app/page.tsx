import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.homeTitle },
  description: siteConfig.identity.description,
  alternates: { canonical: "/" },
  openGraph: { title: siteConfig.seo.homeTitle, description: siteConfig.identity.description, url: "/", siteName: siteConfig.identity.name, locale: siteConfig.identity.locale, type: "website", images: [{ url: siteConfig.seo.globalSocialImage, width: 1200, height: 630, alt: `${siteConfig.identity.name} social preview` }] },
  twitter: { card: "summary_large_image", title: siteConfig.seo.homeTitle, description: siteConfig.identity.description, images: [siteConfig.seo.globalSocialImage] },
};

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 2);
  const standard = projects.filter((project) => !project.featured).slice(0, 4);
  const selected = [featured[0], ...standard, featured[1]].filter(Boolean);
  return <main>
    <JsonLd data={[
      { "@context": "https://schema.org", "@type": "WebSite", "@id": `${siteConfig.identity.siteUrl}/#website`, url: siteConfig.identity.siteUrl, name: siteConfig.identity.name, description: siteConfig.identity.description, inLanguage: siteConfig.identity.language, publisher: { "@id": `${siteConfig.identity.siteUrl}/#owner` } },
      { "@context": "https://schema.org", "@type": siteConfig.seo.ownerType, "@id": `${siteConfig.identity.siteUrl}/#owner`, name: siteConfig.identity.name, url: siteConfig.identity.siteUrl, description: siteConfig.identity.description, location: siteConfig.identity.location, sameAs: siteConfig.social.map((item) => item.href) },
    ]} />
    <section className="hero" id="top"><div className="hero-media">{siteConfig.hero.image && <Image src={siteConfig.hero.image} alt="" fill priority sizes="100vw"/>}{siteConfig.hero.video && <video autoPlay muted loop playsInline poster={siteConfig.hero.image}><source src={siteConfig.hero.video}/></video>}</div><div className="hero-overlay"/><div className="hero-copy"><span>{siteConfig.hero.eyebrow}</span><h1>{siteConfig.hero.heading}</h1><p>{siteConfig.hero.body}</p><div><Link className="button primary" href={siteConfig.hero.primaryAction.href}>{siteConfig.hero.primaryAction.label}</Link><Link className="button" href={siteConfig.hero.secondaryAction.href}>{siteConfig.hero.secondaryAction.label}</Link></div></div></section>
    <section className="section selected-work"><header className="section-heading"><span>Selected work</span><h2>A few things worth seeing.</h2></header><div className="selected-grid">{selected.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0 || index === selected.length - 1}/>)}</div><Link className="large-link" href="/work">View all work →</Link></section>
    <section className="partner-section" aria-label="Clients and collaborators"><p>Selected clients, collaborators and partners</p><div className="marquee"><div>{[...siteConfig.partners, ...siteConfig.partners].map((partner, index) => <span key={`${partner}-${index}`} aria-hidden={index >= siteConfig.partners.length || undefined}>{partner}</span>)}</div></div></section>
    <section className="section split" id="about"><span className="section-label">About</span><div><h2>{siteConfig.about.heading}</h2><p>{siteConfig.about.body}</p></div></section>
    <section className="section" id="services"><header className="section-heading"><span>Capabilities</span><h2>Ways we can work together.</h2></header><div className="services">{siteConfig.services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></section>
    {siteConfig.testimonials.enabled && <section className="section testimonials"><span className="section-label">Kind words</span>{siteConfig.testimonials.items.map((item) => <blockquote key={item.name}><p>“{item.quote}”</p><footer>{item.name}<span>{item.role}</span></footer></blockquote>)}</section>}
    <section className="contact-section" id="contact"><div><span>Contact</span><h2>{siteConfig.contact.heading}</h2><p>{siteConfig.contact.body}</p><a className="button primary" href={`mailto:${siteConfig.contact.email}`}>Get in touch</a></div></section>
  </main>;
}
