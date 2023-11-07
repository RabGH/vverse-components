import { Badge } from "@/components/ui/badge";
import { BellRing } from "lucide-react";
import {
  IconAchievementsBtn,
  IconApertureBtn,
  IconCalendarCheck,
  IconCrownExclusive,
  IconEmployersBtn,
  IconMapPerson,
  IconProjectsBtn,
} from "@/components/icons/logo-icons";
import BargainBadge from "../v-ui/v-badges/bargain-badge";
import PaymentTypeBadge from "../v-ui/v-badges/payment-type-badge";
import BudgetBadge from "../v-ui/v-badges/budget-badge";
import CountryBadge from "../v-ui/v-badges/country-badge";
import DiscountBadge from "../v-ui/v-badges/discount-badge";

export function VBadges() {
  return (
    <div className="flex flex-col justify-center space-y-5 mt-20">
      <section className="flex flex-row justify-center space-x-5">
        <Badge>Badge</Badge>
        <Badge variant={"outline"}>Badge</Badge>
        <Badge variant={"secondary"}>Badge</Badge>
        <Badge variant={"secondary"}>Badge</Badge>
        <Badge
          variant={"success"}
          className="gap-1"
          icon={<BellRing className="w-4 h-4" />}
        >
          Badge
        </Badge>
        <Badge
          variant={"info"}
          className="gap-1"
          icon={<IconApertureBtn className="w-4 h-4" />}
        >
          Badge
        </Badge>
        <Badge className="gap-1 vgBlue">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
        <Badge className="gap-1 vgBlueRed">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
      </section>
      <section className="flex flex-row justify-center space-x-5">
        <Badge className=" w-[200px] h-[40px]">Badge</Badge>
        <Badge className=" w-[200px] h-[40px]" variant={"outline"}>
          Badge
        </Badge>
        <Badge className=" w-[200px] h-[40px]" variant={"secondary"}>
          Badge
        </Badge>
        <Badge className="gap-1 vgGreen w-[200px] h-[40px]">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
        <Badge className="gap-1 vgBlue w-[200px] h-[40px]">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
        <Badge className="gap-1 vgBlueRed w-[200px] h-[40px]">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
      </section>
      <section className="flex flex-row justify-center space-x-5">
        <Badge className="vgGrey w-[200px] h-[40px] text-black">Badge</Badge>
        <Badge className="vgGrey w-[200px] h-[40px]">Badge</Badge>
        <Badge className="vgPurple w-[200px] h-[40px] text-black">Badge</Badge>
        <Badge className="vgPurple w-[200px] h-[40px]">Badge</Badge>
      </section>
      <section className="flex flex-wrap justify-center gap-4 items-center">
        <Badge
          variant={"info"}
          className="vlPlum"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vRed"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlOrange"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlHotPink"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlSoftBrown"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlSkyBlue"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMustardYellow"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlOlive"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlPeach"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMidnightBlue"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMutedPurple"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMatteBlue"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlAqua"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlTealGreen"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlPink"
          size="default"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
      </section>
      <section className="flex flex-wrap justify-center items-center gap-4">
        <Badge
          variant="info"
          className=""
          size="lg"
          icon={<IconProjectsBtn className="w-8 h-8" />}
        >
          Categories
        </Badge>
        <Badge
          variant="info"
          className=""
          size="lg"
          icon={<IconAchievementsBtn className="w-8 h-8" />}
        >
          Achievements
        </Badge>
        <Badge
          variant="info"
          className=""
          size="lg"
          icon={<IconCalendarCheck className="w-6 h-8 mr-2" />}
        >
          Achievements
        </Badge>
        <Badge
          variant="info"
          className=""
          size="lg"
          icon={<IconEmployersBtn className="w-8 h-8" />}
        >
          Achievements
        </Badge>
        <Badge
          variant="info"
          className=""
          size="lg"
          icon={<IconMapPerson className="w-8 h-8" />}
        >
          Achievements
        </Badge>
      </section>
      <section className="flex flex-wrap justify-center items-center gap-4">
        <BargainBadge bargain="Fixed" />
        <PaymentTypeBadge paymentType="fixed" />
        <BudgetBadge budget={100} />
        <CountryBadge country="Egypt" />
        <DiscountBadge price={100} discountPercentage={25} />
      </section>
    </div>
  );
}
