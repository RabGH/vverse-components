"use client";

import React, { useRef, useState } from "react";

import Flatpickr from "react-flatpickr";
import FlatpickrInstance from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "../../../app/globals.css";

import { Button } from "@/components/ui/button";

const VCalendar = () => {
  const [date, setDate] = useState(new Date());
  const flatpickrRef = useRef<FlatpickrInstance | null>(null);

  // const openCalendar = () => {
  //   if (flatpickrRef.current) {
  //     flatpickrRef.current.flatpickr.open();
  //   }
  // };

  const handleDateChange = ([selectedDate]: Date[]) => {
    setDate(selectedDate);
    console.log(selectedDate);
  };

  return (
    <div className="flex items-center justify-center">
      <Flatpickr
        data-enable-time
        value={date}
        onChange={handleDateChange}
        options={{ mode: "range" }}
        ref={flatpickrRef}
        className="text-primary mx-2 border border-primary rounded-lg p-2"
        placeholder="Select a date range"
      />
    </div>
  );
};

export default VCalendar;
