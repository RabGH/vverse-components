import { CalendarDemo } from "@/components/calendars/default-calendar";
import { DatePickerWithRange } from "@/components/calendars/range-calendar";
import React from "react";

const CalendarPage = () => {
  return (
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
  );
};

export default CalendarPage;
