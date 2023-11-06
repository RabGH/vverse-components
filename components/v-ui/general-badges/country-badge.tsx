import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconGlobeDefined } from "@/components/icons/logo-icons";

type CountryBadgeProps = {
  country?: string;
};

const CountryBadge = ({ country }: CountryBadgeProps) => {
  return country ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconGlobeDefined className="w-4 h-4 text-primary" />}
    >
      {country}
    </Badge>
  ) : null;
};

export default CountryBadge;
