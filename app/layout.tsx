import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BackToTop from "@/components/BackToTop";
import { SiteSettingsProvider } from "@/components/SiteFoundation";
import { siteConfig } from "@/data/site";
import { siteFoundationSettings } from "@/data/site-foundation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.identity.siteUrl),
  title: { default: siteConfig.identity.name, template: `%s | ${siteConfig.identity.name}` },
  description: siteConfig.identity.description,
  applicationName: siteConfig.identity.name,
  verification: siteConfig.seo.googleSiteVerification ? { google: siteConfig.seo.googleSiteVerification } : undefined,
  openGraph: { title: siteConfig.identity.name, description: siteConfig.identity.description, url: siteConfig.identity.siteUrl, siteName: siteConfig.identity.name, type: "website", locale: siteConfig.identity.locale, images: [{ url: siteConfig.seo.globalSocialImage, width: 1200, height: 630, alt: `${siteConfig.identity.name} social preview` }] },
  twitter: { card: "summary_large_image", title: siteConfig.identity.name, description: siteConfig.identity.description, images: [siteConfig.seo.globalSocialImage] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang={siteConfig.identity.language}><body className={inter.variable}><SiteSettingsProvider settings={siteFoundationSettings}><SiteHeader/>{children}<SiteFooter/><BackToTop/></SiteSettingsProvider></body></html>;
}
