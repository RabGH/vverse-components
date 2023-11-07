import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  weight: ["500", "400", "300", "700", "500"],
  subsets: ["latin"],
});

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "VVerse Component Library",
  description: "VVerse Component Library, translated Figma designs.",
};

/**
 * Renders the root layout component.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children to render.
 * @return {JSX.Element} The rendered root layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          {children}
          <Toaster />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
