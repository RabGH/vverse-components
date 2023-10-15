import React from "react";
import Link from "next/link"; // Replace with the correct path to your links file
import { links } from "@/constants";

const Navbar = () => {
  return (
    <div className="border-b border-blue-500 h-10 p-6 flex justify-between items-center">
      <Link href="/">Vverse - Components</Link>
      <div className="space-x-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
