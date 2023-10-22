import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DoctorImage from "../../../public/images/DoctorImage.png";
import DoctorImageRound from "../../../public/images/DoctorImageRound.png";

export function UserAvatar() {
  return (
    <div className="w-80 h-80 rounded-full shrink-0">
      <Image
        src={DoctorImageRound}
        alt="User"
        width={800}
        height={600}
        objectFit="contain"
      />
    </div>
  );
}
