import { Loader2 } from "lucide-react";

import {
  IconEmailVerified,
  IconIDVerified,
  IconPhoneVerified,
  IconShieldVerified,
  IconUnverifiedAgreement,
  IconUnverifiedEmail,
  IconUnverifiedID,
  IconUnverifiedPhone,
} from "@/components/icons/logo-icons";

interface UserVerifiedIconProps {
  isIdVerified: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isAgreementVerified: boolean;
  isLoading: boolean;
}

const UserVerifiedIcons = ({
  isIdVerified,
  isEmailVerified,
  isPhoneVerified,
  isAgreementVerified,
  isLoading,
}: UserVerifiedIconProps) => {
  return (
    <section className="flex flex-row gap-1">
      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : isIdVerified ? (
        <IconIDVerified className="w-7 h-7 text-primary" />
      ) : (
        <IconUnverifiedID className="w-7 h-7 text-primary" />
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : isEmailVerified ? (
        <IconEmailVerified className="w-7 h-7 text-primary" />
      ) : (
        <IconUnverifiedEmail className="w-7 h-7 text-primary" />
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : isPhoneVerified ? (
        <IconPhoneVerified className="w-7 h-7 text-primary" />
      ) : (
        <IconUnverifiedPhone className="w-7 h-7 text-primary" />
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : isAgreementVerified ? (
        <IconShieldVerified className="w-7 h-7 text-primary" />
      ) : (
        <IconUnverifiedAgreement className="w-7 h-7 text-primary" />
      )}
    </section>
  );
};

export default UserVerifiedIcons;
