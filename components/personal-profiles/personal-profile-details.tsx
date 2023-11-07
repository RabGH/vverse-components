import React from "react";
import PersonalGuideData from "@/components/personal-profiles/personal-profile-data/personal-guide-data";

// main place where types needs to be called
type PersonalProfileDetailsProps = {
  data: any;
  dataType: string;
};

const PersonProfileDetails = ({
  data,
  dataType,
}: PersonalProfileDetailsProps) => {
  return (
    <div>
      {dataType === "guide" && (
        <PersonalGuideData
          assets={data.assets}
          sales={data.sales}
          endorsements={data.endorsements}
          connections={data.connections}
          rating={data.rating}
          ratingPoints={data.ratingPoints}
          investments={data.investments}
        />
      )}
    </div>
  );
};

export default PersonProfileDetails;
