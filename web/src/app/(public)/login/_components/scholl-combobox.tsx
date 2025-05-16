"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const schools = [
  {
    id: 1,
    label: "Dom Pedro II",
    value: "dom-pedro-ii",
  },
  {
    id: 2,
    label: "Universidade Federal do Rio de Janeiro",
    value: "ufrj",
  },
  {
    id: 3,
    label: "Faculdade de Americana",
    value: "faculdade-de-americana",
  },
  {
    id: 4,
    label: "Universidade de São Paulo",
    value: "usp",
  },
  {
    id: 5,
    label: "Universidade Estadual de Campinas",
    value: "unicamp",
  },
];

interface Props {
  onChange: (value: string) => void;
}

export function SchoolCombobox({ onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-12 justify-between"
        >
          {value ? (
            schools.find((school) => school.value === value)?.label
          ) : (
            <span className="text-muted-foreground">Dom Pedro II</span>
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Buscar escolas..." />
          <CommandList>
            <CommandEmpty>Nenhuma escola encontrada.</CommandEmpty>
            <CommandGroup>
              {schools.map((school) => (
                <CommandItem
                  key={school.id}
                  value={school.value}
                  onSelect={() => {
                    setValue(school.value);
                    onChange(school.value);
                    setOpen(false);
                  }}
                >
                  {school.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === school.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
