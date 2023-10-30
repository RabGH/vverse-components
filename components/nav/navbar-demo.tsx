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
import { LogoBlue, MainLogo } from "../icons/logo-icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description: "Home Page",
  },
  {
    title: "Base Components",
    href: "/baseComponents",
    description:
      "Buttons, switches, radios, inputs, textareas, selects, and more",
  },
  {
    title: "Alert Center",
    href: "/alertCenter",
    description: "Alert Center Page, notifications",
  },
  {
    title: "Navigation",
    href: "/navigation",
    description: "Drop Down Menu Navigation Menus V-Verse",
  },
  {
    title: "Profile Banners",
    href: "/profileBanner",
    description: "VVerse Profile Banner Demos, Data Points, etc.",
  },
  {
    title: "Video Player",
    href: "/videoPlayer",
    description: "Video Player for V-Verse",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="mx-6 my-6 fixed shadow-xl border border-primary p-2 rounded-lg">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Component Library</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <LogoBlue className="w-40" />
                    <div className="mb-2 mt-4 text-lg font-bold">
                      VVerse Component Library
                    </div>
                    <p className="text-sm leading-tight text-black">
                      Beautifully designed components built with Radix UI,
                      Tailwind CSS, and ShadCN-UI.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
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
        {/* <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
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
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-black">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
