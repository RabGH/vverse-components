"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { useOwner } from "@/components/contexts/owner-context";

type UserInteractionProps = {
  isMiniView?: boolean;
};

/**
 * Renders the user interaction component.
 *
 * @param {UserInteractionProps} isMiniView - Indicates whether the component is in mini view mode.
 * @return {JSX.Element} The rendered user interaction component.
 */

const UserInteraction = ({ isMiniView }: UserInteractionProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const isOwner = useOwner();

  const handleLikeClick = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  const handleSaveClick = () => {
    setIsSaved((prevSaved) => !prevSaved);
  };

  const handleConnectClick = () => {
    setIsConnected((prevConnected) => !prevConnected);
  };

  const handleReportClick = () => {
    setIsReported((prevReported) => !prevReported);
  };
  const handleBlockClick = () => {
    setIsBlocked((prevBlocked) => !prevBlocked);
  };

  const handleShareClick = () => {};

  return (
    <div className="flex-1 flex flex-wrap justify-center items-center gap-1">
      {!isOwner ? (
        // Owner sees only the Share and Edit buttons
        <>
          <Button variant="bannerBlueRed" size="banner">
            Edit
          </Button>
          <Button
            variant="bannerBlueRed"
            size="banner"
            onClick={handleShareClick}
          >
            Share
          </Button>
        </>
      ) : (
        <>
          <Button
            variant={isConnected ? "userPurple" : "blueRedSlash"}
            size="banner"
            onClick={handleConnectClick}
          >
            {isConnected ? "Disconnect" : "Connect"}
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Message
          </Button>
          <Button
            variant={isLiked ? "userPurple" : "blueRedSlash"}
            size="banner"
            onClick={handleLikeClick}
          >
            {isLiked ? "Unlike" : "Like"}
          </Button>
          <Button
            variant="bannerBlueRed"
            size="banner"
            onClick={handleShareClick}
          >
            Share
          </Button>
          <Button
            variant={isSaved ? "userPurple" : "blueRedSlash"}
            size="banner"
            onClick={handleSaveClick}
          >
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button
            size="banner"
            variant={isReported ? "userPurple" : "blueRedSlash"}
            onClick={handleReportClick}
          >
            {isReported ? "Reported" : "Report"}
          </Button>
          <Button
            size="banner"
            variant={isBlocked ? "userPurple" : "blueRedSlash"}
            onClick={handleBlockClick}
          >
            {isBlocked ? "Blocked" : "Block"}
          </Button>

          {isMiniView && (
            <Button variant="bannerBlueRed" size="banner">
              Endorse
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default UserInteraction;
