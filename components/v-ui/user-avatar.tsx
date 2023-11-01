import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar() {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full shrink-0">
        <Avatar size="md" className="border border-primary">
          <AvatarImage src="" alt="Vverse" />
          <AvatarFallback className="bg-white/50">
            <Image
              width={75}
              height={75}
              src="/icons/Logo.svg"
              alt="vverse"
              className="mt-3"
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
