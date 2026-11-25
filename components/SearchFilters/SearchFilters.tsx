"use client";
import { useMemo, useState } from "react";
import styles from "./SearchFilters.module.css";

export type FilterOption = { value: string; label: string; icon?: React.ReactNode };
export type FilterGroup<T> = { key: string; label: string; options: readonly FilterOption[]; matches: (item: T, selectedValues: readonly string[]) => boolean };

export default function SearchFilters<T>({ items, groups, getSearchText, renderItem }: { items: readonly T[]; groups: readonly FilterGroup<T>[]; getSearchText: (item: T) => string; renderItem: (item: T, index: number) => React.ReactNode }) {
  const [query, setQuery] = useState(""); const [open, setOpen] = useState(false); const [selected, setSelected] = useState<Record<string, string[]>>({});
  const toggle = (group: string, value: string) => setSelected((current) => ({ ...current, [group]: current[group]?.includes(value) ? current[group].filter((item) => item !== value) : [...(current[group] ?? []), value] }));
  const active = Object.values(selected).flat();
  const filtered = useMemo(() => items.filter((item) => getSearchText(item).toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()) && groups.every((group) => !selected[group.key]?.length || group.matches(item, selected[group.key]))), [getSearchText, groups, items, query, selected]);
  return <div><div className={styles.toolbar}><button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>Filters {active.length ? <span>{active.length}</span> : null}</button><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" />{!open && active.map((value) => <button className={styles.chip} key={value} type="button" onClick={() => { const group = groups.find((entry) => selected[entry.key]?.includes(value)); if (group) toggle(group.key, value); }}>{value} ×</button>)}</div>
    {open && <div className={styles.panel}>{groups.map((group) => <fieldset key={group.key}><legend>{group.label}</legend><div>{group.options.map((option) => <button key={option.value} type="button" aria-pressed={selected[group.key]?.includes(option.value) ?? false} onClick={() => toggle(group.key, option.value)}>{option.icon}{option.label}</button>)}</div></fieldset>)}<button type="button" onClick={() => setSelected({})}>Clear filters</button></div>}
    <div className={styles.results}>{filtered.map(renderItem)}</div></div>;
}


