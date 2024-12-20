import { useUser } from "@clerk/nextjs";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * Renders the user avatar component.
 *
 * @return {JSX.Element} The default user avatar component.
 */

export function UserAvatar() {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-full shrink-0">
        <Avatar size="md" className="border border-primary">
          <AvatarImage src={user?.imageUrl} alt="Vverse" />
          <AvatarFallback className="bg-white/50">
            <Image
              width={75}
              height={75}
              src="/svgs/Logo.svg"
              alt="vverse"
              className="mt-3"
            />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
