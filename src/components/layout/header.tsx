"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useMemo } from "react";

import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { useScrollPosition } from "~/hooks/use-scroll-position";
import Container from "../common/container";
import { MENU, MENUS } from "~/lib/constant";

export default function Header() {
  // hooks
  const pathname = usePathname();

  const actualPathName = useMemo<string>(() => {
    const arrPathname = pathname.split("/");
    arrPathname.splice(0, 2);
    return `/${arrPathname.join("/")}`;
  }, [pathname]);
  const scrollPosition = useScrollPosition();

  // active menu
  const activeMenu = useCallback(
    (menu: string) =>
      menu === "/invitation/xyz"
        ? menu === pathname
        : pathname.startsWith(menu),
    [pathname],
  );

  return (
    <>
      <div
        className={cn(
          "fixed top-0 z-50 flex h-24 w-full transform items-center text-neutral-200 transition-all duration-500",
          {
            "h-20 transform bg-black/90 shadow-lg backdrop-blur-md transition-all duration-500":
              actualPathName !== "/",
          },
          {
            "h-20 transform bg-black/90 shadow-lg backdrop-blur-md transition-all duration-500":
              scrollPosition > 100,
          },
        )}
      >
        <Container>
          <div className="flex w-full">
            {/* begin: left */}
            <div className="flex-1">
              <Link href="/" className="flex w-fit items-center gap-2">
                <div className="relative aspect-[4/1] w-56 object-center">
                  <Image
                    src="/images/logo-putih.png"
                    alt=""
                    fill
                    className="object-contain object-top"
                  />
                </div>
              </Link>
            </div>
            {/* end: left */}

            {/* begin: right */}
            <nav className="hidden items-center justify-center gap-2 lg:flex">
              {MENUS.map((menu) => (
                <>
                  <TooltipProvider key={menu.path} delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={activeMenu(menu.path) ? "outline" : "ghost"}
                          className="rounded-lg hover:bg-transparent"
                        >
                          <Link
                            href={menu.path}
                            className="font-semibold text-white"
                          >
                            {menu.title}
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        align="center"
                        side="bottom"
                        // className="bg-white"
                      >
                        {menu.submenu && (
                          <div className="mt-2 flex flex-col gap-2">
                            {menu.submenu.map((submenu) => (
                              <Button
                                key={submenu.title}
                                size="sm"
                                variant={
                                  activeMenu(submenu.path) ? "outline" : "ghost"
                                }
                                className="justify-start text-slate-900 hover:bg-transparent"
                                asChild
                              >
                                <Link href={submenu.path}>{submenu.title}</Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              ))}
              {MENU.map((menu) => (
                <>
                  <Button
                    variant={activeMenu(menu.path) ? "outline" : "ghost"}
                    className="rounded-lg hover:bg-transparent"
                  >
                    <Link href={menu.path} className="font-semibold text-white">
                      {menu.title}
                    </Link>
                  </Button>
                </>
              ))}
            </nav>
            {/* end: right */}
          </div>
        </Container>
      </div>
    </>
  );
}
