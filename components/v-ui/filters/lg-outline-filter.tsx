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
 * Renders a large filter outline component.
 *
 * @param {FilterBoxProps} categories - The array of categories.
 * @param {string} selectCategoryPlaceholder - The placeholder for the select category button.
 * @param {string} searchCategoryPlaceholder - The placeholder for the search category input.
 * @param {string} noCategoryFoundMessage - The message to display when no category is found.
 * @return {JSX.Element} The rendered component.
 */

export function FilterOutlineLarge({
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
          variant="largeOutline"
          role="combobox"
          aria-expanded={open}
          className="w-[330px] justify-between text-muted"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : selectCategoryPlaceholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[330px] p-0">
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
