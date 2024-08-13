import { HTMLAttributes } from "react";
import React from "react";

type THeadingProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function PpidHeadingTitle({
  children,
  className,
  ...props
}: THeadingProps) {
  return (
    <>
      <div className=" flex flex-col w-full h-full relative" {...props}>
        {children}
      </div>
      <div className=" w-full h-48 relative z-20 bg-[url('/images/wave.svg')] bg-cover bg-center -mt-48"></div>
    </>
  );
}
