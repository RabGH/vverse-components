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

type UserVerifiedIconProps = {
  isIdVerified: boolean;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isAgreementVerified: boolean;
  isLoading: boolean;
};

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
        <Loader2 className="w-9 h-9 text-primary animate-spin" />
      ) : isIdVerified ? (
        <IconIDVerified className="w-9 h-9 text-primary" />
      ) : (
        <IconUnverifiedID className="w-9 h-9 text-primary" />
      )}

      {isLoading ? (
        <Loader2 className="w-9 h-9 text-primary animate-spin" />
      ) : isEmailVerified ? (
        <IconEmailVerified className="w-9 h-9 text-primary" />
      ) : (
        <IconUnverifiedEmail className="w-9 h-9 text-primary" />
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : isPhoneVerified ? (
        <IconPhoneVerified className="w-9 h-9 text-primary" />
      ) : (
        <IconUnverifiedPhone className="w-9 h-9 text-primary" />
      )}

      {isLoading ? (
        <Loader2 className="w-7 h-7 text-primary animate-spin" />
      ) : isAgreementVerified ? (
        <IconShieldVerified className="w-9 h-9 text-primary" />
      ) : (
        <IconUnverifiedAgreement className="w-9 h-9 text-primary" />
      )}
    </section>
  );
};

export default UserVerifiedIcons;
