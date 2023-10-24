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
import UserInfoBox from "./user-info-box";
import { userInfoData } from "@/backend-data-test";

interface UserDataTableProps {
  isLoading: boolean;
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
}

const UserDataTable = ({
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
}: UserDataTableProps) => {
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
            id={userInfoData.id}
            gender={userInfoData.gender}
            country={userInfoData.country}
            location={userInfoData.location}
            time={userInfoData.time}
            calendar={userInfoData.calendar}
            lastSeen={userInfoData.lastSeen}
          />
        </section>
      </div>
    </>
  );
};

export default UserDataTable;
