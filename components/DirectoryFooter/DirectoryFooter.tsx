"use client";
import type { CSSProperties } from "react";
import styles from "./DirectoryFooter.module.css";
import { socialLinksForProfile, useOptionalSiteSettings, type ContactProfileId } from "../SiteFoundation";

export type DirectoryFooterLink = { label: string; href: string };
export type DirectoryFooterColumn = DirectoryFooterLink & { links: readonly DirectoryFooterLink[] };
export type DirectoryFooterSocialLink = DirectoryFooterLink & { icon?: string; external?: boolean };

export interface DirectoryFooterProps {
  brandName?: string; homeIcon?: string; columns?: readonly DirectoryFooterColumn[]; socialLinks?: readonly DirectoryFooterSocialLink[]; legalLinks?: readonly DirectoryFooterLink[];
  homeHref?: string;
  year?: number;
  directoryLabel?: string;
  socialLabel?: string;
  socialProfile?: ContactProfileId;
  legalLabel?: string;
  className?: string;
  creditLabel?: string;
  creditHref?: string;
}

export default function DirectoryFooter({ brandName, homeIcon, columns, socialLinks, legalLinks, homeHref, year = new Date().getFullYear(), directoryLabel = "Footer directory", socialLabel = "Social media and contact", socialProfile, legalLabel = "Legal", className = "", creditLabel, creditHref }: DirectoryFooterProps) {
  const site=useOptionalSiteSettings(); const name=brandName??site?.identity.name??"Site"; const icon=homeIcon??site?.identity.favicon??site?.identity.logo??""; const home=homeHref??site?.identity.homeHref??"/"; const groups=columns??site?.footer.groups??[]; const socials=socialLinks??(site?socialLinksForProfile(site,socialProfile):[]); const legal=legalLinks??site?.footer.legalLinks??[]; const credit=creditLabel??site?.footer.creditLabel??""; const creditUrl=creditHref??site?.footer.creditHref??"";
  const columnStyle = { "--directory-footer-columns": Math.max(groups.length,1) } as CSSProperties;

  return <footer className={`${styles.footer} ${className}`}>
    <div className={styles.directory}>
      <div className={styles.trail}>
        <a className={styles.home} href={home} aria-label={`${name} home`}>{icon?<img src={icon} alt=""/>:<span aria-hidden="true">⌂</span>}</a>
        <span aria-hidden="true">›</span>
        <a className={styles.brandLink} href={home}>{name}</a>
      </div>

      <nav className={styles.columns} style={columnStyle} aria-label={directoryLabel}>
        {groups.map((column) => <section key={`${column.label}-${column.href}`}>
          <a className={styles.category} href={column.href}>{column.label}</a>
          <ul>{column.links.map((link) => <li key={`${link.label}-${link.href}`}><a href={link.href}>{link.label}</a></li>)}</ul>
        </section>)}
      </nav>
    </div>

    <div className={styles.base}>
      <span className={styles.copyright}>© {year} <a href={home}>{name}</a>{credit&&creditUrl?<><span aria-hidden="true"> | </span><a href={creditUrl} target="_blank" rel="noopener noreferrer">{credit}</a></>:null}</span>
      <div className={styles.socials} aria-label={socialLabel}>{socials.map((item) => <a key={`${item.label}-${item.href}`} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} aria-label={item.label} title={item.label}>{item.icon?<span aria-hidden="true" style={{ WebkitMask: `url(${item.icon}) center / contain no-repeat`, mask: `url(${item.icon}) center / contain no-repeat` }}/>:<span className={styles.socialLabel}>{item.label}</span>}</a>)}</div>
      <nav className={styles.legal} aria-label={legalLabel}>{legal.map((link) => <a key={`${link.label}-${link.href}`} href={link.href}>{link.label}</a>)}</nav>
    </div>
  </footer>;
}

