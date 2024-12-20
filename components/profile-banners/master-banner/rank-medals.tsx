import { Loader2 } from "lucide-react";
import Image from "next/image";

export type RankMedalProps = {
  rank:
    | string
    | "standardSilver"
    | "standardGold"
    | "standardPlatinum"
    | "vendorSilver"
    | "vendorGold"
    | "vendorPlatinum"
    | "ambassadorSilver"
    | "ambassadorGold"
    | "ambassadorPlatinum";
};

/**
 * Renders the appropriate medal image based on the given rank.
 *
 * @param {RankMedalProps} rank - The rank to determine the image for.
 * @return {JSX.Element} The rendered medal image or a "No Current Rank" message.
 */

const RankMedals = ({ rank }: RankMedalProps) => {
  const imageSrc = {
    standardSilver: "/images/StandardSilver.png",
    standardGold: "/images/StandardGold.png",
    standardPlatinum: "/images/StandardPlatinum.png",
    vendorSilver: "/images/VendorSilver.png",
    vendorGold: "/images/VendorGold.png",
    vendorPlatinum: "/images/VendorPlatinum.png",
    ambassadorSilver: "/images/AmbassadorSilver.png",
    ambassadorGold: "/images/AmbassadorGold.png",
    ambassadorPlatinum: "/images/AmbassadorPlatinum.png",
  }[rank];

  if (!imageSrc) {
    return <p>No Current Rank</p>;
  }

  return (
    <div className="mb-2">
      <Image src={imageSrc} alt={rank} width={125} height={125} />
    </div>
  );
};

export default RankMedals;
