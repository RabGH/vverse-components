import { UserAvatar } from "@/components/v-ui/user-avatar";
import React from "react";

interface InnerNavbar {}

const InnerNavbar = () => {
  return (
    <div>
      <UserAvatar />
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default InnerNavbar;
