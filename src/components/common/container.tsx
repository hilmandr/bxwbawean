"use client";

import React, { HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type TContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
  ...props
}: TContainerProps) {
  return (
    <>
      <div className={cn("container mx-auto w-full", className)} {...props}>
        {children}
      </div>
    </>
  );
}
