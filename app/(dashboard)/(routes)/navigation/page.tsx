import VNavbar from "@/components/nav/v-nav/v-navbar";
import VFooter from "@/components/nav/v-nav/v-footer";
import React from "react";

const VNavigation = () => {
  return (
    <>
      <div className="h-full">
        <VNavbar
          userName="<Member Name>"
          userTitle="<Member Title>"
          isLoggedIn={false}
        />
      </div>
    </>
  );
};

export default VNavigation;
