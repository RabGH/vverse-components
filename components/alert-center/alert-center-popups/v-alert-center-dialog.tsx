import React from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/v-dialog";
import { Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import VAlertCenter from "../v-alert-center";

type VAlertCenterDialog = {
  isLoading?: boolean;
};

/**
 * Renders the VAlertCenterDialog component.
 *
 * @param {boolean} isLoading - Indicates whether the component is in a loading state.
 * @return {JSX.Element} The rendered VAlertCenterDialog component.
 */
const VAlertCenterDialog = ({ isLoading }: VAlertCenterDialog) => {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex justify-center items-center w-[200px] h-full rounded-md"
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
            <div className="">
              <VAlertCenter />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VAlertCenterDialog;
