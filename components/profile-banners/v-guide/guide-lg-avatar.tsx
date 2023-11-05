"use client"

import { useUser } from "@clerk/nextjs";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconUserBtn } from "@/components/icons/logo-icons";

type UserLargeAvatarProps = {
  profileType?: "Personal" | "Business";
};

export function UserLargeAvatar({
  profileType = "Personal",
}: UserLargeAvatarProps) {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 rounded-full shrink-0">
        <Avatar size="lg">
          <AvatarImage src="" alt="Vverse" />
          <AvatarFallback className="text-5xl">
            {user?.firstName?.charAt(0).toUpperCase()}
            {user?.lastName?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <Badge
        variant={"profile"}
        icon={<IconUserBtn className="w-6 h-6 text-primary-foreground" />}
        size="lg"
        className="mt-[-70px] z-10 mr-8 text-sm"
      >
        {profileType} Profile
      </Badge>
    </div>
  );
}
