"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <IconAchievementsBtn className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

("use client");

import Image from "next/image";

import {
  HamburgerMenu,
  IconAchievementsBtn,
  MainLogo,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/v-ui/user-avatar";
import VVerseMenuContent from "@/components/nav/v-nav/v-verse-menu-content";
import { Separator } from "@/components/ui/separator";
import VVerseBackOfficeMenuContent from "@/components/nav/v-nav/v-verse-back-office-content";

const VNavbar = () => {
  const [activeButton, setActiveButton] = React.useState("V-Verse Menu");

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

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
                    <h2 className="text-2xl">Dr.Ahmad Hassan</h2>
                    <p className="text-sm">
                      Consultant at majestick animal farms, VVerse-Demo
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div className="flex flex-col">
                    <Button
                      className={cn(
                        "bg-none text-xl hover:bg-white/10 hover:bg-none rounded-md transition-all duration-300 ease-in-out"
                      )}
                      onClick={() => handleButtonClick("V-Verse Menu")}
                    >
                      V-Verse Menu
                    </Button>
                    {activeButton === "V-Verse Menu" && (
                      <div className="bg-background h-[1.5px] w-40 ml-2 rounded-lg top-[123.5px] absolute bottom-0 left-50 right-50 z-20 transition-all duration-300 ease-in-out" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <Button
                      className={cn(
                        "bg-none text-xl hover:bg-white/10 hover:bg-none rounded-md transition-all duration-300 ease-in-out"
                      )}
                      onClick={() => handleButtonClick("Back Office Menu")}
                    >
                      Back Office Menu
                    </Button>
                    {activeButton === "Back Office Menu" && (
                      <div className="bg-background h-[1.5px] w-48 ml-2 rounded-lg top-[123.5px] absolute bottom-0 left-50 right-50 z-20 transition-all duration-300 ease-in-out" />
                    )}
                  </div>
                </div>
                <div className="flex items-center">
                  <Button className="w-40">Logout</Button>
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
