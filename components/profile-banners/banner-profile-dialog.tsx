import { Separator } from "@/components/ui/separator";

import { UserMediumAvatar } from "@/components/profile-banners/master-banner/user-md-avatar";
import { RankMedalProps } from "@/components/profile-banners/master-banner/rank-medals";

import UserTitleBox from "@/components/profile-banners/master-banner/user-title-box";
import UserInteraction from "@/components/profile-banners/master-banner/user-interact";

import AuthorDataPoints from "@/components/profile-banners/v-profile-data-points/author-data-points";
import BlogDataPoints from "@/components/profile-banners/v-profile-data-points/blog-data-points";
import CollegeDataPoints from "@/components/profile-banners/v-profile-data-points/college-data-points";
import JobsDataPoints from "@/components/profile-banners/v-profile-data-points/jobs-data-points";
import LanceDataPoints from "@/components/profile-banners/v-profile-data-points/lance-data-points";
import MarketDataPoints from "@/components/profile-banners/v-profile-data-points/market-data-points";
import TubeDataPoints from "@/components/profile-banners/v-profile-data-points/tube-data-points";
import EventDataPoints from "@/components/profile-banners/v-profile-data-points/event-data-points";
import WebinarDataPoints from "@/components/profile-banners/v-profile-data-points/webinar-data-points";
import ExpertDataPoints from "@/components/profile-banners/v-profile-data-points/experts-data-points";
import MarketingSponsorDataPoints from "@/components/profile-banners/v-profile-data-points/marketingSponsor-data-points";
import MarketingDataPoints from "@/components/profile-banners/v-profile-data-points/marketing-data-points";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/v-dialog";
import { IconInfoFilledBlue } from "../icons/logo-icons";
import { Loader2 } from "lucide-react";

type BannerProfileProps = {
  userName: string;
  userTitle: string;
  isLoading: boolean;
  isOpenToWork?: string;
  points: number;
  endorsements: number;
  isFeatured: string;
  likes: number;
  shares: number;
  rank: RankMedalProps["rank"];
  data: any;
  dialogTitle: string;
  dataType:
    | string
    | "college"
    | "jobs"
    | "author"
    | "blog"
    | "lance"
    | "market"
    | "tube"
    | "event"
    | "webinar"
    | "marketingSponsor"
    | "marketing"
    | "experts";
};

/**
 * Renders the BannerProfileDialog component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isLoading - Determines if the component is in a loading state.
 * @param {string} props.userName - The name of the user.
 * @param {string} props.userTitle - The title of the user.
 * @param {number} props.points - The number of points.
 * @param {number} props.endorsements - The number of endorsements.
 * @param {number} props.rank - The user's rank.
 * @param {number} props.likes - The number of likes.
 * @param {number} props.shares - The number of shares.
 * @param {Object} props.data - The data object.
 * @param {string} props.dataType - The type of data.
 * @param {string} props.dialogTitle - The title of the dialog.
 * @param {string} props.isFeatured - Determines if the user is featured.
 * @param {string} props.isOpenToWork - Determines if the user is open to work.
 * @returns {JSX.Element} The rendered BannerProfileDialog component.
 */

const BannerProfileDialog = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  likes,
  shares,
  data,
  dataType,
  dialogTitle,
  isFeatured = "",
  isOpenToWork = "",
}: BannerProfileProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-10 h-10 cursor-pointer">
        <IconInfoFilledBlue className="text-white bg-blue-400 rounded-full hover:translate-y-[-5px] ease-in-out transform duration-300" />
      </DialogTrigger>
      <DialogContent className="w-fit h-fit">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="h-11 w-11 animate-spin" />
          </div>
        ) : (
          <>
            <DialogTitle className="mb-2">{dialogTitle}</DialogTitle>
            <div className="flex flex-row justify-center gap-4 px-10 py-5">
              <div className="mt-6">
                <UserMediumAvatar />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <UserTitleBox
                    userName={userName}
                    userTitle={userTitle}
                    points={points}
                    endorsements={endorsements}
                    isFeatured={isFeatured}
                    isOpenToWork={isOpenToWork}
                    rank={rank}
                    likes={likes}
                    shares={shares}
                  />
                  <div className="ml-[-100px]">
                    <div className="space-y-3">
                      <Separator />
                      {dataType === "author" && (
                        <AuthorDataPoints
                          isLoading={isLoading}
                          posts={data.posts}
                          likes={data.likes}
                          shares={data.shares}
                          rating={data.rating}
                          ratingPoints={data.ratingPoints}
                          socialPages={data.socialPages}
                          socialGroups={data.socialGroups}
                          followers={data.followers}
                          members={data.members}
                        />
                      )}
                      {dataType === "blog" && (
                        <BlogDataPoints
                          isLoading={isLoading}
                          posts={data.posts}
                          likes={data.likes}
                          shares={data.shares}
                          rating={data.rating}
                          ratingPoints={data.ratingPoints}
                        />
                      )}
                      {dataType === "college" && (
                        <CollegeDataPoints
                          isLoading={isLoading}
                          courses={data.courses}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "jobs" && (
                        <JobsDataPoints
                          isLoading={isLoading}
                          experience={data.experience}
                          salary={data.salary}
                          likes={data.likes}
                          shares={data.shares}
                        />
                      )}
                      {dataType === "lance" && (
                        <LanceDataPoints
                          isLoading={isLoading}
                          services={data.services}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          successRate={data.successRate}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "market" && (
                        <MarketDataPoints
                          isLoading={isLoading}
                          stores={data.stores}
                          products={data.products}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "tube" && (
                        <TubeDataPoints
                          isLoading={isLoading}
                          channels={data.channels}
                          videos={data.videos}
                          subscribers={data.subscribers}
                          views={data.views}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "event" && (
                        <EventDataPoints
                          isLoading={isLoading}
                          events={data.events}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "webinar" && (
                        <WebinarDataPoints
                          isLoading={isLoading}
                          webinars={data.webinars}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "experts" && (
                        <ExpertDataPoints
                          isLoading={isLoading}
                          consultations={data.consultations}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      {dataType === "marketingSponsor" && (
                        <MarketingSponsorDataPoints
                          isLoading={isLoading}
                          investments={data.investments}
                          sponsored={data.sponsored}
                          orders={data.orders}
                        />
                      )}
                      {dataType === "marketing" && (
                        <MarketingDataPoints
                          isLoading={isLoading}
                          sponsorships={data.sponsorships}
                          sales={data.sales}
                          orders={data.orders}
                          customers={data.customers}
                          likes={data.likes}
                          shares={data.shares}
                          ratingPoints={data.ratingPoints}
                          rating={data.rating}
                        />
                      )}
                      <Separator />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center ml-[-100px]">
                  <UserInteraction isMiniView={true} />
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BannerProfileDialog;
