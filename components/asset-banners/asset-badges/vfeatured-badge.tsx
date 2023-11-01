import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconZap } from "@/components/icons/logo-icons";

type VFeaturedBadgeProps = {
  isFeatured?: string;
};

const VFeaturedBadge = ({ isFeatured }: VFeaturedBadgeProps) => {
  return (
    {isFeatured ? : (<Badge
      size="featured"
      variant={"bannerRed"}
      icon={<IconZap className="w-4 h-4" />}
    >
      Featured
    </Badge>
    )}
    
  );
};

export default VFeaturedBadge;
