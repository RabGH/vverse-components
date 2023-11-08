import React from "react";
import PersonalGuideData, {
  PersonalGuideDataProps,
} from "@/components/personal-profiles/personal-profile-data/personal-guide-data";

// main place where types needs to be called
type PersonalProfileDetailsProps = {
  dataGuide: PersonalGuideDataProps;
  dataType: "guide" | string;
};

/**
 * Renders the profile details for a person.
 *
 * @param {PersonalProfileDetailsProps} data - The data containing the profile details.
 * @param {string} dataType - The type of data to be displayed.
 * @return {JSX.Element} The rendered profile details component.
 */

const PersonProfileDetails = ({
  dataGuide,
  dataType,
}: PersonalProfileDetailsProps) => {
  return (
    <div>
      {dataType === "guide" && (
        <PersonalGuideData
          assets={dataGuide.assets}
          sales={dataGuide.sales}
          endorsements={dataGuide.endorsements}
          connections={dataGuide.connections}
          rating={dataGuide.rating}
          ratingPoints={dataGuide.ratingPoints}
          investments={dataGuide.investments}
        />
      )}
    </div>
  );
};

export default PersonProfileDetails;
