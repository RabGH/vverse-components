import React from "react";

import { Badge } from "@/components/ui/badge";
import { IconStatusCalendar } from "@/components/icons/logo-icons";
import { cn, formatCapitalLetters } from "@/lib/utils";

type StockBadgeProps = {
  stock: "In Stock" | "Out of Stock";
  iconClassName?: string;
  badgeClassName?: string;
};

/**
 * Renders a badge component displaying the stock information.
 *
 * @component
 *
 * @param {object} props - The component props.
 * @param {string} props.stock - The stock information to be displayed. Should be either "In Stock" or "Out of Stock".
 * @param {string} props.iconClassName - Additional class names for the icon element.
 * @param {string} props.badgeClassName - Additional class names for the badge element.
 *
 * @returns {JSX.Element | null} The rendered badge component or null if stock is falsy.
 */

const StockBadge = ({
  stock,
  iconClassName,
  badgeClassName,
}: StockBadgeProps) => {
  return stock ? (
    <Badge
      size="featured"
      variant="bannerRed"
      icon={
        <IconStatusCalendar
          className={cn("w-5 h-5 text-primary", iconClassName)}
        />
      }
      className={cn(badgeClassName)}
    >
      {formatCapitalLetters(stock)}
    </Badge>
  ) : null;
};

export default StockBadge;
