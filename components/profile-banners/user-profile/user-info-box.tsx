import {
  IconCalendarSideDash,
  IconClock,
  IconGender,
  IconGlobe,
  IconHashTag,
  IconLastSeen,
  IconMapPerson,
} from "@/components/icons/logo-icons";
import React from "react";

const UserInfoBox = () => {
  return (
    <aside className="flex flex-col justify-left items-left">
      <ul className="space-y-1">
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconHashTag className="w-4 h-4 text-primary" />
            MBR-756
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconGender className="w-4 h-4 text-primary" />
            Male
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconGlobe className="w-4 h-4 text-primary" />
            Egypt
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconMapPerson className="w-4 h-4 text-primary" />
            UAE - Dubai
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconClock className="w-4 h-4 text-primary" />
            01:00 PM
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconCalendarSideDash className="w-4 h-4 text-primary" />
            15-Sep-2022 02:45 PM
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconLastSeen className="w-4 h-4 text-primary" />
            11-Nov-2022 09:45 PM
          </p>
        </li>
      </ul>
    </aside>
  );
};

export default UserInfoBox;
