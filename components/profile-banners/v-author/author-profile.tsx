import { UserAvatar } from "@/components/profile-banners/master-banner/user-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import AuthorDataTable from "@/components/profile-banners/v-author/author-data-table";
import { vAuthorUserData } from "@/backend-data-test";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";

interface AuthorProfileProps {
  isLoading: boolean;
}

const AuthorProfile = ({ isLoading }: AuthorProfileProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserAvatar />
      <div className="flex flex-col gap-4">
        <div>
          <UserTitleBox
            userName={"<Member Name>"}
            userTitle={
              "Author at the blogging website for authors, demo vverse."
            }
            points={50}
            endorsements={3}
            isFeatured={true}
            rank={"standardGold"}
          />
          <div className="ml-[-100px]">
            <div className="space-y-3">
              <Separator />
              <AuthorDataTable
                isLoading={isLoading}
                posts={vAuthorUserData.posts}
                likes={vAuthorUserData.likes}
                shares={vAuthorUserData.shares}
                rating={vAuthorUserData.rating}
                ratingPoints={vAuthorUserData.ratingPoints}
                socialPages={vAuthorUserData.socialPages}
                socialGroups={vAuthorUserData.socialGroups}
                followers={vAuthorUserData.followers}
                members={vAuthorUserData.members}
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

export default AuthorProfile;
