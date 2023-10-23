import React from "react";

import { Button } from "@/components/ui/button";

interface UserInteractionProps {
  isConnected?: boolean;
  isOwner?: boolean;
  isLoggedIn?: boolean;
  isMiniProfile?: boolean;
}

const UserInteraction = ({
  isConnected,
  isOwner,
  isLoggedIn,
}: UserInteractionProps) => {
  return (
    <div className="flex-1 flex flex-wrap justify-center items-center gap-1">
      {isOwner ? (
        // Owner sees only the Share and Edit buttons
        <>
          <Button variant="bannerBlueRed" size="banner">
            Edit
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Share
          </Button>
        </>
      ) : isConnected ? (
        // Connected users see Disconnect, Message, Like, Edit, Share, Report, Block
        <>
          <Button variant="userPurple" size="banner">
            Disconnect
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Message
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Like
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Edit
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Share
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Report
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Block
          </Button>
        </>
      ) : isLoggedIn ? (
        // Logged in visitors see Connect, Message, Like, Share, Report, Block
        <>
          <Button variant="bannerBlueRed" size="banner">
            Connect
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Endorse
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Message
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Like
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Share
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Report
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Block
          </Button>
        </>
      ) : (
        // Visitors who are not logged in see only Message, Like, Share
        <>
          <Button variant="bannerBlueRed" size="banner">
            Message
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Like
          </Button>
          <Button variant="bannerBlueRed" size="banner">
            Share
          </Button>
        </>
      )}
    </div>
  );
};

export default UserInteraction;
