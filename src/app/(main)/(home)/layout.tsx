import { ReactNode } from "react";
import React from "react";
import Container from "~/components/common/container";
import Hero from "~/components/home/hero";

interface HomeLayoutProps {
  children: ReactNode;
  layanan: ReactNode;
  dailyReport: ReactNode;
  berita: ReactNode;
  pengaduan: ReactNode;
  faq: ReactNode;
}

export default function HomeLayout({ children, layanan, dailyReport, berita, faq, pengaduan }: HomeLayoutProps) {
  return (
    <>
      <Hero />
        {children}
        {layanan}
        {dailyReport}
        {berita}
        {pengaduan}
        {faq}
    </>
  );
}
