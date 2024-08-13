"use client";

import Container from "../../components/common/container";
import React from "react";
import Sidebar from "~/components/dashboard/layout/sidenav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" w-full min-h-screen bg-neutral-50 text-neutral-900">
        <Sidebar />
        <div className=" pt-8 md:pl-[280px] pl-[80px] w-full flex">
          <Container>{children}</Container>
        </div>
      </div>
    </>
  );
}
