"use client";

import Link from "next/link";
import Container from "../common/container";
import Image from "next/image";
import { ArrowUp } from "iconsax-react";
import React from "react";
import { ADDRESS_FOOTER, SOSMED, TAUTAN_LAIN } from "~/lib/constant";
import { animateScroll } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className="flex w-full bg-stone-950 pb-10 pt-16">
        <Container>
          <div className="mb-10 grid w-full gap-x-20 gap-y-10 lg:grid-cols-2">
            {/* begin: left */}
            <div className="flex w-full flex-col">
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
              <ul className="space-y-1 py-4 leading-loose text-white">
                {ADDRESS_FOOTER.map((address) => (
                  <>
                    <li className="flex cursor-default items-center justify-start gap-3 text-sm lg:text-base">
                      <address.icon size="24" color="#fafafa" variant="Bulk" />
                      <p>{address.name}</p>
                    </li>
                  </>
                ))}
              </ul>
              <div className="mt-5 flex aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.968061884986!2d112.67597322885355!3d-5.724520523833843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddf59a8ba291301%3A0x75bfd5411b39abc9!2sBandara%20Udara%20Harun%20Thohir!5e0!3m2!1sid!2sid!4v1717596741642!5m2!1sid!2sid"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                />
              </div>
            </div>
            {/* end: left */}

            {/* begin: right */}
            <div className="flex w-full flex-col gap-y-8">
              <div className="flex w-full flex-col">
                <h4 className="text-xl text-white">Tautan Lainnya</h4>
                <ul className="pt-4 leading-loose text-white">
                  {TAUTAN_LAIN.map((tautan) => (
                    <>
                      <li className="text-sm transition-all duration-200 hover:text-neutral-400 lg:text-base">
                        <Link href={tautan.path}>{tautan.name}</Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col">
                <h4 className="text-xl text-white">Ikuti Kami</h4>
                <ul className="flex gap-3 pt-4 leading-loose text-white">
                  {SOSMED.map((sosmed) => (
                    <>
                      <li>
                        <Link
                          href={sosmed.path}
                          className="transition-all duration-200 hover:text-neutral-400"
                        >
                          <sosmed.icon size={30} />
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            {/* end: right */}
          </div>
          {/* begin: bottom */}
          <div className="flex w-full items-center justify-between border-t border-neutral-500 pt-10">
            <p className="w-full max-w-3xl text-sm text-neutral-400 lg:text-base">
              Copyright © 2024 Bandar Udara Harun Thohir - Gresik. All rights
              reserved.
            </p>
            <div className="flex w-full items-center justify-end">
              <button
                className="group relative flex aspect-square w-10 cursor-pointer items-center justify-center gap-1 overflow-hidden rounded-full bg-white lg:w-12"
                onClick={() =>
                  animateScroll.scrollToTop({
                    smooth: "easeInOutQuart",
                    duration: 1000,
                    spy: true,
                  })
                }
              >
                <ArrowUp
                  size="30"
                  color="#3a3a3a"
                  variant="Linear"
                  className="flex items-center gap-2 transition-all duration-500 group-hover:-translate-y-9 group-hover:opacity-0"
                />
                <ArrowUp
                  size="30"
                  color="#3a3a3a"
                  variant="Linear"
                  className="absolute flex translate-y-9 items-center gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
          {/* end: bottom */}
        </Container>
      </div>
    </>
  );
}
