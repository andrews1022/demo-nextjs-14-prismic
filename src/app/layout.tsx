import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createClient } from "@/prismicio";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// return a promise, that will resolve the type Metadata
export const generateMetadata = async (): Promise<Metadata> => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  const metadata: Metadata = {
    title: settings.data.site_title || "Flowrise",
    description: settings.data.meta_description || "Flowrise is the relaxing app for you.",
    openGraph: {
      images: [settings.data.og_image.url || ""] // NOTE: local image for fallback is ok to do
    }
  };

  return metadata;
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
