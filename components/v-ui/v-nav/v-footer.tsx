import React from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconPintrest,
  IconSnapchat,
  IconTikTok,
  IconTwitter,
  IconYoutube,
  LogoWhite,
} from "@/components/icons/logo-icons";
import { Separator } from "@/components/ui/separator";
import VNavLinks from "@/components/v-ui/v-nav/v-nav-links";
import {
  vAboutUsLinks,
  vAgencyLinks,
  vFooterAssetLinks,
  vFooterTheMembersLinks,
  vFooterTheVs,
  vHubLinks,
  vOpportunityLinks,
} from "@/constants";
import VFooterAds from "./v-footer-ads";
import { images } from "@/backend-data-test";

/**
 * Renders the content of the footer. Needs to be updated, icon colors in logo-icons file can be changed for those specific icons, ctrl + F the icon in logo-icons.
 *
 * @return {JSX.Element} The JSX element representing the footer content.
 */

const VFooterContent = () => {
  return (
    <>
      <VFooterAds images={images} />
      <footer className="relative bottom-0 min-h-[900px] lg:min-h-[800px]">
        <div>
          <Image
            src="/bg-svgs/VVerseNavBg.svg"
            alt="vverse"
            fill
            className="shadow-inner object-cover"
          />
          <div className="absolute bottom-0 top-0 left-0 right-0 w-full h-full p-8 z-[2]">
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col justify-start max-w-lg gap-6">
                <LogoWhite className="w-56 h-9" />
                <p className="text-white text-start">
                  The First Of It&apos;s Kind Worldwide, Mega New Eco-System For
                  the Veterinary Industry Global Community
                </p>
                <Separator className="bg-white" />
                <div className="flex flex-col justify-start gap-2">
                  <h2 className="text-white text-lg font-bold">
                    Let&apos;s Talk
                  </h2>
                  <p className="flex flex-row text-white items-center gap-2">
                    <IconMail className="w-4 h-4" /> Info@Myvverse.com
                  </p>
                  <p className="flex flex-row text-white items-center gap-2">
                    <Phone className="w-4 h-4" /> + 971 52 7956665
                  </p>
                  <p className="flex flex-row text-white items-center gap-2">
                    <MapPin className="w-4 h-4" /> Virtually Managed From
                    UAE-Dubai
                  </p>
                </div>
                <Separator className="bg-white" />
                <div className="flex flex-row justify-center items-center w-full gap-2 lg:gap-6">
                  <IconLinkedin className="text-white hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconFacebook className="hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconTwitter className="text-white hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconInstagram className="text-white hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconPintrest className="text-white hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconYoutube className="hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconTikTok className="text-white hover:translate-y-[-5px] ease-in-out duration-300 transition" />{" "}
                  <IconSnapchat className="text-white hover:translate-y-[-5px] ease-in-out duration-300 transition" />
                </div>
                <Separator className="bg-white" />
                <div className="flex flex-col gap-2">
                  <h2 className="text-white text-lg font-bold">Coming Soon</h2>
                  <div className="flex flex-row gap-4">
                    <Image
                      src="/images/download-on-appstore.png"
                      alt="vVerse"
                      width={150}
                      height={50}
                      className="hover:translate-y-[-5px] ease-in-out duration-300 transition shadow-lg"
                    />
                    <Image
                      src="/images/download-on-googleplay.png"
                      alt="vVerse"
                      width={150}
                      height={50}
                      className="hover:translate-y-[-5px] ease-in-out duration-300 transition shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full lg:ml-40">
                <VNavLinks
                  sectionLinks={vAboutUsLinks}
                  sectionTitle={"About Us"}
                />
                <VNavLinks
                  sectionLinks={vOpportunityLinks}
                  sectionTitle={"The Opportunity"}
                />
                <VNavLinks
                  sectionLinks={vAgencyLinks}
                  sectionTitle={"The Agency"}
                />
                <VNavLinks sectionLinks={vHubLinks} sectionTitle={"The Hub"} />
              </div>

              <div className="w-full">
                <VNavLinks
                  sectionLinks={vFooterTheVs}
                  sectionTitle={"About Us"}
                />
              </div>
              <div className="w-full">
                <VNavLinks
                  sectionLinks={vFooterAssetLinks}
                  sectionTitle={"The Assets"}
                />
              </div>
              <div className="w-full">
                <VNavLinks
                  sectionLinks={vFooterTheMembersLinks}
                  sectionTitle={"The Members"}
                />
              </div>
            </div>
            <Separator className="bg-white w-full flex items-center mt-[150px]" />
            <div className="flex flex-row justify-between items-center text-white mt-6">
              <p>Copyright © 2023 V-Verse</p>
              <p>
                Built With <span className="text-red-500">❤</span> By Area-H
              </p>
              <p>Terms & Conditions - Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="bg-opacity-20 bg-black z-[1] absolute bottom-0 w-full h-full" />
      </footer>
    </>
  );
};

export default VFooterContent;
