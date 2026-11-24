import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.seo.workTitle },
  description: siteConfig.seo.workDescription,
  alternates: { canonical: "/work" },
  openGraph: { title: siteConfig.seo.workTitle, description: siteConfig.seo.workDescription, url: "/work", siteName: siteConfig.identity.name, locale: siteConfig.identity.locale, type: "website", images: [{ url: siteConfig.seo.workSocialImage, width: 1200, height: 630, alt: `${siteConfig.identity.name} selected work` }] },
  twitter: { card: "summary_large_image", title: siteConfig.seo.workTitle, description: siteConfig.seo.workDescription, images: [siteConfig.seo.workSocialImage] },
};

export default function WorkPage() {
  return <main className="interior-page"><JsonLd data={[
    { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${siteConfig.identity.siteUrl}/work#page`, url: `${siteConfig.identity.siteUrl}/work`, name: siteConfig.seo.workTitle, description: siteConfig.seo.workDescription, isPartOf: { "@id": `${siteConfig.identity.siteUrl}/#website` } },
    { "@context": "https://schema.org", "@type": "ItemList", name: `${siteConfig.identity.name} selected work`, itemListElement: projects.map((project, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteConfig.identity.siteUrl}/work/${project.slug}`, name: project.title })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.identity.siteUrl }, { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.identity.siteUrl}/work` }] },
  ]} /><header className="page-intro"><span>Work</span><h1>What have we been up to?</h1><p>Use this page to bring together projects across different services, disciplines or parts of the business.</p></header><WorkGrid projects={projects}/></main>;
}
