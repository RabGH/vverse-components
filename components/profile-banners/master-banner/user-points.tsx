"use client";

import { Loader2 } from "lucide-react";

import {
  IconBullHorn,
  IconLoader,
  IconPointsCrown,
  IconShare,
  IconThumbsUp,
} from "@/components/icons/logo-icons";
import { useOwner } from "@/components/contexts/owner-context";

type UserPointProps = {
  points: number;
  endorsements: number;
  thumbsup: number;
  shares: number;
  isLoading?: boolean;
};

/**
 * Renders the UserPoints component.
 *
 * @param {boolean} isLoading - Indicates if the component is in a loading state.
 * @param {number} points - The number of points for the user.
 * @param {number} endorsements - The number of endorsements for the user.
 * @param {number} thumbsup - The number of thumbs up for the user.
 * @param {number} shares - The number of shares for the user.
 * @return {JSX.Element} The rendered UserPoints component.
 */

const UserPoints = ({
  isLoading,
  points,
  endorsements,
  thumbsup,
  shares,
}: UserPointProps) => {
  const isOwner = useOwner();
  return (
    <section className="flex flex-row gap-2">
      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : (
        <div className="flex flex-row justify-center items-center gap-1">
          <IconThumbsUp className="w-7 h-7 text-primary" />
          <p className="text-muted">{thumbsup}</p>
        </div>
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : (
        <div className="flex flex-row justify-center items-center gap-1">
          <IconShare className="w-7 h-7 text-primary" />
          <p className="text-muted">{shares}</p>
        </div>
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : (
        <div className="flex flex-row justify-center items-center gap-1">
          <IconBullHorn className="w-7 h-7 text-primary" />
          <p className="text-muted">{endorsements}</p>
        </div>
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : (
        !isOwner && (
          <div className="flex flex-row justify-center items-center gap-1">
            <IconPointsCrown className="w-7 h-7 text-primary" />
            <p className="text-muted">{points}</p>
          </div>
        )
      )}
    </section>
  );
};

export default UserPoints;
