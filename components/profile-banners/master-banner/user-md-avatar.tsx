"use client";

import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserMediumAvatar() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full shrink-0">
        <Avatar size="md" className="border border-primary">
          <AvatarImage src="" alt="Vverse" />
          <AvatarFallback>
            {user?.firstName?.charAt(0).toUpperCase()}
            {user?.lastName?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
