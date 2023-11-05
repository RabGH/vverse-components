"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  IconFlag,
  IconSaveFloppyDisk,
  IconShare,
  IconStar,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { useMount } from "@/hooks/mount-hook";
import { useOwner } from "@/components/contexts/owner-context";

const AssetInteraction = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isRated, setIsRated] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const isMounted = useMount();
  const { isOwner } = useOwner();

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

  if (!isMounted) return null;

  return (
    <div className="flex flex-row justify-center items-center gap-2 p-2">
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
            icon={<IconShare className="w-4 h-4" />}
            onClick={handleShareClick}
          >
            Share
          </Button>
          <Button
            size="banner"
            variant={isRated ? "userPurple" : "blueRedSlash"}
            icon={<IconStar className="w-4 h-4" />}
            onClick={handleRateClick}
          >
            {isRated ? "Rated" : "Rate"}
          </Button>
          <Button
            size="banner"
            variant={isSaved ? "userPurple" : "blueRedSlash"}
            icon={<IconSaveFloppyDisk className="w-4 h-4" />}
            onClick={handleSaveClick}
          >
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Button
            size="banner"
            variant={isReported ? "userPurple" : "blueRedSlash"}
            icon={<IconFlag className="w-4 h-4" />}
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
