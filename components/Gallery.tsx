"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

type Image = NonNullable<Project["gallery"]>[number];

export default function Gallery({ images }: { images: Image[] }) {
  const [selected, setSelected] = useState<Image | null>(null);
  useEffect(() => { if (!selected) return; const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null); addEventListener("keydown", close); return () => removeEventListener("keydown", close); }, [selected]);
  return <><div className="gallery">{images.map((image) => <button key={image.src} style={{ flexGrow: image.width / image.height, aspectRatio: `${image.width}/${image.height}` }} onClick={() => setSelected(image)} aria-label={`Open ${image.alt}`}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 700px) 100vw, 40vw"/></button>)}</div>{selected && <div className="lightbox" role="dialog" aria-modal="true" onPointerDown={(event) => event.currentTarget === event.target && setSelected(null)}><button onClick={() => setSelected(null)} aria-label="Close image">×</button><Image src={selected.src} alt={selected.alt} width={selected.width} height={selected.height}/></div>}</>;
}
