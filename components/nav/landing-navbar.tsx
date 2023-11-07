import React from "react";
import { SquareButton } from "../v-ui/v-buttons/square-button";
import { ArrowRightCircle } from "lucide-react";

/**
 * Renders the navigation menu demo. Can be deleted, this is just to navigate through the current demo of components.
 *
 * @return {JSX.Element} The rendered navigation menu demo.
 */

const LandingNavbar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <SquareButton
        icon={ArrowRightCircle}
        label={"Base Components"}
        link={"/base-components"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Video Player"}
        link={"/video-player"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Profile Banner"}
        link={"/profile-banners"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Navigation"}
        link={"/navigation"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Alert Center"}
        link={"/alert-center"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Calendar Components"}
        link={"/calendars"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Asset Banners"}
        link={"/asset-banners"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Text Editors"}
        link={"/text-editor"}
      />
    </div>
  );
};

export default LandingNavbar;
