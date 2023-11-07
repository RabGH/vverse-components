"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

/**
 * Renders a calendar demo component. Not in use.
 *
 * @return {JSX.Element} The rendered calendar demo component.
 */

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}
