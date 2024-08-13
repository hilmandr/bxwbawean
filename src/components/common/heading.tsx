import { HTMLAttributes } from "react";
import React from "react";

type THeadingProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function HeadingTitle({
  children,
  className,
  ...props
}: THeadingProps) {
  return (
    <>
      <div className=" flex flex-col w-full h-full relative" {...props}>
        {children}
      </div>
      <div className=" w-full h-12 bg-contain bg-repeat-x relative z-20  border-dirt-brown bg-[url('/images/border-heading-white.png')] -mt-5"></div>
    </>
  );
}
