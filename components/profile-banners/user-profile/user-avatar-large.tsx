import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DoctorImage from "../../../public/images/DoctorImage.png";
import DoctorImageRound from "../../../public/images/DoctorImageRound.png";

export function UserAvatar() {
  return (
    <Avatar className="w-80 h-80 border border-primary">
      {/* <AvatarImage src={DoctorImage} alt="User" /> */}
      <Image src={DoctorImage} alt="User" fill className="rounded-full" />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
  );
}
