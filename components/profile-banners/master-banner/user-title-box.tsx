import { Separator } from "@/components/ui/separator";
import RankMedals, {
  RankMedalProps,
} from "@/components/profile-banners/master-banner/rank-medals";
import UserPoints from "@/components/profile-banners/master-banner/user-points";
import FeaturedBadge from "@/components/v-ui/v-badges/featured-badge";
import HiringBadge from "@/components/v-ui/v-badges/hiring-badge";
import OpenToWorkBadge from "@/components/v-ui/v-badges/open-to-work-badge";

type UserTitleBoxProps = {
  userName: string;
  userTitle: string;
  points: number;
  endorsements: number;
  likes: number;
  shares: number;

  isFeatured?: string;
  isOpenToWork?: string;
  isHiring?: string;
  rank: RankMedalProps["rank"];
};

/**
 * Renders the UserTitleBox component.
 *
 * @param {object} props - The component props.
 * @param {string} props.userName - The name of the user.
 * @param {string} props.userTitle - The title of the user.
 * @param {number} props.points - The number of points.
 * @param {number} props.endorsements - The number of endorsements.
 * @param {number} props.likes - The number of likes.
 * @param {number} props.shares - The number of shares.
 * @param {string} [props.rank="standardSilver"] - The rank of the user.
 * @param {string} [props.isFeatured="featured"] - Whether the user is featured.
 * @param {string} [props.isOpenToWork=""] - Whether the user is open to work.
 * @param {string} [props.isHiring=""] - Whether the user is hiring.
 * @returns {JSX.Element} The rendered UserTitleBox component.
 */

const UserTitleBox = ({
  userName,
  userTitle,
  points,
  endorsements,
  likes,
  shares,
  rank = "standardSilver",
  isFeatured = "featured",
  isOpenToWork = "",
  isHiring = "",
}: UserTitleBoxProps) => {
  return (
    <div className="flex justify-between items-center space-x-40">
      <div className="flex flex-col">
        <h2 className="font-extrabold text-3xl">{userName}</h2>
        <p className="text-muted text-base">{userTitle}</p>
        <div className="flex flex-row gap-1 mt-1">
          <UserPoints
            points={points}
            endorsements={endorsements}
            thumbsup={likes}
            shares={shares}
          />
          <Separator orientation="vertical" className="h-7 mx-1" />
          <FeaturedBadge isFeatured={isFeatured} />
          <OpenToWorkBadge isOpenToWork={isOpenToWork} />
          <HiringBadge
            isHiring={isHiring}
            badgeClassName="vGreen"
            iconClassName="text-white"
          />
        </div>
      </div>
      <RankMedals rank={rank} />
    </div>
  );
};

export default UserTitleBox;
