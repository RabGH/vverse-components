import React from "react";

import Image from "next/image";
import { UserSmallAvatar } from "../v-ui/user-small-avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import AssetInteraction from "./asset-interact";
import AssetBadges from "./asset-badges";
import AssetDetails from "./asset-details";

type AssetBannerProps = {
  data: any;
  dataType: string;
};

const AssetBanner = ({ data, dataType }: AssetBannerProps) => {
  return (
    <Card
      className={`relative z-0 rounded-xl h-fit w-fit hover:shadow-2xl hover:translate-y-[-5px] 
      hover:translate-x-[-5px] transition ease-in-out duration-300`}
    >
      <div className="w-full h-full relative">
        <Image
          src={data.imageUrl}
          alt="vVerse"
          width={1455}
          height={670}
          className="shadow-inner z-1 object-fit"
        />
        <div className="bg-opacity-40 bg-black z-[2] absolute inset-0 w-full h-full rounded-xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-[3] text-white p-3">
        <CardTitle className="flex flex-row gap-2 items-center">
          <UserSmallAvatar />
          <p className="text-base">{data.userName}</p>
        </CardTitle>
      </div>

      <CardContent className="absolute bottom-0 left-0 right-0 z-[3] p-2 text-white">
        <div className="px-2">
          <AssetDetails data={data} dataType={dataType} />
          <Separator className="bg-white/50 m-2" />

          <AssetBadges />

          <Separator className="bg-white/50 m-2" />
          <h2 className="text-2xl">{data.title}</h2>
          <Separator className="bg-white/50 m-2" />

          <AssetInteraction />
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetBanner;
