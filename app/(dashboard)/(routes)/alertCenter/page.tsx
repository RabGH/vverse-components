import VAlertProvider from "@/components/alert-center/v-alert-provider";
import VHeroHeader from "@/components/v-ui/hero-header";
import React from "react";

const AlertCenterPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <VHeroHeader />
      <VAlertProvider />
    </div>
  );
};

export default AlertCenterPage;
