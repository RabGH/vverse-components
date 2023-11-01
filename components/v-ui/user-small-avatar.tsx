import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserSmallAvatar() {
  return (
    <Avatar className="border border-primary w-14 h-14">
      <AvatarImage src="" alt="Vverse" />
      <AvatarFallback className="bg-sky-300/50">
        <Image
          width={45}
          height={45}
          src="/icons/Logo.svg"
          alt="vverse"
          className="mt-2"
        />
      </AvatarFallback>
    </Avatar>
  );
}
