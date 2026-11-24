export type Project = {
  slug: string;
  title: string;
  category: string;
  year: number;
  summary: string;
  services: string[];
  featured?: boolean;
  accent: string;
  heroImage?: string;
  socialImage?: string;
  metadataTitle?: string;
  metadataDescription?: string;
  video?: {
    platform: "youtube" | "vimeo";
    id: string;
    uploadDate: string;
    duration: string;
  };
  introduction: string;
  approach: string;
  outcome: string;
  gallery?: { src: string; alt: string; width: number; height: number }[];
  externalLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    category: "Brand and campaign",
    year: 2026,
    summary: "A concise result-led description of the project.",
    services: ["Strategy", "Creative direction", "Production"],
    featured: true,
    accent: "#8b5cf6",
    introduction: "Explain the context, the client and the problem that made this project worth doing.",
    approach: "Describe the decisions, collaboration and craft that shaped the work.",
    outcome: "Summarise the result, response or useful thing that changed.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Digital product",
    year: 2025,
    summary: "A useful digital experience made simple and inviting.",
    services: ["Design", "Development"],
    accent: "#10b981",
    introduction: "Set up the challenge and who the project needed to serve.",
    approach: "Explain how the experience was structured and refined.",
    outcome: "Add a measurable result when one is available.",
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Photography",
    year: 2025,
    summary: "A visual story built around people, place and atmosphere.",
    services: ["Photography", "Art direction"],
    accent: "#e8793e",
    introduction: "Introduce the subject and visual intention.",
    approach: "Describe the location, lighting and collaborative process.",
    outcome: "Explain where the work appeared and what it achieved.",
  },
  {
    slug: "project-four",
    title: "Project Four",
    category: "Film",
    year: 2024,
    summary: "A film project balancing story, pace and a distinct visual language.",
    services: ["Direction", "Editing"],
    featured: true,
    accent: "#ec4899",
    introduction: "Introduce the story, audience and production context.",
    approach: "Explain the creative and technical choices that mattered most.",
    outcome: "Describe the release, audience response or next life of the project.",
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
