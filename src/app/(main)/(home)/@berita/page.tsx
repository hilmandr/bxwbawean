"use client";

import { EmojiSad } from "iconsax-react";
import React, { useState } from "react";
import Content from "~/components/common/container";
import { api } from "~/trpc/react";
import useDebounce from "~/hooks/use-debounce";
import BeritaItems from "~/components/common/berita-items";
import { useMediaQuery } from "usehooks-ts";

export default function HomeSectionBerita() {
  const [searchBerita, setSearchBerita] = useState("");

  const debounceSearch = useDebounce(searchBerita, 500);

  // query
  const { data: berita } = api.berita.getBeritaItems.useQuery({
    search: debounceSearch,
  });
  const smartphonePortrait = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <div className="my-10 flex w-full flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold leading-relaxed">
            Berita dan Informasi
          </h1>
          <p className="max-w-2xl text-neutral-500">
            Simak berita dan informasi terkini seputar Bandar Udara Harun Thohir
            - Gresik.
          </p>
        </div>
        {smartphonePortrait ? (
          <Content className="px-16">
            {berita?.length === 0 ? (
              <>
                <div className="flex aspect-[4/1.5] w-full flex-col items-center justify-center">
                  <EmojiSad size="96" color="#333333" variant="TwoTone" />
                  <h1 className="pt-5">
                    Oops! There is no project to show at this time.
                  </h1>
                </div>
              </>
            ) : (
              <>
                <BeritaItems beritaItems={berita || []} />
              </>
            )}
          </Content>
        ) : (
          <>
            {berita?.length === 0 ? (
              <>
                <div className="flex aspect-[4/1.5] w-full flex-col items-center justify-center">
                  <EmojiSad size="96" color="#333333" variant="TwoTone" />
                  <h1 className="pt-5">
                    Oops! There is no project to show at this time.
                  </h1>
                </div>
              </>
            ) : (
              <>
                <BeritaItems beritaItems={berita || []} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
