import React from "react";
import { SquareButton } from "../v-buttons/square-button";
import { ArrowRightCircle } from "lucide-react";

const LandingNavbar = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-center">
      <SquareButton
        icon={ArrowRightCircle}
        label={"Base Components"}
        link={"/baseComponents"}
      />
    </div>
  );
};

export default LandingNavbar;
