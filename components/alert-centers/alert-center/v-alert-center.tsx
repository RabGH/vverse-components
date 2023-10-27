"use client"

import { Loader2 } from "lucide-react";

import Heading from "@/components/nav/heading";
import VAlertTab from "./v-alert-tab";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/v-dialog";
import { IconBellFilled } from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMount } from "@/hooks/mount-hook";

interface VAlertCenterProps {
  isLoading?: boolean;
}

const VAlertCenter = ({ isLoading }: VAlertCenterProps) => {
  const isMounted = useMount();
  if (!isMounted) return null;
  return (
    <div className="space-y-10">
      <div className="gap-10">
        <Heading
          title={"V-Verse Alert Center"}
          description={
            "Alert Center that takes data from the backend and displays notifications in 60 combinations, 12 tabs each with a nav of 5 buttons."
          }
          icon={IconBellFilled}
        />
        <VAlertTab />
      </div>
      <div className="gap-10">
        <Heading
          title={"V-Verse Alert Center Dialog"}
          description={
            "Alert Center that takes data from the backend and displays notifications in 60 combinations, 12 tabs each with a nav of 5 buttons. Inside a button dialog popover component"
          }
          icon={IconBellFilled}
        />
        <Dialog>
          <DialogTrigger
            asChild
            className="flex justify-center items-center w-full h-full"
          >
            <Button variant="blueRedSlash" size="default">
              V-Verse Alert Center
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[1550px]">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader2 className="h-11 w-11 animate-spin" />
              </div>
            ) : (
              <div>
                <DialogTitle className="mb-2">V-Verse Alert Center</DialogTitle>
                <div className="ml-6">
                  <VAlertTab />
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex justify-center items-center w-full h-full">
            <Button variant="blueRedSlash" size="default">
              V-Verse Alert Center
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <VAlertTab />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default VAlertCenter;
