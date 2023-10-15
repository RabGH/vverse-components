import React from "react";
import { NewPostButton } from "../posts/new-post-button";
import { ArrowRightCircle } from "lucide-react";

const LandingNavbar = () => {
  return (
    <div className="text-center space-x-4">
      <NewPostButton
        icon={ArrowRightCircle}
        label={"Buttons"}
        link={"/buttons"}
      />
      <NewPostButton
        icon={ArrowRightCircle}
        label={"Headers"}
        link={"/headers"}
      />
      <NewPostButton
        icon={ArrowRightCircle}
        label={"Filters"}
        link={"/filters"}
      />
    </div>
  );
};

export default LandingNavbar;
