import VAlertProvider from "@/components/alert-center/v-alert-provider";
import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import React from "react";

/**
 * Renders the Alert Center page.
 *
 * @return {JSX.Element} The rendered Alert Center page.
 */
const AlertCenterPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <VHeroHeader
        pillar={"V-Guide Alert Center"}
        description={
          "The First Mega Directory For The Veterinary Industry Global Community"
        }
      />
      <VAlertProvider />
    </div>
  );
};

export default AlertCenterPage;
