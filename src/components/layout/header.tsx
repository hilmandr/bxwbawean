"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";

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
import { MENU, MENUS, PPID } from "~/lib/constant";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { HambergerMenu } from "iconsax-react";


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
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 z-50 flex h-24 w-full transform items-center text-neutral-200 transition-all duration-500",
          {
            "h-20 transform bg-black/70 shadow-lg backdrop-blur-md transition-all duration-500":
              actualPathName !== "/",
          },
          {
            "h-20 transform bg-black/70 shadow-lg backdrop-blur-md transition-all duration-500":
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
                          variant="ghost"
                          className={activeMenu(menu.path)?"rounded-lg text-white hover:bg-transparent border-white border ":" rounded-lg hover:bg-transparent hover:border-white border-transparent border hover:border duration-50 transition-all"}
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
                          <div className=" my-1 flex flex-col gap-2">
                            {menu.submenu.map((submenu) => (
                              <Button
                                key={submenu.title}
                                size="sm"
                                variant="ghost"
                                className={activeMenu(submenu.path) ? "justify-start text-slate-900 bg-slate-200" : "justify-start text-slate-900 hover:bg-slate-200 "}
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
                    variant="ghost"
                    className={activeMenu(menu.path)?"rounded-lg text-white hover:bg-transparent border-white border":"rounded-lg hover:bg-transparent hover:border-white border-transparent border hover:border duration-50 transition-all"}
                  >
                    <Link href={menu.path} className="font-semibold text-white">
                      {menu.title}
                    </Link>
                  </Button>
                </>
              ))}
              <Dialog>
                <DialogTrigger><Button className=" bg-black/50">PPID</Button></DialogTrigger>
                <DialogContent>

                  <DialogHeader>
                    <DialogTitle className=" font-bold">Menu PPID</DialogTitle>
                    <DialogDescription>
                      <Accordion type="single" collapsible>
                        <DialogPrimitive.Close asChild>

                            <Link href="/ppid/tentang" className=" font-semibold text-neutral-950 text-base border-b w-full flex py-4">Tentang PPID</Link>

                        </DialogPrimitive.Close>
                          {PPID.map((menu) => (
                            <>
                        <AccordionItem value={"item-" + menu.item}>
                          <AccordionTrigger className=" font-semibold text-neutral-950 text-base">{menu.title}</AccordionTrigger>
                          {menu.submenu?.map((subMenuPpid) => (
                            <>
                         <Link href={subMenuPpid.path }>
                          <DialogPrimitive.Close className=" flex flex-col w-full hover:bg-neutral-50">
                          <AccordionContent className=" flex flex-col w-full ">
                            <div className=" flex flex-col w-full items-center justify-start  py-3 px-3 -mb-4">
                              <p>{subMenuPpid.title}</p>
                            </div>
                          </AccordionContent>
                          </DialogPrimitive.Close>
                          </Link>
                            </>
                          ))}
                        </AccordionItem>
                            </>
                          ))}
                      </Accordion>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </nav >
            {/* end: right */}

            <nav className="lg:hidden items-center justify-center flex">
              <Sheet>
                <SheetTrigger><HambergerMenu color="#fafafa" size={36}/></SheetTrigger>
                <SheetContent className=" pt-14">
                  <SheetHeader>
                    <SheetDescription className=" text-neutral-950 text-lg font-semibold">
                      <Accordion type="single" collapsible>
                        {MENUS.map((menu) => (
                          <>
                            <AccordionItem value={"item-" + menu.item}>
                              <AccordionTrigger className=" pl-4">
                                {menu.title}
                              </AccordionTrigger>
                              {menu.submenu?.map((subMenu) => (
                                <>
                                  <Link href={subMenu.path}>
                                    <SheetClose className=" flex flex-col w-full items-start justify-start">
                                      <AccordionContent className=" hover:text-neutral-600 pl-6 items-start justify-start">
                                        <p className=" text-left text-base">{subMenu.title}</p>
                                      </AccordionContent>
                                    </SheetClose>
                                  </Link>
                                </>
                              ))}
                            </AccordionItem>
                          </>  
                        ))}
                      </Accordion>
                      {MENU.map((menu) => (
                        <>
                          <SheetClose className=" flex flex-col w-full hover:underline border-b" asChild>
                            <Link href={menu.path}> 
                              <div className=" flex flex-col w-full items-start justify-center">
                                <p className=" flex w-full items-center justify-start py-4 pl-4">{menu.title}</p>
                              </div>
                            </Link>
                          </SheetClose>
                        </>
                      ))}
                      <Dialog>
                        <DialogTrigger className=" flex w-full items-start justify-start mt-2">
                          <Button className=" bg-black w-full h-12 items-center justify-start">
                            <p className=" text-left font-bold text-lg">PPID</p>
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className=" font-bold">Menu PPID</DialogTitle>
                            <DialogDescription>
                              <Accordion type="single" collapsible>
                                <SheetClose asChild>
                                  {/* <DialogPrimitive.Close asChild> */}
                                    <Link href="/ppid/tentang" className=" font-semibold text-neutral-950 text-base border-b w-full flex py-4">Tentang PPID</Link>
                                  {/* </DialogPrimitive.Close> */}
                                </SheetClose>
                                  {PPID.map((menu) => (
                                    <>
                                <AccordionItem value={"item-" + menu.item}>
                                  <AccordionTrigger className=" font-semibold text-neutral-950 text-base">{menu.title}</AccordionTrigger>
                                  {menu.submenu?.map((subMenuPpid) => (
                                    <>
                                <Link href={subMenuPpid.path }>
                                  <SheetClose  className=" flex flex-col w-full hover:bg-neutral-50">
                                    {/* <DialogPrimitive.Close className=" flex flex-col w-full hover:bg-neutral-50"> */}
                                  <AccordionContent className=" flex flex-col w-full ">
                                    <div className=" flex flex-col w-full items-center justify-start  py-3 px-3 -mb-4">
                                      <p>{subMenuPpid.title}</p>
                                    </div>
                                  </AccordionContent>
                                  {/* </DialogPrimitive.Close> */}
                                  </SheetClose>
                                  </Link>
                                    </>
                                  ))}
                                </AccordionItem>
                                    </>
                                  ))}
                              </Accordion>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        </Container>
      </div>
    </>
  );
}
