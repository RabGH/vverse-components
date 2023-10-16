import React from "react";
import { NewPostButton } from "../posts/new-post-button";
import { ArrowRightCircle } from "lucide-react";

const LandingNavbar = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
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
