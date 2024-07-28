import type { Metadata } from "next";
import "../styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { mulish } from "~/lib/constant";

export const metadata: Metadata = {
  title: "Kantor UPBU Harun Thohir - Gresik",
  metadataBase: new URL("https://bandaraharunthohir.vercel.app/"),
  description: "Website resmi Kantor UPBU Harun Thohir - Gresik",
  icons: "/images/logo-kemenhub.PNG",
  creator: "Kantor UPBU Harun Thohir - Gresik",
  publisher: "Kantor UPBU Harun Thohir - Gresik",
  openGraph: {
    title: "Kantor UPBU Harun Thohir - Gresik",
    description: "Website resmi Kantor UPBU Harun Thohir - Gresik",
    images: ["/images/image-banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/image-banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={mulish.className}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
