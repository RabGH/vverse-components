import { Time } from "@vidstack/react";

import { Badge } from "@/components/ui/badge";

/**
 * Renders a time group ad component.
 *
 * @return {JSX.Element} The rendered time group ad component.
 */

export function TimeGroupAd() {
  return (
    <div className="ml-2.5 flex items-center text-sm font-medium">
      <Badge variant="violet" size="featured">
        <Time className="time" type="current" />
        <div className="mx-1 text-white/80">/</div>
        <Time className="time" type="duration" />
      </Badge>
    </div>
  );
}

/**
 * Renders the main time group component.
 *
 * @return {JSX.Element} The rendered time group component.
 */

export function TimeGroupMain() {
  return (
    <div className="ml-2.5 flex items-center text-sm font-medium">
      <Time className="time" type="current" />
      <div className="mx-1 text-white/80">/</div>
      <Time className="time" type="duration" />
    </div>
  );
}
