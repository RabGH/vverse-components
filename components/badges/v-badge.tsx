import { Badge } from "@/components/ui/badge";
import { BellRing } from "lucide-react";
import { IconApertureBtn } from "../icons/logo-icons";

export function VBadges() {
  return (
    <div className="flex flex-col justify-center space-y-5 mt-20">
      <div className="flex flex-row justify-center space-x-5">
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
        <Badge className="gap-1 vhBlue">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
        <Badge className="gap-1 vhBlueRed">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
      </div>
      <div className="flex flex-row justify-center space-x-5">
        <Badge className=" w-[200px] h-[40px]">Badge</Badge>
        <Badge className=" w-[200px] h-[40px]" variant={"outline"}>
          Badge
        </Badge>
        <Badge className=" w-[200px] h-[40px]" variant={"secondary"}>
          Badge
        </Badge>
        <Badge className="gap-1 vhGreen w-[200px] h-[40px]">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
        <Badge className="gap-1 vhBlue w-[200px] h-[40px]">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
        <Badge className="gap-1 vhBlueRed w-[200px] h-[40px]">
          <BellRing className="w-4 h-4" />
          Badge
        </Badge>
      </div>
      <div className="flex flex-row justify-center space-x-5">
        <Badge className="vhGrey w-[200px] h-[40px] text-black">Badge</Badge>
        <Badge className="vhGrey w-[200px] h-[40px]">Badge</Badge>
        <Badge className="vhPurple w-[200px] h-[40px] text-black">Badge</Badge>
        <Badge className="vhPurple w-[200px] h-[40px]">Badge</Badge>
      </div>
    </div>
  );
}
