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

/**
 * Renders a set of user verification icons based on the provided verification status and loading state.
 *
 * @param {boolean} isIdVerified - Indicates whether the ID is verified.
 * @param {boolean} isEmailVerified - Indicates whether the email is verified.
 * @param {boolean} isPhoneVerified - Indicates whether the phone is verified.
 * @param {boolean} isAgreementVerified - Indicates whether the agreement is verified.
 * @param {boolean} isLoading - Indicates whether the component is in a loading state.
 * @return {JSX.Element} The rendered set of user verification icons.
 */

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
