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
      <NewPostButton
        icon={ArrowRightCircle}
        label={"Dialogs"}
        link={"/dialogs"}
      />
      <NewPostButton
        icon={ArrowRightCircle}
        label={"Calendars"}
        link={"/calendars"}
      />
      <NewPostButton
        icon={ArrowRightCircle}
        label={"Badges"}
        link={"/badges"}
      />
    </div>
  );
};

export default LandingNavbar;
