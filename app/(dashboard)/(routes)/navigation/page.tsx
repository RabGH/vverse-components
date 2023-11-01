import VNavbar from "@/components/v-ui/v-nav/v-navbar";
import VFooter from "@/components/v-ui/v-nav/v-footer";
import React from "react";
import { App } from "@/components/v-ui/emoji-mart";

const VNavigation = () => {
  return (
    <>
      <div className="h-full">
        <VNavbar userName="<Member Name>" userTitle="<Member Title>" />
        <App />
      </div>
    </>
  );
};

export default VNavigation;
