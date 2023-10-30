"use client";

import React, { useRef, useState } from "react";

import Flatpickr from "react-flatpickr";
import FlatpickrInstance from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "../../../app/globals.css";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

type VCalendarProps = {
  date: Date;
  setDate: (date: Date) => void;
};

const VCalendar = () => {
  const [date, setDate] = useState<Date[]>([new Date(), new Date()]);
  const flatpickrRef = useRef<FlatpickrInstance | null>(null);

  const handleDateChange = (selectedDates: Date[]) => {
    setDate(selectedDates);
  };

  const handleApply = () => {
    const startDate = date[0];
    const endDate = date[1];

    if (startDate && endDate) {
      // You can perform actions with the selected date range here
      console.log("Selected Date Range: ", startDate, endDate);

      // Format the date and time in 12-hour format
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // Display in 12-hour format
      };

      const formattedStartDate = startDate.toLocaleString("en-US", {
        ...dateOptions,
        ...timeOptions,
      });

      const formattedEndDate = endDate.toLocaleString("en-US", {
        ...dateOptions,
        ...timeOptions,
      });

      toast({
        title: "Success",
        description: `Selected date range: ${startDate.toDateString()} - ${endDate.toDateString()} - ${formattedStartDate} - ${formattedEndDate}`,
        variant: "vVerseToast",
      });
      setDate([new Date(), new Date()]);
    } else {
      toast({
        title: "Error",
        description: "Please select a valid date range.",
        variant: "destructive",
      });
    }
  };

  const minDate = new Date("1800-01-01");
  const maxDate = new Date("2100-12-31");

  return (
    <div className="flex items-center justify-center">
      <Flatpickr
        data-enable-time
        value={date}
        onChange={handleDateChange}
        options={{
          mode: "range",
          enableTime: true,
          time_24hr: false,
          minDate,
          maxDate,
        }}
        ref={flatpickrRef}
        className="text-primary mx-2 border border-primary rounded-lg p-2"
        placeholder="Select a date range"
        aria-label="Select a date range for your event"
        aria-describedby="date-range-help"
      />
      <Button onClick={handleApply}>Apply</Button>
    </div>
  );
};

export default VCalendar;
