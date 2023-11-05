"use client";

import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarProfileFallback } from "@/components/icons/logo-icons";

export function UserMediumAvatar() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full shrink-0">
        <Avatar size="md" className="border border-primary">
          <AvatarImage src={user?.imageUrl} alt="Vverse" />
          <AvatarFallback>
            <AvatarProfileFallback />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
