import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DoctorImage from "../../../public/images/DoctorImage.png";
import DoctorImageRound from "../../../public/images/DoctorImageRound.png";
import { Badge } from "@/components/ui/badge";
import { IconUserBtn } from "@/components/icons/logo-icons";

export function UserLargeAvatar() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 rounded-full shrink-0">
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback />
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
