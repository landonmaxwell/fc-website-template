import DirectoryFooter from "./DirectoryFooter";

export default function DirectoryFooterExample() {
  return <DirectoryFooter
    brandName="Example Studio"
    homeIcon="/brand/favicon.svg"
    columns={[
      { label: "Websites", href: "/websites", links: [{ label: "Basic websites", href: "/websites/basic" }, { label: "Website and content", href: "/websites/content" }] },
      { label: "Video", href: "/media", links: [{ label: "Music videos", href: "/media/music-videos" }, { label: "Promotional videos", href: "/media/promotional" }] },
      { label: "Photography", href: "/media", links: [{ label: "Portraits", href: "/media/portraits" }, { label: "Events", href: "/media/events" }] },
      { label: "Games", href: "/games", links: [{ label: "Announcement trailers", href: "/games/announcement" }, { label: "Launch trailers", href: "/games/launch" }] },
    ]}
    socialLinks={[
      { label: "Instagram", href: "https://www.instagram.com/example", icon: "/icons/instagram.svg", external: true },
      { label: "Email", href: "mailto:hello@example.com", icon: "/icons/mail.svg" },
    ]}
    legalLinks={[{ label: "Privacy Policy", href: "/privacy" }]}
    creditLabel="Site design by Froghat Creative"
    creditHref="https://froghatcreative.com/"
  />;
}

