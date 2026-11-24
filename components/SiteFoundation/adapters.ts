import { mergeSiteSettings } from "./defaults";
import type { SiteSettings } from "./types";

export interface SiteSettingsAdapter { load(): Promise<SiteSettings>; save(settings: SiteSettings): Promise<void>; }

export function createStaticSettingsAdapter(initial?: Partial<SiteSettings>): SiteSettingsAdapter {
  let settings = mergeSiteSettings(initial);
  return { async load() { return settings; }, async save(next) { settings = mergeSiteSettings(next); } };
}

export function createTinaSettingsAdapter(io: { load(): Promise<Partial<SiteSettings>>; save(settings: SiteSettings): Promise<void> }): SiteSettingsAdapter {
  return { async load() { return mergeSiteSettings(await io.load()); }, save: io.save };
}

type SupabaseLike = { from(table: string): { select(columns: string): { eq(column: string, value: string): { single(): Promise<{ data: { settings?: Partial<SiteSettings> } | null; error: unknown }> } }; upsert(value: unknown): Promise<{ error: unknown }> } };
export function createSupabaseSettingsAdapter(client: SupabaseLike, options: { table?: string; id?: string } = {}): SiteSettingsAdapter {
  const table = options.table ?? "site_settings"; const id = options.id ?? "global";
  return {
    async load() { const { data, error } = await client.from(table).select("settings").eq("id", id).single(); if (error) throw error; return mergeSiteSettings(data?.settings); },
    async save(settings) { const { error } = await client.from(table).upsert({ id, settings, updated_at: new Date().toISOString() }); if (error) throw error; },
  };
}

