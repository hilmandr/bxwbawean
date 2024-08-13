"use client";

import LenisScroll from "./lenis-scroll";



export default function Providers({ children }: { children: React.ReactNode }) {
  return <LenisScroll>{children}</LenisScroll>;
}
