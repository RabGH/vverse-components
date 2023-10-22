import { Separator } from "@/components/ui/separator";

import {
  IconEmailVerified,
  IconPhoneVerified,
  IconUnverifiedAgreement,
  IconUnverifiedID,
  IconZap,
} from "@/components/icons/logo-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UserVerifiedIcons from "../v-guide/user-verification-icons";

const UserTitleBox = () => {
  return (
    <div>
      <h2 className="font-extrabold text-3xl">Dr. Ahmed Hassan</h2>
      <p className="text-muted text-base">
        Large Animals Consultant at Majestic Farm
      </p>
      <div className="flex flex-row gap-1 mt-1">
        <UserVerifiedIcons
          isIdVerified={false}
          isEmailVerified={false}
          isPhoneVerified={false}
          isAgreementVerified={false}
          isLoading={false}
        />
        <Separator orientation="vertical" className="h-7 mx-1" />
        <Badge
          variant="bannerRed"
          size="featured"
          icon={<IconZap className="w-4 h-4" />}
        >
          Featured
        </Badge>
      </div>
    </div>
  );
};

export default UserTitleBox;
