import React from "react";
import { SquareButton } from "../v-buttons/square-button";
import { ArrowRightCircle } from "lucide-react";

const LandingNavbar = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <SquareButton
        icon={ArrowRightCircle}
        label={"Base Components"}
        link={"/baseComponents"}
      />
      <SquareButton
        icon={ArrowRightCircle}
        label={"Video Player Plyr"}
        link={"/videoplayer"}
      />
    </div>
  );
};

export default LandingNavbar;
