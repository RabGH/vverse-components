import React from "react";

import FeaturedBadge from "@/components/v-ui/general-badges/featured-badge";
import ExclusiveBadge from "@/components/v-ui/general-badges/exclusive-badge";
import HiringBadge from "@/components/v-ui/general-badges/hiring-badge";
import PriceBadge from "@/components/v-ui/general-badges/price-badge";

type AssetBadgesProps = {
  dataType: string;
  data: any;
};

const AssetBadges = ({ dataType, data }: AssetBadgesProps) => {
  return (
    <div className="flex flex-row gap-2">
      {(dataType === "lanceService" ||
        dataType === "tube" ||
        dataType === "blog" ||
        dataType === "nation") && (
        <FeaturedBadge isFeatured={data.isFeatured} />
      )}
      {dataType === "lanceService" && (
        <ExclusiveBadge isExclusive={data.isExclusive} />
      )}
      {dataType === "lanceProject" && <HiringBadge isHiring={data.isHiring} />}
      {(dataType === "lanceProject" || dataType === "lanceService") && (
        <PriceBadge price={data.price} />
      )}
    </div>
  );
};

export default AssetBadges;

// type AssetBadgesProps = {
//   isFeatured?: string;
//   isExclusive?: string;
//   price?: number;
//   isDiscounted?: string;
//   discountPercentage?: number;
//   paymentType?: "paid" | "free";
//   stock?: "inStock" | "outOfStock";
//   deliveryTime?: number;
//   projectPay?: number;
//   projectExpertise?: "beginner" | "intermediate" | "advanced";
//   projectLocation?: "onsite" | "remote" | "hybrid";
//   projectType?: "fixed" | "negotiate";
//   isHiring?: string;
//   eventTime?: "coming" | "upcoming";
//   tickets?: number;
//   eventDuration?: number;
//   country?: string;
//   salaryPaymentTime?: "weekly" | "monthly" | "yearly";
//   positionDuration?: "fulltime" | "parttime";
//   monthlySalary?: number;
//   dataType?: string;
// };
