import React from "react";
import PersonalGuideData from "@/components/personal-profiles/personal-profile-data/personal-guide-data";

// main place where types needs to be called
type PersonalProfileDetailsProps = {
  data: any;
  dataType: string;
};

/**
 * Renders the profile details for a person.
 *
 * @param {PersonalProfileDetailsProps} data - The data containing the profile details.
 * @param {string} dataType - The type of data to be displayed.
 * @return {JSX.Element} The rendered profile details component.
 */

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
