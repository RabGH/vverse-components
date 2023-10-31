import React from "react";
import { Button } from "@/components/ui/button";
import { IconThumbsUp } from "../icons/logo-icons";

const AssetButtons = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-6">
      <Button
        size="banner"
        variant={"blueRedSlash"}
        icon={<IconThumbsUp className="w-4 h-4" />}
      >
        Like
      </Button>
      <Button
        size="banner"
        variant={"blueRedSlash"}
        icon={<IconThumbsUp className="w-4 h-4" />}
      >
        Share
      </Button>
      <Button
        size="banner"
        variant={"blueRedSlash"}
        icon={<IconThumbsUp className="w-4 h-4" />}
      >
        Rate
      </Button>
      <Button
        size="banner"
        variant={"blueRedSlash"}
        icon={<IconThumbsUp className="w-4 h-4" />}
      >
        Save
      </Button>
      <Button
        size="banner"
        variant={"blueRedSlash"}
        icon={<IconThumbsUp className="w-4 h-4" />}
      >
        Report
      </Button>
    </div>
  );
};

export default AssetButtons;
