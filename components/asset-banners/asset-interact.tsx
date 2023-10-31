"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconThumbsUp } from "../icons/logo-icons";

type AssetInteractionProps = {
  isOwner?: boolean;
};

const AssetInteraction = ({ isOwner }: AssetInteractionProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [isReported, setIsReported] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevLiked) => !prevLiked);
  };

  const handleSaveClick = () => {
    setIsSaved((prevSaved) => !prevSaved);
  };

  const handleRateClick = () => {
    setIsRated((prevRated) => !prevRated);
  };

  const handleReportClick = () => {
    setIsReported((prevReported) => !prevReported);
  };

  const handleShareClick = () => {};

  return (
    <div className="flex flex-row justify-center items-center gap-6">
      {!isOwner && (
        <>
          <Button
            size="banner"
            variant={isLiked ? "userPurple" : "blueRedSlash"}
            icon={<IconThumbsUp className="w-4 h-4" />}
            onClick={handleLikeClick}
          >
            {isLiked ? "Unlike" : "Like"}
          </Button>
          <Button
            size="banner"
            variant={"blueRedSlash"}
            icon={<IconThumbsUp className="w-4 h-4" />}
            onClick={handleShareClick}
          >
            Share
          </Button>
          <Button
            size="banner"
            variant={isRated ? "userPurple" : "blueRedSlash"}
            icon={<IconThumbsUp className="w-4 h-4" />}
            onClick={handleRateClick}
          >
            {isRated ? "Rated" : "Rate"}
          </Button>
          <Button
            size="banner"
            variant={isSaved ? "userPurple" : "blueRedSlash"}
            icon={<IconThumbsUp className="w-4 h-4" />}
            onClick={handleSaveClick}
          >
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button
            size="banner"
            variant={isReported ? "userPurple" : "blueRedSlash"}
            icon={<IconThumbsUp className="w-4 h-4" />}
            onClick={handleReportClick}
          >
            {isReported ? "Reported" : "Report"}
          </Button>
        </>
      )}
    </div>
  );
};

export default AssetInteraction;
