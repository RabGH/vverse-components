import React from "react";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IconDateJoinedDoor } from "@/components/icons/logo-icons";

import { partOf, vGuideUserData } from "@/backend-data-test";
import GuideProfileBannerDialog from "@/components/profile-banners/v-guide/guide-profile-dialog";
import FeaturedBadge from "@/components/v-ui/v-badges/featured-badge";
import GenderBadge from "@/components/v-ui/v-badges/gender-badge";
import LocationBadge from "@/components/v-ui/v-badges/location-badge";
import CountryBadge from "@/components/v-ui/v-badges/country-badge";
import ProfileCardInteractionTop from "@/components/personal-profiles/personal-card-interaction-top";
import { Separator } from "@/components/ui/separator";

/**
 * Renders a profile card component.
 *
 * @return {JSX.Element} The rendered profile card component.
 */

const ProfileCard = () => {
  return (
    <Card
      className={`relative z-0 h-fit w-fit rounded-xl hover:shadow-2xl hover:translate-y-[-5px] 
      hover:translate-x-[-5px] transition ease-in-out duration-300 overflow-hidden`}
    >
      <div className="w-full h-full relative">
        <Image
          src={"/images/DoctorImage.png"}
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
            <p>15-Sep-2022 02:45 PM</p>
          </div>
          <div>
            <GuideProfileBannerDialog
              isLoading={false}
              userName={"<Guide Name>"}
              userTitle={"Demo Profile Banner V-Guide Banner"}
              rank={"standardSilver"}
              currency={"$"}
              points={1000}
              endorsements={10000}
              isFeatured={"featured"}
              likes={10000}
              shares={10000}
              partOf={partOf}
              guideUserData={vGuideUserData}
              dialogTitle={"Profile Banner V-Guide Full"}
              isAgreementVerified={false}
              isEmailVerified={true}
              isIdVerified={true}
              isPhoneVerified={true}
              dialogTriggerClassName="w-7 h-7"
              profileType={"guide"}
            />
          </div>
        </div>
        <Separator className="bg-white my-2" />
        <h2>User Name</h2>
        <p>User Title</p>
        <Separator className="bg-white my-2" />
        {/* <UserProfileData /> */}
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
