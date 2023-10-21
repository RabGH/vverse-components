import React from "react";

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

interface UserDataTable {
  isLoading: boolean;
}

const UserDataTable = ({ isLoading }: UserDataTable) => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-4">
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
    </section>
  );
};

export default UserDataTable;
