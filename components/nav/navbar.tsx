import React from "react";
import Link from "next/link"; // Replace with the correct path to your links file
import { links } from "@/constants";

const Navbar = () => {
  return (
    <div className="border-b-2 h-10 p-6 flex justify-between items-center">
      <h2>Vverse - Components</h2>
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
