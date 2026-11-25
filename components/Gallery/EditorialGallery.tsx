"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./EditorialGallery.module.css";

export type GalleryImage = { src: string; alt: string; width: number; height: number };
export type GalleryLayout = "dynamic" | "three-column" | "three-plus-one";

function mostlyMatchingRatios(images: readonly GalleryImage[]) {
  if (images.length < 8) return false;
  const ratios = images.map((image) => image.width / image.height);
  const average = ratios.reduce((sum, ratio) => sum + ratio, 0) / ratios.length;
  return ratios.filter((ratio) => Math.abs(ratio - average) / average < 0.08).length >= images.length * 0.75;
}

function makeRows(images: readonly GalleryImage[], width: number, layout: GalleryLayout) {
  if (!width) return images.map((image) => [image]);
  if (width < 640) return images.map((image) => [image]);
  if (layout === "three-column") {
    const rows: GalleryImage[][] = [];
    for (let index = 0; index < images.length; index += 3) rows.push(images.slice(index, index + 3));
    return rows;
  }
  if (layout === "three-plus-one") return [images.slice(0, 3), images.slice(3)].filter((row) => row.length);
  if (mostlyMatchingRatios(images)) {
    const rhythm = [1, 3, 2, 3, 1, 2];
    const rows: GalleryImage[][] = [];
    for (let index = 0, step = 0; index < images.length; step += 1) {
      const size = Math.min(rhythm[step % rhythm.length], images.length - index);
      rows.push(images.slice(index, index + size));
      index += size;
    }
    return rows;
  }

  const rows: GalleryImage[][] = [];
  let row: GalleryImage[] = [];
  let ratios = 0;
  for (const image of images) {
    row.push(image);
    ratios += image.width / image.height;
    if (ratios * 300 + (row.length - 1) * 16 >= width * 0.92) {
      rows.push(row);
      row = [];
      ratios = 0;
    }
  }
  if (row.length) rows.push(row);
  return rows;
}

export default function EditorialGallery({ images, layout = "dynamic" }: { images: readonly GalleryImage[]; layout?: GalleryLayout }) {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!container.current) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  const rows = useMemo(() => makeRows(images, width, layout), [images, layout, width]);

  return <>
    <div ref={container} className={styles.gallery}>
      {rows.map((row, rowIndex) => {
        const gap = 16 * Math.max(0, row.length - 1);
        const ratio = row.reduce((sum, image) => sum + image.width / image.height, 0);
        const height = Math.min((width - gap) / ratio, ...row.map((image) => image.height));
        return <div className={styles.row} key={`${rowIndex}-${row[0].src}`} style={{ height }}>
          {row.map((image) => <button
            key={image.src}
            type="button"
            className={styles.imageButton}
            style={{ width: Math.min(height * image.width / image.height, image.width) }}
            onClick={() => setSelected(image)}
            aria-label={`Open full-size image: ${image.alt}`}
          ><img src={image.src} alt={image.alt} className={styles.image} /></button>)}
        </div>;
      })}
    </div>
    {selected && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={selected.alt} onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
      <button className={styles.close} type="button" onClick={() => setSelected(null)} aria-label="Close image">×</button>
      <img src={selected.src} alt={selected.alt} className={styles.fullImage} style={{ maxWidth: selected.width, maxHeight: selected.height }} />
      <p>{selected.alt}</p>
    </div>}
  </>;
}


