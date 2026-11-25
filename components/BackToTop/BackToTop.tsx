"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./BackToTop.module.css";

export type BackToTopPreset="tab"|"floating";
export interface BackToTopProps { threshold?:number; label?:string; icon?:ReactNode; className?:string; preset?:BackToTopPreset; }

export function BackToTop({threshold=600,label="Back to top",icon="↑",className="",preset="tab"}:BackToTopProps){
  const[visible,setVisible]=useState(false);
  useEffect(()=>{const update=()=>setVisible(window.scrollY>threshold);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[threshold]);
  const scroll=()=>window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});
  return <button type="button" className={`${styles.button} ${styles[preset]} ${visible?styles.visible:""} ${className}`} onClick={scroll} aria-label={label} title={label}>{icon}</button>;
}

