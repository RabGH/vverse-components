"use client"

import { Checkbox } from "@/components/ui/checkbox"

/**
 * Renders a checkbox demo component.
 *
 * @return {JSX.Element} The rendered checkbox demo component.
 */

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
