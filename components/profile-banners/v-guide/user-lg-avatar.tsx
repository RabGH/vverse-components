import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { IconUserBtn } from "@/components/icons/logo-icons";
import Image from "next/image";

export function UserLargeAvatar() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 rounded-full shrink-0">
        <Avatar size="lg">
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
      <Badge
        variant={"profile"}
        icon={<IconUserBtn className="w-6 h-6 text-primary-foreground" />}
        size="lg"
        className="mt-[-70px] z-10 mr-8 text-sm"
      >
        Personal Profile
      </Badge>
    </div>
  );
}
