import { Time } from "@vidstack/react";

import { Badge } from "@/components/ui/badge";

export function TimeGroup() {
  return (
    <div className="ml-2.5 flex items-center text-sm font-medium">
      <Badge variant={"profile"} size="featured">
        <Time className="time" type="current" />
        <div className="mx-1 text-white/80">/</div>
        <Time className="time" type="duration" />
      </Badge>
    </div>
  );
}
