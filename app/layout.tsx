import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ weight: "500", subsets: ["latin"] });

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "VVerse Component Library",
  description: "VVerse Component Library, translated Figma designs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
