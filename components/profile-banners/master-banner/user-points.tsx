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
