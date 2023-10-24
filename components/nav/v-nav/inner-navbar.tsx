import { UserAvatar } from "@/components/v-ui/user-avatar";
import React from "react";

interface InnerNavbar {}

const InnerNavbar = () => {
  return (
    <div className="flex flex-row items-center gap-4 p-6">
      <UserAvatar />
      <div className="flex flex-col text-background gap-1">
        <h2 className="text-2xl">Dr.Ahmad Hassan</h2>
        <p className="text-sm">
          Consultant at majestick animal farms, VVerse-Demo
        </p>
      </div>
    </div>
  );
};

export default InnerNavbar;
