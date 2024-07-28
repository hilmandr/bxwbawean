import { ReactNode } from "react";
import React from "react";

import Container from "~/components/common/container";
import Hero from "~/components/home/hero";

interface HomeLayoutProps {
  children: ReactNode;
  layanan: ReactNode;
  dailyReport: ReactNode;
  berita: ReactNode;
  faq: ReactNode;
}

export default function HomeLayout({
  children,
  berita,
  layanan,
  dailyReport,
  faq,
}: HomeLayoutProps) {
  return (
    <>
      <Hero />
      <Container>
        {children}
        {layanan}
        {dailyReport}
        {berita}
        {faq}
      </Container>
    </>
  );
}
