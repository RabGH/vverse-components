import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type UserMediumAvatarProps = {
  user?: string;
};

export function UserMediumAvatar({ user }: UserMediumAvatarProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full shrink-0">
        <Avatar size="md" className="border border-primary">
          <AvatarImage src="" alt="Vverse" />
          <AvatarFallback>
            <Image
              fill
              objectFit="cover"
              src="/images/DoctorImage.png"
              alt="vverse"
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
