"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { signOut } from "next-auth/react";
import { Button } from "../../ui/button";
import React from "react";
import { SIDENAV } from "~/lib/constant";

export default function Sidebar() {
  const pathname = usePathname();
  const SidebarNav = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <aside className=" md:flex h-screen fixed z-[12] left-0 w-[280px] bg-white border-r shadow-sm flex-col hidden">
        <div className=" h-full py-2 lg:py-4 pr-4 w-full flex-1">
          <div className=" flex w-full items-center justify-center">
            <div className=" flex relative w-full aspect-[2.3/2] max-w-20 items-center justify-center mt-2">
              <Image
                src="/images/logo-ht.png"
                alt=""
                fill
                className=" object-cover object-center w-full h-full items-center justify-center"
              />
            </div>
          </div>
          <div className=" flex-col gap-2 flex mt-8">
            {SIDENAV.map((sidemenu) => (
              <>
                <Link href={sidemenu.path} className=" text-sm text-white">
                  <div
                    className={cn(
                      " flex w-full items-center gap-6 p-5 pl-8 rounded-r-full duration-300 transform transition-all bg-slate-100 hover:bg-[#162479] hover:text-slate-50 text-slate-900",
                      {
                        "bg-[#162479] text-slate-50":
                          pathname.split("/")[2] == sidemenu.path.split("/")[2],
                      }
                    )}
                  >
                    <sidemenu.icon size={25} variant="Bold" />
                    <h2>{sidemenu.title}</h2>
                  </div>
                </Link>
              </>
            ))}
          </div>
          <div className=" flex flex-col gap-2 w-64 items-center justify-center bg-slate-50 ml-2 mt-10 rounded-xl py-6">
            <div className=" flex w-14 h-14 bg-black rounded-full text-white items-center justify-center">
              <span>AA</span>
            </div>
            <p>Admin Admin</p>
            <Button onClick={() => signOut()}>
              <p className=" text-sm">Sign Out</p>
            </Button>
          </div>
        </div>
      </aside>

      {!SidebarNav && (
        <aside className=" lg:flex h-screen fixed z-[12] left-0 w-[80px] bg-white border-r shadow-sm flex-col">
          <div className=" h-full py-2 px-2 w-full flex-1">
            <div className=" flex w-full items-center justify-center">
              <div className=" flex relative w-full aspect-[2.3/2] max-w-10 items-center justify-center mt-2">
                <Image
                  src="/images/logo-ht.png"
                  alt=""
                  fill
                  className=" object-cover object-center w-full h-full items-center justify-center"
                />
              </div>
            </div>
            <div className=" flex-col gap-2 flex mt-8">
              {SIDENAV.map((sidemenu) => (
                <>
                  <Link href={sidemenu.path} className=" text-sm text-white">
                    <div
                      className={cn(
                        " flex w-full aspect-square gap-6 p-1 rounded-full duration-300 transform transition-all bg-slate-50 hover:bg-[#162479] hover:text-slate-50 text-slate-900 items-center justify-center",
                        {
                          "bg-[#162479] text-slate-50":
                            pathname.split("/")[2] ==
                            sidemenu.path.split("/")[2],
                        }
                      )}
                    >
                      <sidemenu.icon size={24} variant="Bold" />
                    </div>
                  </Link>
                </>
              ))}
            </div>
            <div className=" flex flex-col w-full items-center justify-center rounded-xl py-6">
              <div className=" flex w-10 h-10 bg-black rounded-full text-white items-center justify-center">
                <span>AA</span>
              </div>
              <Button onClick={() => signOut()} variant={"ghost"}>
                <p className=" text-sm">Sign Out</p>
              </Button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
