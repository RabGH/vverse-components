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
import VAlertCenter from "./v-alert-center";

interface VAlertCenterDialog {
  isLoading?: boolean;
}

const VAlertCenterDialog = ({ isLoading }: VAlertCenterDialog) => {
  return (
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
              <VAlertCenter />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VAlertCenterDialog;
