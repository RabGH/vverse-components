import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface VNavLinkProps {
  sectionLinks: {
    icon: LucideIcon;
    label: string;
    link: string;
  }[];
  sectionTitle: string;
}

const VNavLinks = ({ sectionLinks, sectionTitle }: VNavLinkProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-xl mb-2 text-background">{sectionTitle}</h2>
      <div className="flex flex-col gap-2">
        {sectionLinks.map((link, index) => (
          <>
            <nav className="flex flex-row text-background gap-2 items-center group text-sm">
              <link.icon className="w-5 h-5 group-hover:text-blue-300" />
              <Link
                key={index}
                href={link.link}
                className="group-hover:text-blue-300"
              >
                {link.label}
              </Link>
            </nav>
          </>
        ))}
      </div>
    </div>
  );
};

export default VNavLinks;
