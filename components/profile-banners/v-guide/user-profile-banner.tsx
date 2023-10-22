import React from "react";
import UserTags from "@/components/profile-banners/v-guide/user-tags";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import UserDataTable from "./user-data-table";
import UserTitleBox from "../master-banner/user-title-box";
import { Separator } from "@/components/ui/separator";
import { UserAvatar } from "./user-avatar-large";

const UserProfileBanner = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserAvatar />
      <div className="flex flex-col gap-4">
        <div className="space-y-4">
          <UserTitleBox />
          <Separator />
          <UserDataTable isLoading={false} />
          <Separator />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center m-2 ml-[-300px]">
          <UserTags roles={[Author, Candidate]} />
          <Separator />
          <UserInteraction />
        </div>
      </div>
    </div>
  );
};

export default UserProfileBanner;
