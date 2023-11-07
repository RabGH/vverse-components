import { Separator } from "@/components/ui/separator";
import { VDataPoint } from "@/components/v-ui/data-points/v-data-points";
import {
  IconBullHorn,
  IconConnectionsBtn,
  IconCustomers,
  IconEarn,
  IconFollowers,
  IconGraphDollar,
  IconLoader,
  IconMembers,
  IconSalesGraph,
  IconShare,
  IconThumbsUp,
  IconUserCheck,
} from "@/components/icons/logo-icons";
import UserInfoBox, {
  UserInfoBoxProps,
} from "@/components/profile-banners/v-guide/guide-info-box";

export type GuideDataPointsProps = {
  isLoading?: boolean;
  sales: number;
  earnings: number;
  investments: number;
  endorsements: number;
  points: number;
  likes: number;
  shares: number;
  connections: number;
  followers: number;
  members: number;
  subscribers: number;
  customers: number;
  currency: string;
  userInfoData?: UserInfoBoxProps;
};


/**
 * Render the guide data points component.
 *
 * @param {boolean} isLoading - indicates if data is still loading
 * @param {number} sales - the number of sales
 * @param {number} earnings - the total earnings
 * @param {number} investments - the total investments
 * @param {number} endorsements - the number of endorsements
 * @param {number} points - the number of points
 * @param {number} likes - the number of likes
 * @param {number} shares - the number of shares
 * @param {number} connections - the number of connections
 * @param {number} followers - the number of followers
 * @param {number} members - the number of members
 * @param {number} subscribers - the number of subscribers
 * @param {number} customers - the number of customers
 * @param {string} currency - the currency used
 * @param {object} userInfoData - the user info data object
 * @param {string} userInfoData.id - the user ID
 * @param {string} userInfoData.gender - the user's gender
 * @param {string} userInfoData.country - the user's country
 * @param {string} userInfoData.location - the user's location
 * @param {string} userInfoData.time - the user's time
 * @param {string} userInfoData.calendar - the user's calendar
 * @param {string} userInfoData.lastSeen - the user's last seen time
 * @return {ReactNode} the rendered guide data points component
 */
const GuideDataPoints = ({
  isLoading,
  sales,
  earnings,
  investments,
  endorsements,
  points,
  likes,
  shares,
  connections,
  followers,
  members,
  subscribers,
  customers,
  currency,
  userInfoData,
}: GuideDataPointsProps) => {
  return (
    <>
      <div className="flex flex-row gap-10 items-center justify-left">
        <section className="flex flex-col items-center gap-2">
          <div className="flex flex-row gap-2">
            <VDataPoint
              number={sales}
              description={"Sales"}
              icon={IconSalesGraph}
              isLoading={isLoading}
              currency={currency}
            />
            <VDataPoint
              number={earnings}
              description={"Earnings"}
              icon={IconEarn}
              isLoading={isLoading}
              currency={currency}
            />
            <VDataPoint
              number={investments}
              description={"Investments"}
              icon={IconGraphDollar}
              isLoading={isLoading}
              currency={currency}
            />
            <VDataPoint
              number={endorsements}
              description={"Endorements"}
              icon={IconBullHorn}
              isLoading={isLoading}
            />
            <VDataPoint
              number={points}
              description={"Points"}
              icon={IconLoader}
              isLoading={isLoading}
            />
            <VDataPoint
              number={likes}
              description={"Likes"}
              icon={IconThumbsUp}
              isLoading={isLoading}
            />
          </div>
          <div className="flex flex-row gap-2">
            <VDataPoint
              number={shares}
              description={"Shares"}
              icon={IconShare}
              isLoading={isLoading}
            />
            <VDataPoint
              number={connections}
              description={"Connections"}
              icon={IconConnectionsBtn}
              isLoading={isLoading}
            />
            <VDataPoint
              number={followers}
              description={"Followers"}
              icon={IconFollowers}
              isLoading={isLoading}
            />
            <VDataPoint
              number={members}
              description={"Members"}
              icon={IconMembers}
              isLoading={isLoading}
            />
            <VDataPoint
              number={subscribers}
              description={"Subscribers"}
              icon={IconUserCheck}
              isLoading={isLoading}
            />
            <VDataPoint
              number={customers}
              description={"Customers"}
              icon={IconCustomers}
              isLoading={isLoading}
            />
          </div>
        </section>
        <div>
          <Separator orientation="vertical" className="h-40 bg-muted mx-1" />
        </div>
        <section className="flex flex-row">
          <UserInfoBox
            id={userInfoData?.id}
            gender={userInfoData?.gender}
            country={userInfoData?.country}
            location={userInfoData?.location}
            time={userInfoData?.time}
            calendar={userInfoData?.calendar}
            lastSeen={userInfoData?.lastSeen}
          />
        </section>
      </div>
    </>
  );
};

export default GuideDataPoints;
