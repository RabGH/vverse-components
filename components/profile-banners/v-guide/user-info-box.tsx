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

export type UserInfoBoxProps = {
  id: string;
  gender: string;
  country: string;
  location: string;
  time: string;
  calendar: string;
  lastSeen: string;
};

const UserInfoBox = ({
  id,
  gender,
  country,
  location,
  time,
  calendar,
  lastSeen,
}: UserInfoBoxProps) => {
  return (
    <aside className="flex flex-col justify-left items-left">
      <ul className="space-y-1">
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconHashTag className="w-4 h-4 text-primary" />
            {id}
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconGender className="w-4 h-4 text-primary" />
            {gender}
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconGlobe className="w-4 h-4 text-primary" />
            {country}
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconMapPerson className="w-4 h-4 text-primary" />
            {location}
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconClock className="w-4 h-4 text-primary" />
            {time}
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconCalendarSideDash className="w-4 h-4 text-primary" />
            {calendar}
          </p>
        </li>
        <li>
          <p className="text-sm text-muted flex flex-row gap-1">
            <IconLastSeen className="w-4 h-4 text-primary" />
            {lastSeen}
          </p>
        </li>
      </ul>
    </aside>
  );
};

export default UserInfoBox;
