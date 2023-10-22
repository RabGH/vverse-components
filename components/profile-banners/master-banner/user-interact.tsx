import React from "react";

import { Button } from "@/components/ui/button";

interface UserInteractionProps {
  isConnected?: boolean;
}

const UserInteraction = ({ isConnected }: UserInteractionProps) => {
  return (
    <div className="flex-1 flex flex-wrap justify-center items-center gap-1">
      {isConnected ? (
        <Button variant="userPurple" size="banner">
          Disconnect
        </Button>
      ) : (
        <Button variant="bannerBlueRed" size="banner">
          Connect
        </Button>
      )}
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
    </div>
  );
};

export default UserInteraction;
