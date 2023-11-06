import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconWorkType } from "@/components/icons/logo-icons";
import { formatCapitalLetters } from "@/lib/utils";

type WorkTypeBadgeProps = {
  workType?: "remote" | "hybrid";
};

const WorkTypeBadge = ({ workType }: WorkTypeBadgeProps) => {
  return workType ? (
    <Badge
      size="featured"
      variant="violet"
      icon={<IconWorkType className="w-4 h-4 text-primary" />}
    >
      {formatCapitalLetters(workType)}
    </Badge>
  ) : null;
};

export default WorkTypeBadge;
