"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { IconShare } from "@/components/icons/logo-icons";
import { useOwner } from "@/components/contexts/owner-context";

export type AssetInteractionTopProps = {
  buttonDataType?: "follow" | "join" | "subscribe" | "buy" | "apply" | "enroll";
};

/**
 * Renders the top section of the asset interaction component.
 *
 * @param {AssetInteractionTopProps} buttonDataType - The type of button data.
 * @return {JSX.Element} Returns the JSX element of the top section.
 */

const AssetInteractionTop = ({ buttonDataType }: AssetInteractionTopProps) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { isOwner } = useOwner();

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
          <Button size="icon" icon={<IconShare className="w-4 h-4" />} />
          <Button size="banner" variant={"blueRedSlash"}>
            Edit
          </Button>
        </>
      )}
      {!isOwner && (
        <>
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
            <Button
              onClick={handleBuyClick}
              size="banner"
              variant={"blueRedSlash"}
            >
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
        </>
      )}
    </div>
  );
};

export default AssetInteractionTop;
