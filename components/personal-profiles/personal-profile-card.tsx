import React from "react";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IconDateJoinedDoor } from "@/components/icons/logo-icons";

import GuideProfileBannerDialog from "@/components/profile-banners/v-guide/guide-profile-dialog";
import FeaturedBadge from "@/components/v-ui/v-badges/featured-badge";
import GenderBadge from "@/components/v-ui/v-badges/gender-badge";
import LocationBadge from "@/components/v-ui/v-badges/location-badge";
import CountryBadge from "@/components/v-ui/v-badges/country-badge";
import ProfileCardInteractionTop from "@/components/personal-profiles/personal-card-interaction-top";
import { Separator } from "@/components/ui/separator";
import PersonProfileDetails from "@/components/personal-profiles/personal-profile-details";

type ProfileCardProps = {
  data: any;
  dataType: string;
  userName: string;
  userTitle: string;
  date: string;
};

/**
 * Renders a profile card component.
 *
 * @param {ProfileCardProps} data - the data for the profile card
 * @param {string} dataType - the type of data
 * @param {string} userName - the user's name
 * @param {string} userTitle - the user's title
 * @param {string} date - the date
 * @return {JSX.Element} - the rendered profile card component
 */
const ProfileCard = ({
  data,
  dataType,
  userName,
  userTitle,
  date,
}: ProfileCardProps) => {
  return (
    <Card
      className={`relative z-0 h-fit w-fit rounded-xl hover:shadow-2xl hover:translate-y-[-5px] 
      hover:translate-x-[-5px] transition ease-in-out duration-300 overflow-hidden`}
    >
      <div className="w-full h-full relative">
        <Image
          src={data.urlImage}
          alt="vVerse"
          width={450}
          height={570}
          className="shadow-inner z-1 object-fit rounded-xl"
        />
        <div className="bg-opacity-0 bg-black z-[2] absolute inset-0 w-full h-full rounded-xl" />
        <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent  z-[3] absolute inset-0 w-full h-full rounded-xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 z-[3] text-white p-3">
        <div className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-2 items-start justify-start">
            <FeaturedBadge
              isFeatured="featured"
              iconClassName="text-white"
              badgeClassName=""
            />
            <GenderBadge
              gender="Male"
              iconClassName="text-white"
              badgeClassName=""
            />
            <CountryBadge country="egypt" badgeClassName="" />
            <LocationBadge location="UAE-Dubai" badgeClassName="" />
          </CardTitle>
          <div>
            <ProfileCardInteractionTop profileCardButtonType={""} />
          </div>
        </div>
      </div>

      <CardContent className="absolute bottom-0 left-0 right-0 z-[3] p-2 text-white">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center gap-2">
            <IconDateJoinedDoor className="w-6 h-6 text-primary" />
            <p>{date}</p>
          </div>
          <div>
            <GuideProfileBannerDialog
              isLoading={false}
              userName={data.userName}
              userTitle={data.userTitle}
              rank={data.rank}
              currency={data.currency}
              points={data.points}
              endorsements={data.endorsements}
              isFeatured={data.isFeatured}
              likes={data.likes}
              shares={data.shares}
              partOf={data.partOf}
              guideUserData={data}
              dialogTitle={userName}
              isAgreementVerified={data.isAgreementVerified}
              isEmailVerified={data.isEmailVerified}
              isIdVerified={data.isIdVerified}
              isPhoneVerified={data.isPhoneVerified}
              dialogTriggerClassName="w-7 h-7"
              profileType={"guide"}
            />
          </div>
        </div>
        <Separator className="bg-white my-2" />
        <h2>{userName}</h2>
        <p>{userTitle}</p>
        <Separator className="bg-white my-2" />
        <PersonProfileDetails dataGuide={data} dataType={dataType} />
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
