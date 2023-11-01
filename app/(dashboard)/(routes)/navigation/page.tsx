import VNavbar from "@/components/v-ui/v-nav/v-navbar";
import VFooter from "@/components/v-ui/v-nav/v-footer";
import React from "react";

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
