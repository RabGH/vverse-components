import { VBadges } from "@/components/badges/v-badge";
import Heading from "@/components/nav/heading";
import { ArrowUpRightSquare } from "lucide-react";
import React from "react";

const BadgePage = () => {
  return (
    <div>
      <Heading
        title={"V-Verse Badges"}
        description={
          "Different colored badges, can be sized, icon added, turned into a button or link"
        }
        icon={ArrowUpRightSquare}
      />
      <VBadges />
    </div>
  );
};

export default BadgePage;
