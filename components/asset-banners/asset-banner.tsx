import React from "react";

import Image from "next/image";
import { UserSmallAvatar } from "../v-ui/user-small-avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconCalendar, IconPrivacy, IconZap } from "../icons/logo-icons";
import AssetButtons from "./asset-buttons";
import AssetBadges from "./asset-badges";
import AssetDetails from "./asset-details";

const AssetBanner = () => {
  return (
    <Card className="relative z-0 rounded-xl h-fit w-fit hover:shadow-2xl hover:translate-y-[-5px] transition ease-in-out duration-300">
      <div className="w-full h-full relative">
        <Image
          src="/images/CowImageArticleBanner.png"
          alt="vVerse"
          width={1455}
          height={670}
          className="shadow-inner z-1 object-fit"
        />
        <div className="bg-opacity-20 bg-black z-[2] absolute inset-0 w-full h-full rounded-xl" />
      </div>

      <div className="absolute top-0 left-0 right-0 z-[3] text-white p-3">
        <CardTitle className="flex flex-row gap-2 items-center">
          <UserSmallAvatar />
          <p className="text-base">{"<User Name>"}</p>
        </CardTitle>
      </div>

      <CardContent className="absolute bottom-0 left-0 right-0 z-[3] p-2 text-white">
        <div className="px-2">
          <AssetDetails />
          <Separator className="bg-white/50 m-2" />

          <AssetBadges />

          <Separator className="bg-white/50 m-2" />
          <h2 className="text-2xl">
            Massa suscipit habitant risus a pretium odio sem. Ut eget neque
            risus egestas eget quis nec interdum.
          </h2>
          <Separator className="bg-white/50 m-2" />

          <AssetButtons />
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetBanner;
