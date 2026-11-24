import { SiteSettingsPage, createStaticSettingsAdapter } from "./index";
import { siteSettings } from "./static-settings.example";

const adapter = createStaticSettingsAdapter(siteSettings);

export function LocalSiteSettingsPage({ isDevelopment }: { isDevelopment: boolean }) {
  return <SiteSettingsPage
    adapter={adapter}
    access={{ mode: "local", isDevelopment }}
  />;
}

// For TinaCMS, Supabase, or custom authentication, calculate `authorized` on
// the server and pass only the resulting boolean to the client component.
// The same server-side check must also protect every settings write endpoint.

