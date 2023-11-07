import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconGraphDollar,
  IconOrderBox,
  IconSponsorHandShaking,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";

type MarketingSponsorDataPointsProps = {
  isLoading?: boolean;
  investments: number;
  sponsored: number;
  orders: number;
};

/**
 * Renders the marketing sponsor data points component.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isLoading - Indicates whether the data is loading.
 * @param {number} props.investments - The number of investments.
 * @param {number} props.sponsored - The number of sponsored items.
 * @param {number} props.orders - The number of orders.
 * @return {JSX.Element} The rendered marketing sponsor data points component.
 */

const MarketingSponsorDataPoints = ({
  isLoading,
  investments,
  sponsored,
  orders,
}: MarketingSponsorDataPointsProps) => {
  return (
    <section className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-2">
        <VDataPoint
          number={investments}
          description={"Investments"}
          icon={IconGraphDollar}
          isLoading={isLoading}
        />
        <VDataPoint
          number={sponsored}
          description={"Sponsored"}
          icon={IconSponsorHandShaking}
          isLoading={isLoading}
        />
        <VDataPoint
          number={orders}
          description={"Orders"}
          icon={IconOrderBox}
          isLoading={isLoading}
        />
      </div>
      <Button variant="bannerBlueRed" size="banner" className="ml-6">
        Edit Profile
      </Button>
    </section>
  );
};

export default MarketingSponsorDataPoints;
