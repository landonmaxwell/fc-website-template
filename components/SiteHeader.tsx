"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSiteSettings } from "@/components/SiteFoundation";

export default function SiteHeader() {
  const settings = useSiteSettings();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => !header.current?.contains(event.target as Node) && setOpen(false);
    const escape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); };
  }, [open]);

  return <header ref={header} className="site-header">
    <Link className="brand" href={settings.identity.homeHref} aria-label={`${settings.identity.name} home`}><span>{settings.identity.shortName}</span><strong>{settings.identity.name}</strong></Link>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><i/><i/><span>Menu</span></button>
    <nav id="main-navigation" className={open ? "open" : ""} aria-label="Main navigation">{settings.navigation.primary.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
  </header>;
}
