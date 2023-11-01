"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

export type AssetInteractionTopProps = {
  isOwner?: boolean;
  buttonDataType?: "follow" | "join" | "subscribe" | "buy" | "apply" | "enroll";
};

const AssetInteractionTop = ({
  isOwner,
  buttonDataType,
}: AssetInteractionTopProps) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleFollowClick = () => {
    setIsFollowed((prevFollowed) => !prevFollowed);
  };

  const handleJoinClick = () => {
    setIsJoined((prevJoined) => !prevJoined);
  };

  const handleSubscribeClick = () => {
    setIsSubscribed((prevSubscribed) => !prevSubscribed);
  };

  const handleApplyClick = () => {
    setIsApplied((prevApplied) => !prevApplied);
  };

  const handleEnrollClick = () => {
    setIsEnrolled((prevEnrolled) => !prevEnrolled);
  };

  const handleBuyClick = () => {};

  return (
    <div className="flex flex-row gap-2">
      {isOwner && (
        <>
          <Button>Share</Button>
          <Button>Edit</Button>
        </>
      )}
      {buttonDataType === "follow" && (
        <Button
          onClick={handleFollowClick}
          size="banner"
          variant={isFollowed ? "userPurple" : "blueRedSlash"}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      )}
      {buttonDataType === "join" && (
        <Button
          onClick={handleJoinClick}
          size="banner"
          variant={isJoined ? "userPurple" : "blueRedSlash"}
        >
          {isJoined ? "Leave" : "Join"}
        </Button>
      )}
      {buttonDataType === "subscribe" && (
        <Button
          onClick={handleSubscribeClick}
          size="banner"
          variant={isSubscribed ? "userPurple" : "blueRedSlash"}
        >
          {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
      )}
      {buttonDataType === "buy" && (
        <Button onClick={handleBuyClick} size="banner" variant={"blueRedSlash"}>
          Buy
        </Button>
      )}
      {buttonDataType === "apply" && (
        <Button
          onClick={handleApplyClick}
          size="banner"
          variant={isApplied ? "userPurple" : "blueRedSlash"}
        >
          {isApplied ? "Withdraw" : "Apply"}
        </Button>
      )}
      {buttonDataType === "enroll" && (
        <Button
          onClick={handleEnrollClick}
          size="banner"
          variant={isEnrolled ? "userPurple" : "blueRedSlash"}
        >
          {isEnrolled ? "Enrolled" : "Enroll"}
        </Button>
      )}
    </div>
  );
};

export default AssetInteractionTop;
