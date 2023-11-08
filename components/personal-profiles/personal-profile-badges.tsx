import React from "react";

import { PersonalGuideDataProps } from "@/components/personal-profiles/personal-profile-data/personal-guide-data";

type PersonalProfileBadgesProps = {
  data: any;
  dataType: "guide" | string;
};

const PersonalProfileBadges = ({
  data,
  dataType,
}: PersonalProfileBadgesProps) => {
  return <div>PersonalProfileBadges</div>;
};

export default PersonalProfileBadges;
