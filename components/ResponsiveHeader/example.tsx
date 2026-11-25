import ResponsiveHeader from "./ResponsiveHeader";

export default function Example() {
  return <ResponsiveHeader
    logo="/logo.svg"
    logoAlt="Example site home"
    layout="portfolio"
    contentWidth="portfolio"
    appearance="glass"
    navigation={[
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ]}
    socialLinks={[
      { label: "Instagram", href: "https://www.instagram.com/example", icon: "/icons/instagram.svg", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/example", icon: "/icons/linkedin.svg", external: true },
      { label: "Email", href: "mailto:hello@example.com", icon: "/icons/mail.svg" },
    ]}
  />;
}

