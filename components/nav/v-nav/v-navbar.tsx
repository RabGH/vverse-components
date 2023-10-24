import React from "react";
import Link from "next/link";
import Image from "next/image";

import { HamburgerMenu, MainLogo } from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import InnerNavbar from "@/components/nav/v-nav/inner-navbar";

const VNavbar = () => {
  return (
    <div className={cn("flex items-center justify-between gap-2")}>
      <Link href="/">
        <MainLogo className="w-14 h-12" />
      </Link>
      <div className="flex flex-row items-center gap-4">
        <Button variant="bannerBlueRed">VV-Demo</Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HamburgerMenu className="w-10 h-10 hover:text-red-900" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-vgBlueRed w-full h-full border-none p-0"
            align="end"
          >
            <Image
              src="/images/VVerseNavBg.png"
              alt="vverse"
              width={1280}
              height={720}
              className="rounded-md"
            />
            <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-opacity-30 bg-black z-10">
              <InnerNavbar />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default VNavbar;
