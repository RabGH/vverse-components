import React from "react";
import { SquareButton } from "../v-ui/v-buttons/square-button";
import { ArrowRightCircle } from "lucide-react";

const LandingNavbar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <SquareButton
        icon={ArrowRightCircle}
        label={"Base Components"}
        link={"/baseComponents"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Video Player Plyr"}
        link={"/videoPlayer"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Profile Banner"}
        link={"/profileBanner"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Navigation"}
        link={"/navigation"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Alert Center"}
        link={"/alertCenter"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Calendar Components"}
        link={"/calendars"}
      />
    </div>
  );
};

export default LandingNavbar;
