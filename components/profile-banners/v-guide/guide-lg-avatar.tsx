"use client";

import { useUser } from "@clerk/nextjs";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AvatarProfileFallback,
  IconUserBtn,
} from "@/components/icons/logo-icons";
import UserVerifiedIcons from "./guide-verification";

type UserLargeAvatarProps = {
  profileType: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isAgreementVerified: boolean;
  isIdVerified: boolean;
  isLoading: boolean;
};

/**
 * Renders a large avatar component for a user.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - profileType {string} - The type of profile.
 *   - isEmailVerified {boolean} - Indicates if the email is verified.
 *   - isAgreementVerified {boolean} - Indicates if the agreement is verified.
 *   - isIdVerified {boolean} - Indicates if the ID is verified.
 *   - isPhoneVerified {boolean} - Indicates if the phone is verified.
 *   - isLoading {boolean} - Indicates if the component is in a loading state.
 * @return {JSX.Element} The JSX element representing the large avatar component.
 */

export function UserLargeAvatar({
  profileType,
  isEmailVerified,
  isAgreementVerified,
  isIdVerified,
  isPhoneVerified,
  isLoading,
}: UserLargeAvatarProps) {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 rounded-full shrink-0">
        <Avatar size="lg">
          <AvatarImage src={user?.imageUrl} alt="Vverse" />
          <AvatarFallback className="text-5xl">
            <AvatarProfileFallback />
          </AvatarFallback>
        </Avatar>
      </div>
      <Badge
        variant={"violet"}
        icon={<IconUserBtn className="w-6 h-6 text-primary-foreground" />}
        size="lg"
        className="mt-[-70px] z-10 mr-8 text-sm"
      >
        {profileType} Profile
      </Badge>
      <div className="mt-5 mr-6">
        <UserVerifiedIcons
          isIdVerified={isIdVerified}
          isEmailVerified={isEmailVerified}
          isPhoneVerified={isPhoneVerified}
          isAgreementVerified={isAgreementVerified}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
