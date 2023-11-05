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

type BannerProfileProps = {
  userName: string;
  userTitle: string;
  isLoading: boolean;
  isOpenToWork?: boolean;
  points: number;
  endorsements: number;
  isFeatured: boolean;
  thumbsup: number;
  shares: number;
  rank: RankMedalProps["rank"];
  data: any;
  dataType:
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

const BannerProfile = ({
  isLoading,
  userName,
  userTitle,
  points,
  endorsements,
  rank,
  thumbsup,
  shares,
  data,
  dataType,
  isFeatured = true,
  isOpenToWork = false,
}: BannerProfileProps) => {
  return (
    <div className="flex flex-row justify-center gap-4">
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
            thumbsup={thumbsup}
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
  );
};

export default BannerProfile;
