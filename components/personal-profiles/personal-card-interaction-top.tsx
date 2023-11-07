"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { IconShare } from "@/components/icons/logo-icons";
import { useOwner } from "@/components/contexts/owner-context";

export type ProfileCardInteractionTopProps = {
  profileCardButtonType: string;
};

/**
 * Renders the top section of the profile card interaction component.
 *
 * @param {ProfileCardInteractionTopProps} profileCardButtonType - The type of profile card button.
 * @return {JSX.Element} The rendered component.
 */

const ProfileCardInteractionTop = ({
  profileCardButtonType,
}: ProfileCardInteractionTopProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isHired, setIsHired] = useState(false);
  const [isInvited, setIsInvited] = useState(false);
  const { isOwner } = useOwner();

  const handleConnectedClick = () => {
    setIsConnected((prevConnected) => !prevConnected);
  };

  const handleHiredClick = () => {
    setIsHired((prevHired) => !prevHired);
  };

  const handleInvitedClick = () => {
    setIsInvited((prevInvited) => !prevInvited);
  };

  return (
    <div className="flex flex-col gap-2 flex-end">
      {isOwner && (
        <>
          <Button size="banner" variant={"blueRedSlash"}>
            Edit
          </Button>
        </>
      )}
      {!isOwner && (
        <>
          <Button
            variant={isConnected ? "userPurple" : "blueRedSlash"}
            size="md"
            onClick={handleConnectedClick}
          >
            {isConnected ? "Disconnect" : "Connect"}
          </Button>
          {profileCardButtonType === "jobs" && (
            <>
              <Button
                variant={isHired ? "userPurple" : "blueRedSlash"}
                size="md"
                onClick={handleHiredClick}
              >
                {isHired ? "Hire" : "Hired"}
              </Button>
              <Button
                variant={isInvited ? "userPurple" : "blueRedSlash"}
                size="md"
                onClick={handleInvitedClick}
              >
                {isHired ? "Invite" : "Un-Invite"}
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileCardInteractionTop;
