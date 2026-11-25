import { BackToTop } from "./BackToTop";
export function TabExample(){return <BackToTop preset="tab" threshold={500} icon={<span aria-hidden>↑</span>}/>}
export function FloatingExample(){return <BackToTop preset="floating" threshold={500} icon={<span aria-hidden>↑</span>}/>}

