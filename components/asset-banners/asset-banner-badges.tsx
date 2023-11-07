import React from "react";

import FeaturedBadge from "@/components/v-ui/v-badges/featured-badge";
import HiringBadge from "@/components/v-ui/v-badges/hiring-badge";
import PriceBadge from "@/components/v-ui/v-badges/price-badge";
import DiscountBadge from "@/components/v-ui/v-badges/discount-badge";
import BargainBadge from "@/components/v-ui/v-badges/bargain-badge";
import ExpertiseBadge from "@/components/v-ui/v-badges/expertise-badge";
import DeliveryTimeBadge from "@/components/v-ui/v-badges/delivery-time-badge";
import ExclusiveBadge from "@/components/v-ui/v-badges/exclusive-badge";
import PaymentTypeBadge from "@/components/v-ui/v-badges/payment-type-badge";
import DiscountPercentageBadge from "@/components/v-ui/v-badges/discount-percent-badge";
import WorkTypeBadge from "../v-ui/v-badges/work-type-badge";
import BudgetBadge from "../v-ui/v-badges/budget-badge";

type AssetBadgesProps = {
  dataType: string;
  data: any;
};

const AssetBadges = ({ dataType, data }: AssetBadgesProps) => {
  return (
    <div className="flex flex-row gap-2">
      {/* Featured Badge */}
      {(dataType === "lanceService" ||
        dataType === "tube" ||
        dataType === "blog" ||
        dataType === "nation" ||
        dataType === "college") && (
        <FeaturedBadge isFeatured={data.isFeatured} />
      )}

      {/* Exclusive Badge */}
      {(dataType === "college" || dataType === "lanceService") && (
        <ExclusiveBadge isExclusive={data.isExclusive} />
      )}

      {/* Discount Badge */}
      {(dataType === "lanceService" || dataType === "college") && (
        <DiscountBadge
          price={data.price}
          discountPercentage={data.discountPercentage}
        />
      )}

      {/* Discount Percentage Badge */}
      {dataType === "college" && (
        <DiscountPercentageBadge discountPercentage={data.discountPercentage} />
      )}

      {/* Payment Type Badge */}
      {(dataType === "college" || dataType === "lanceProject") && (
        <PaymentTypeBadge paymentType={data.paymentType} />
      )}

      {/* Hiring Badge */}
      {dataType === "lanceProject" && <HiringBadge isHiring={data.isHiring} />}

      {/* Price Badge */}
      {dataType === "lanceService" && <PriceBadge price={data.price} />}

      {/* Bargain Badge */}
      {dataType === "college" && <BargainBadge bargain={data.bargain} />}

      {/* Devlivery Time Badge */}
      {(dataType === "lanceService" || dataType === "lanceProject") && (
        <DeliveryTimeBadge deliveryTime={data.deliveryTime} />
      )}

      {/* Work Type Badge */}
      {dataType === "lanceProject" && (
        <WorkTypeBadge workType={data.workType} />
      )}

      {/* Expertise Badge */}
      {(dataType === "college" || dataType === "lanceProject") && (
        <ExpertiseBadge expertise={data.expertise} />
      )}

      {/* Budget Badge */}
      {dataType === "lanceProject" && <BudgetBadge budget={data.budget} />}
    </div>
  );
};

export default AssetBadges;

// Keeping Data as any depending on what the backend variables will be

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
