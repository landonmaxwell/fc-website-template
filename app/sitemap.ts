import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = siteConfig.identity.siteUrl;
  return [
    { url: root, changeFrequency: "monthly", priority: 1, images: [new URL(siteConfig.seo.globalSocialImage, root).toString()] },
    { url: `${root}/work`, changeFrequency: "monthly", priority: .8, images: [new URL(siteConfig.seo.workSocialImage, root).toString()] },
    ...projects.map((project) => {
      const image = project.socialImage ?? project.heroImage;
      return { url: `${root}/work/${project.slug}`, changeFrequency: "yearly" as const, priority: .7, images: image ? [new URL(image, root).toString()] : undefined };
    }),
  ];
}
