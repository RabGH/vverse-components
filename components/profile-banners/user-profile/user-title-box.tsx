import {
  IconEmailVerified,
  IconPhoneVerified,
  IconUnverifiedAgreement,
  IconUnverifiedID,
} from "@/components/icons/logo-icons";
import React from "react";

const UserTitleBox = () => {
  return (
    <div>
      <h2 className="font-extrabold text-3xl">Dr. Ahmed Hassan</h2>
      <p className="text-muted text-base">
        Large Animals Consultant at Majestic Farm
      </p>
      <div className="flex flex-row">
        <IconEmailVerified className="w-5 h-4 text-primary" />
        <IconPhoneVerified className="w-4 h-4 text-primary" />
        <IconUnverifiedID className="w-4 h-4 text-primary" />
        <IconUnverifiedAgreement className="w-4 h-4 text-primary" />
      </div>
    </div>
  );
};

export default UserTitleBox;
