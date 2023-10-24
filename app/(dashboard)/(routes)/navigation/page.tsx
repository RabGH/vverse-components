import VNavbar from "@/components/nav/v-nav/v-navbar";
import React from "react";

const VNavigation = () => {
  return (
    <div>
      <VNavbar
        userName="<Member Name>"
        userTitle="<Member Title>"
        isLoggedIn={false}
      />
    </div>
  );
};

export default VNavigation;
