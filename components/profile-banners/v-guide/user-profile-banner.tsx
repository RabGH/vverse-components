import React from "react";
import UserTags from "@/components/profile-banners/v-guide/user-tags";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import UserDataTable from "./user-data-table";
import UserTitleBox from "../master-banner/user-title-box";
import { Separator } from "@/components/ui/separator";
import { UserLargeAvatar } from "./user-avatar-large";
import { partOf, vNationUserData } from "@/backend-data-test";

const UserProfileBanner = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserLargeAvatar />
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <UserTitleBox />
          <Separator />
          <UserDataTable
            isLoading={false}
            sales={vNationUserData.sales}
            earnings={vNationUserData.earnings}
            investments={vNationUserData.investments}
            endorsements={vNationUserData.endorsements}
            points={vNationUserData.points}
            likes={vNationUserData.likes}
            shares={vNationUserData.shares}
            connections={vNationUserData.connections}
            followers={vNationUserData.followers}
            members={vNationUserData.members}
            subscribers={vNationUserData.subscribers}
            customers={vNationUserData.customers}
            currency={"$"}
          />
          <Separator />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center m-2 ml-[-300px]">
          <UserTags partOf={partOf} />
          <Separator />
          <UserInteraction isConnected={false} />
        </div>
      </div>
    </div>
  );
};

export default UserProfileBanner;
