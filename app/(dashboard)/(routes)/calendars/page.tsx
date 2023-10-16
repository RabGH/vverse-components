import { CalendarDemo } from "@/components/calendars/default-calendar";
import { DatePickerWithRange } from "@/components/calendars/range-calendar";
import Heading from "@/components/nav/heading";
import { CalendarDays } from "lucide-react";
import React from "react";

const CalendarPage = () => {
  return (
    <div>
      <Heading
        title={"Calendars"}
        description={"Calendars, single line calendars, range calendars"}
        icon={CalendarDays}
      />
      <div className="justify-center flex">
        <div className="flex flex-col w-fit gap-4">
          <div>
            <CalendarDemo />
          </div>
          <div>
            <DatePickerWithRange />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
