import React from "react";
import { Badge } from "@/components/ui/badge";
import { IconZap } from "@/components/icons/logo-icons";

const AssetBadges = () => {
  return (
    <div>
      <Badge
        size="featured"
        variant={"bannerRed"}
        icon={<IconZap className="w-4 h-4" />}
      >
        Featured
      </Badge>
    </div>
  );
};

export default AssetBadges;
