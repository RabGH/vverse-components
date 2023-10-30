import "./globals.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";

const prompt = Prompt({ weight: "400", subsets: ["latin"] });

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
      <body className={prompt.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
