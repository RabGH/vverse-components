import { Badge } from "@/components/ui/badge";
import { BellRing } from "lucide-react";
import {
  IconApertureBtn,
  IconCrownExclusive,
} from "@/components/icons/logo-icons";

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
      <section className="grid grid-cols-6 gap-y-4">
        <Badge
          variant={"info"}
          className="vlPlum w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vgRed w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlOrange w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlHotPink w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlSoftBrown w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlSkyBlue w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMustardYellow w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlOlive w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlPeach w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMidnightBlue w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMutedPurple w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlMatteBlue w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlAqua w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlTealGreen w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
        <Badge
          variant={"info"}
          className="vlPink w-[117px] h-[40px]"
          icon={<IconCrownExclusive className="w-4 h-4" />}
        >
          VV Exclusive
        </Badge>
      </section>
    </div>
  );
}
