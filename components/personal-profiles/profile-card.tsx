import React from "react";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconDateJoinedDoor } from "@/components/icons/logo-icons";

import { partOf, vGuideUserData, vUserInfoData } from "@/backend-data-test";
import GuideProfileBannerDialog from "@/components/profile-banners/v-guide/guide-profile-dialog";
import FeaturedBadge from "../v-ui/v-badges/featured-badge";

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
        <div className="bg-opacity-5 bg-black z-[2] absolute inset-0 w-full h-full rounded-xl" />
        <div className="bg-gradient-to-t from-black/80 via-black/10 to-transparent  z-[3] absolute inset-0 w-full h-full rounded-xl" />
      </div>
      <div className="absolute top-0 left-0 right-0 z-[3] text-white p-3">
        <div className="flex flex-row justify-between items-center">
          <CardTitle className="flex flex-row gap-2 items-center">
            <FeaturedBadge isFeatured="featured" iconClassName="text-white" />
            <Gender
          </CardTitle>
          <div>
            <h1>CardInteractionTop</h1>
          </div>
        </div>
      </div>

      <CardContent className="absolute bottom-0 left-0 right-0 z-[3] p-2 text-white">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row items-center gap-2">
            <IconDateJoinedDoor className="w-5 h-5 text-primary" />
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
              isFeatured={true}
              thumbsup={10000}
              shares={10000}
              partOf={partOf}
              guideUserData={vGuideUserData}
              userInfoData={vUserInfoData}
              dialogTitle={"Profile Banner V-Guide Full"}
              isAgreementVerified={false}
              isEmailVerified={true}
              isIdVerified={true}
              isPhoneVerified={true}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
