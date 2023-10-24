"use client";

import * as React from "react";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";

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
import { Checkbox } from "@/components/ui/checkbox";

interface Category {
  value: string;
  label: string;
}

interface FilterBoxProps {
  categories: Category[];
  selectCategoryPlaceholder: string;
  searchCategoryPlaceholder: string;
  noCategoryFoundMessage: string;
}

export function FilterOutlineCheckbox({
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
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[330px] justify-between text-muted"
        >
          {value
            ? categories.find((category) => category.value === value)?.label
            : selectCategoryPlaceholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                <Checkbox
                  checked={category.value == value}
                  id={category.value}
                  className="mr-2 border-muted"
                />
                <label htmlFor="value" className="text-muted">
                  {category.label}
                </label>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
