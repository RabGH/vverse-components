import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconLevel } from "@/components/icons/logo-icons";

type ExpertiseBadgeProps = {
  expertise?: "beginner" | "intermediate" | "advanced";
};

const ExpertiseBadge = ({ expertise }: ExpertiseBadgeProps) => {
  return expertise ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconLevel className="w-4 h-4 text-primary" />}
    >
      {expertise}
    </Badge>
  ) : null;
};

export default ExpertiseBadge;
