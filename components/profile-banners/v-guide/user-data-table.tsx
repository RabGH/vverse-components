import React from "react";
import { Separator } from "@/components/ui/separator";

import { VDataPoint } from "@/components/data-points/v-data-points";
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
  IconThumbsUpBtn,
  IconUserCheck,
} from "@/components/icons/logo-icons";
import UserInfoBox from "./user-info-box";

interface UserDataTable {
  isLoading: boolean;
}

const UserDataTable = ({ isLoading }: UserDataTable) => {
  return (
    <>
      <div className="flex flex-row gap-10 items-center justify-left">
        <section className="flex flex-col items-center gap-2">
          <div className="flex flex-row gap-2">
            <VDataPoint
              number={20000}
              description={"Sales"}
              icon={IconSalesGraph}
              isLoading={isLoading}
              currency="$"
            />
            <VDataPoint
              number={20000}
              description={"Earnings"}
              icon={IconEarn}
              isLoading={isLoading}
              currency="$"
            />
            <VDataPoint
              number={7500}
              description={"Investments"}
              icon={IconGraphDollar}
              isLoading={isLoading}
              currency="€"
            />
            <VDataPoint
              number={44}
              description={"Endorements"}
              icon={IconBullHorn}
              isLoading={isLoading}
            />
            <VDataPoint
              number={3500}
              description={"Points"}
              icon={IconLoader}
              isLoading={isLoading}
            />
            <VDataPoint
              number={9000}
              description={"Likes"}
              icon={IconThumbsUpBtn}
              isLoading={isLoading}
            />
          </div>
          <div className="flex flex-row gap-2">
            <VDataPoint
              number={1100}
              description={"Shares"}
              icon={IconShare}
              isLoading={isLoading}
            />
            <VDataPoint
              number={300}
              description={"Connections"}
              icon={IconConnectionsBtn}
              isLoading={isLoading}
            />
            <VDataPoint
              number={10000}
              description={"Followers"}
              icon={IconFollowers}
              isLoading={isLoading}
            />
            <VDataPoint
              number={10000}
              description={"Members"}
              icon={IconMembers}
              isLoading={isLoading}
            />
            <VDataPoint
              number={10000}
              description={"Subscribers"}
              icon={IconUserCheck}
              isLoading={isLoading}
            />
            <VDataPoint
              number={10000}
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
          <UserInfoBox />
        </section>
      </div>
    </>
  );
};

export default UserDataTable;
