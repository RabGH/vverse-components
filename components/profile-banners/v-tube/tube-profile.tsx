import { UserAvatar } from "@/components/profile-banners/master-banner/user-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import TubeDataTable from "@/components/profile-banners/v-tube/tube-data-table";
import { vTubeUserData } from "@/backend-data-test";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";

interface TubeProfileProps {
  isLoading: boolean;
}

const TubeProfile = ({ isLoading }: TubeProfileProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserAvatar />
      <div className="flex flex-col gap-4">
        <div>
          <UserTitleBox
            userName={"<Member Name>"}
            userTitle={"Tuber at the v-tube website for videos, demo vverse."}
            points={50}
            endorsements={3}
          />
          <div className="ml-[-100px]">
            <div className="space-y-3">
              <Separator />
              <TubeDataTable
                isLoading={isLoading}
                channels={vTubeUserData.channels}
                videos={vTubeUserData.videos}
                subscribers={vTubeUserData.subscribers}
                views={vTubeUserData.views}
                likes={vTubeUserData.likes}
                shares={vTubeUserData.shares}
                ratingPoints={vTubeUserData.ratingPoints}
                rating={vTubeUserData.rating}
              />
              <Separator />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ml-[-100px]">
          <UserInteraction
            isConnected={false}
            isLoggedIn={true}
            isOwner={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TubeProfile;
