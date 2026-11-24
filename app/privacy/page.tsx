import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <main className="legal-page"><span>Privacy</span><h1>A simple privacy starting point.</h1><p>This website may collect information you deliberately provide by email or through a future contact form. Replace this page with advice appropriate to the website, its location and any analytics, advertising, account or form services you add.</p><p>Contact: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p></main>;
}
