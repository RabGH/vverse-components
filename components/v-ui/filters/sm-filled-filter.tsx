"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Category = {
  value: string;
  label: string;
};

type FilterBoxProps = {
  categories: Category[];
  selectCategoryPlaceholder: string;
  searchCategoryPlaceholder: string;
  noCategoryFoundMessage: string;
};

/**
 * Renders a filter box component with small size.
 *
 * @param {Array} categories - The list of categories to display in the filter box.
 * @param {string} selectCategoryPlaceholder - The placeholder text to display when no category is selected.
 * @param {string} searchCategoryPlaceholder - The placeholder text to display in the search input.
 * @param {string} noCategoryFoundMessage - The message to display when no category is found.
 * @return {JSX.Element} The rendered FilterFilledSmall component.
 */

export function FilterFilledSmall({
  categories,
  selectCategoryPlaceholder,
  searchCategoryPlaceholder,
  noCategoryFoundMessage,
}: FilterBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="largeFilled"
          role="combobox"
          aria-expanded={open}
          className="w-[154px] justify-between hover:text-muted"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : selectCategoryPlaceholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[154px] p-0">
        <Command>
          <CommandInput className="" placeholder={searchCategoryPlaceholder} />
          <CommandEmpty>{noCategoryFoundMessage}</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                key={category.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
