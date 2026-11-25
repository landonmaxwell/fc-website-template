import type { ReactNode } from "react";
import styles from "./SelectedWorkPanel.module.css";

export type WorkItem = { id: string; featured?: boolean };

function seededRandom(seed: number) {
  let value = seed || 1;
  return () => ((value = value * 16807 % 2147483647) - 1) / 2147483646;
}

function shuffled<T>(items: readonly T[], seed: number) {
  const result = [...items];
  const random = seededRandom(seed);
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

export function selectWork<T extends WorkItem>(items: readonly T[], seed = 1) {
  const featured = shuffled(items.filter((item) => item.featured), seed).slice(0, 2);
  const used = new Set(featured.map((item) => item.id));
  const standard = shuffled(items.filter((item) => !item.featured && !used.has(item.id)), seed + 17).slice(0, 4);
  return [featured[0], ...standard, featured[1]].filter((item): item is T => Boolean(item));
}

export default function SelectedWorkPanel<T extends WorkItem>({ title = "Selected Work", description, items, seed = 1, renderItem, footer }: { title?: string; description?: string; items: readonly T[]; seed?: number; renderItem: (item: T, options: { featured: boolean; index: number }) => ReactNode; footer?: ReactNode }) {
  const selected = selectWork(items, seed);
  return <section className={styles.section}><div className={styles.inner}>
    <header><h2>{title}</h2>{description && <p>{description}</p>}</header>
    <div className={styles.grid}>{selected.map((item, index) => <div key={item.id} className={(index === 0 || index === selected.length - 1) ? styles.featured : styles.standard}>{renderItem(item, { featured: index === 0 || index === selected.length - 1, index })}</div>)}</div>
    {footer}
  </div></section>;
}


