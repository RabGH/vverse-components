import React from "react";

import VNavbar from "@/components/v-ui/v-nav/v-navbar";

const VNavigation = () => {
  return (
    <>
      <div className="h-full">
        <VNavbar userName="<Member Name>" userTitle="<Member Title>" />
      </div>
    </>
  );
};

export default VNavigation;
