import { UserAvatar } from "@/components/profile-banners/master-banner/user-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";
import JobsDataTable from "./jobs-data-table";
import { vJobUserData } from "@/backend-data-test";

interface JobProfileProps {
  isLoading: boolean;
}

const JobProfile = ({ isLoading }: JobProfileProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserAvatar />
      <div className="flex flex-col gap-4">
        <div>
          <UserTitleBox
            userName={"<Member Name>"}
            userTitle={"Job Candidate hire for work, demo vverse."}
            points={50}
            endorsements={3}
            isFeatured={true}
            isOpenToWork={true}
            rank={"vendorGold"}
          />
          <div className="ml-[-100px]">
            <div className="space-y-3">
              <Separator />
              <JobsDataTable
                isLoading={isLoading}
                experience={vJobUserData.experience}
                salary={vJobUserData.salary}
                likes={vJobUserData.likes}
                shares={vJobUserData.shares}
              />
              <Separator />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ml-[-100px]">
          <UserInteraction
            isConnected={false}
            isLoggedIn={true}
            isOwner={true}
            isMiniView={false}
          />
        </div>
      </div>
    </div>
  );
};

export default JobProfile;
