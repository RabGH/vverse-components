import { useUser } from "@clerk/nextjs";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * Renders a small avatar component for the user.
 *
 * @return {JSX.Element} The small avatar component.
 */

export function UserSmallAvatar() {
  const { user } = useUser();
  return (
    <Avatar className="border border-primary w-14 h-14">
      <AvatarImage src={user?.imageUrl} alt="Vverse" />
      <AvatarFallback className="bg-sky-300/50">
        <Image
          width={45}
          height={45}
          src="/svgs/Logo.svg"
          alt="vverse"
          className="mt-2"
        />
      </AvatarFallback>
    </Avatar>
  );
}
