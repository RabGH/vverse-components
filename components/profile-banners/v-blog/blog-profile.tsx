import { UserAvatar } from "@/components/profile-banners/master-banner/user-avatar";
import { Separator } from "@/components/ui/separator";
import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import BlogDataTable from "@/components/profile-banners/v-blog/blog-data-table";
import { vBlogUserData } from "@/backend-data-test";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";

interface BlogProfileProps {
  isLoading: boolean;
}

const BlogProfile = ({ isLoading }: BlogProfileProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <UserAvatar />
      <div className="flex flex-col gap-4">
        <div>
          <UserTitleBox
            userName={"<Member Name>"}
            userTitle={
              "Blogger at the blogging website for blogs, demo vverse."
            }
            points={50}
            endorsements={3}
            isFeatured={true}
            rank={"ambassadorPlatinum"}
          />
          <div className="ml-[-100px]">
            <div className="space-y-3">
              <Separator />
              <BlogDataTable
                isLoading={isLoading}
                posts={vBlogUserData.posts}
                likes={vBlogUserData.likes}
                shares={vBlogUserData.shares}
                rating={vBlogUserData.rating}
                ratingPoints={vBlogUserData.ratingPoints}
              />
              <Separator />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ml-[-100px]">
          <UserInteraction
            isConnected={true}
            isLoggedIn={true}
            isOwner={true}
            isMiniView={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogProfile;
