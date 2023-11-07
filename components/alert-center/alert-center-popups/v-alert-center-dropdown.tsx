"use client";

import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useMount } from "@/hooks/mount-hook";
import VAlertTab from "../v-alert-center";

/**
 * Renders the VAlertCenterDropDown component.
 *
 * @return {JSX.Element} The rendered component.
 */
const VAlertCenterDropDown = () => {
  const isMounted = useMount();
  const [open, setOpen] = useState(false);

  if (!isMounted) return null;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center w-full h-full">
        <Button variant="blueRedSlash" size="default">
          V-Verse Alert Center
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[1550px]">
        <div className="mb-4 text-sm font-normal leading-6 vgBlue p-3 text-white rounded-t-md flex flex-row justify-between">
          <div>Alert Center</div>
          {/* <div>
            <X
              onClick={handleClose}
              className="h-4 w-4 text-white mt-1 hover:text-gray-300 transition ease-in-out duration-300 hover:cursor-pointer"
            />
          </div> */}
        </div>
        <div className="ml-4">
          <VAlertTab />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default VAlertCenterDropDown;
