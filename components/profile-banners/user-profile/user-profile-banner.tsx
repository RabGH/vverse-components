import React from "react";
import UserNav from "@/components/profile-banners/user-profile/user-nav";
import UserInteraction from "@/components/profile-banners/user-profile/user-interact";
import UserDataTable from "./user-data-table";
import UserInfoBox from "./user-info-box";
import UserTitleBox from "./user-title-box";

const UserProfileBanner = () => {
  return (
    <>
      <div className="flex space-between justify-center gap-6">
        <div className="space-y-6">
          <UserTitleBox />
          <UserDataTable isLoading={false} />
          <UserNav />
          <UserInteraction />
        </div>
        <div>
          <UserInfoBox />
        </div>
      </div>
    </>
  );
};

export default UserProfileBanner;
