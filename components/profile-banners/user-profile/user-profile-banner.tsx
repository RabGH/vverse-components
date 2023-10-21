import React from "react";
import UserNav from "@/components/profile-banners/user-profile/user-nav";
import UserInteraction from "@/components/profile-banners/user-profile/user-interact";
import UserDataTable from "./user-data-table";
import UserTitleBox from "./user-title-box";
import { Separator } from "@/components/ui/separator";
import { UserAvatar } from "./user-avatar-large";

const UserProfileBanner = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <UserTitleBox />
          <Separator />
          <UserDataTable isLoading={false} />
          <Separator />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <UserNav />
          <Separator />
          <UserInteraction />
        </div>
      </div>
    </div>
  );
};

export default UserProfileBanner;
