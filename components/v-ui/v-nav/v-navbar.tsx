"use client";

import React, { useState } from "react";
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
import { UserAvatar } from "@/components/v-ui/user-avatar";
import VVerseMenuContent from "@/components/v-ui/v-nav/v-verse-menu-content";
import { Separator } from "@/components/ui/separator";
import VVerseBackOfficeMenuContent from "@/components/v-ui/v-nav/v-verse-back-office-content";

type VNavBarProps = {
  userName: string;
  userTitle: string;
};

const VNavbar = ({ userName, userTitle }: VNavBarProps) => {
  const [activeButton, setActiveButton] = useState("V-Verse Menu");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInClick = () => {
    setIsSignedIn((prevSignIn) => !prevSignIn);
  };

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div className="flex items-center justify-between gap-2 p-2">
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
            className="w-full h-full border-none p-0"
            align="end"
          >
            <Image
              src="/icons/VVerseNavBg.svg"
              alt="vverse"
              width={1500}
              height={800}
              className="rounded-md"
            />
            <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-opacity-20 bg-black z-10">
              <div className="flex flex-row items-center justify-between p-6">
                <div className="flex flex-row items-center gap-4">
                  <UserAvatar />
                  <div className="flex flex-col text-background gap-1">
                    <h2 className="text-2xl">{userName}</h2>
                    <p className="text-sm">{userTitle}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 group">
                  <div className="flex flex-col">
                    <Button
                      className={cn(
                        `bg-none text-xl hover:bg-white/10 hover:bg-none rounded-md`
                      )}
                      onClick={() => handleButtonClick("V-Verse Menu")}
                    >
                      V-Verse Menu
                    </Button>
                    {activeButton === "V-Verse Menu" && (
                      <div
                        className={`bg-background h-[1.5px] w-40 ml-2 rounded-lg top-[123.5px] 
                        absolute bottom-0 left-50 right-50 z-20`}
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Button
                      className={cn(
                        `bg-none text-xl hover:bg-white/10 hover:bg-none rounded-md`
                      )}
                      onClick={() => handleButtonClick("Back Office Menu")}
                    >
                      Back Office Menu
                    </Button>

                    {activeButton === "Back Office Menu" && (
                      <div
                        className={`bg-background h-[1.5px] w-48 ml-2 rounded-lg top-[123.5px] 
                        absolute bottom-0 left-50 right-50 z-20`}
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    size="banner"
                    variant={isSignedIn ? "userPurple" : "blueRedSlash"}
                    onClick={handleSignInClick}
                  >
                    {isSignedIn ? "Sign-In/Up" : "Logout"}
                  </Button>
                </div>
              </div>
              <Separator className="mt-[-20px] max-w-[1450px] ml-4" />
              <div className="p-6">
                {activeButton === "V-Verse Menu" && <VVerseMenuContent />}
                {activeButton === "Back Office Menu" && (
                  <VVerseBackOfficeMenuContent />
                )}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default VNavbar;
