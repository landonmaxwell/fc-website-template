"use client";
import { useEffect, useState } from "react";
import { defaultSiteSettings } from "./defaults";
import type { SiteSettingsAdapter } from "./adapters";
import type { SiteSettings } from "./types";
import { SiteSettingsForm } from "./SiteSettingsForm";
import { SiteAdminGate, type SiteAdminAccess } from "./SiteAdminGate";

function SiteSettingsEditor({ adapter }: { adapter: SiteSettingsAdapter }) {
  const [settings,setSettings]=useState<SiteSettings>(defaultSiteSettings); const [status,setStatus]=useState("Loading settings");
  useEffect(()=>{adapter.load().then(value=>{setSettings(value);setStatus("");}).catch(()=>setStatus("Settings could not be loaded."));},[adapter]);
  return <main><h1 className="siteFoundationContent">Site settings</h1>{status?<p className="siteFoundationContent" role="status">{status}</p>:null}<SiteSettingsForm value={settings} onChange={setSettings} onSave={async next=>{setStatus("Saving");try{await adapter.save(next);setStatus("Saved");}catch{setStatus("Settings could not be saved.");}}}/></main>;
}

export function SiteSettingsPage({ adapter, access = { mode: "disabled" } }: { adapter: SiteSettingsAdapter; access?: SiteAdminAccess }) {
  return <SiteAdminGate access={access}><SiteSettingsEditor adapter={adapter} /></SiteAdminGate>;
}

