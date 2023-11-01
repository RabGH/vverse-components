import React from "react";
import { Badge } from "@/components/ui/badge";
import { IconZap } from "@/components/icons/logo-icons";

type AssetBadgesProps = {
  isFeatured?: string;
  isExclusive?: string;
  price?: number;
  isDiscounted?: string;
  discountPercentage?: number;
  paymentType?: "paid" | "free";
  stock?: "inStock" | "outOfStock";
  deliveryTime?: number;
  projectPay?: number;
  projectExpertise?: "beginner" | "intermediate" | "advanced";
  projectLocation?: "onsite" | "remote" | "hybrid";
  projectType?: "fixed" | "negotiate";
  isHiring?: string;
  eventTime?: "coming" | "upcoming";
  tickets?: number;
  eventDuration?: number;
  country?: string;
  salaryPaymentTime?: "weekly" | "monthly" | "yearly";
  positionDuration?: "fulltime" | "parttime";
  monthlySalary?: number;
  dataType?: string;
};

const AssetBadges = ({}: AssetBadgesProps) => {
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
