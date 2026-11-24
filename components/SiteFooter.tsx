"use client";

import Link from "next/link";
import { useSiteSettings } from "@/components/SiteFoundation";

export default function SiteFooter() {
  const settings = useSiteSettings();
  return <footer className="site-footer"><span>© {new Date().getFullYear()} {settings.identity.name}</span><div>{settings.social.map((item) => <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>)}{settings.footer.legalLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></footer>;
}
