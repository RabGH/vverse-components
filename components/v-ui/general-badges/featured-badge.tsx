import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconZap } from "@/components/icons/logo-icons";

type FeaturedBadgeProps = {
  isFeatured?: string;
};

const FeaturedBadge = ({ isFeatured }: FeaturedBadgeProps) => {
  return isFeatured ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={<IconZap className="w-4 h-4 text-primary" />}
    >
      Featured
    </Badge>
  ) : null;
};

export default FeaturedBadge;
