create table if not exists public.site_settings (
  id text primary key check (id = 'global'),
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

-- Add project-specific read and administrator write policies before using this
-- table from a browser. SiteFoundation deliberately does not guess your auth roles.

