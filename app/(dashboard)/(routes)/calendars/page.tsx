import React from "react";

import VCalendar from "@/components/v-ui/calendars/v-calendar";
import VHeroHeader from "@/components/v-ui/v-page-modules/hero-header";
import Heading from "@/components/nav/heading";
import { IconCalendarCheck } from "@/components/icons/logo-icons";

const CalendarsPage = () => {
  return (
    <div className="flex flex-col gap-6 h-min-screen">
      <VHeroHeader
        pillar={"Calendars"}
        description={"V-Calendars, still in development"}
      />
      <Heading title={"Calendars"} description={""} icon={IconCalendarCheck} />
      <VCalendar />
    </div>
  );
};

export default CalendarsPage;
