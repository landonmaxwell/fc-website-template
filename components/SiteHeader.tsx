"use client";
import { usePathname } from "next/navigation";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
export default function SiteHeader() { return <ResponsiveHeader appearance="glass" layout="portfolio" maxWidth="60vw" activeHref={usePathname()} />; }

