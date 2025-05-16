"use client";

import { NewSchool } from "@/app/(public)/register/_components/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { LucideIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

interface SearchInputData {
  id: string;
  label: string;
  value: string;
}

export function SearchInput({
  icon,
  data,
  onInputChange,
  onNewSchoolClick,
  className,
  ...props
}: React.ComponentProps<typeof Input> & {
  onInputChange: (value: string) => void;
  onNewSchoolClick: (newSchool?: NewSchool) => void;
  icon?: LucideIcon;
  data: SearchInputData[];
}) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleClick = (item: SearchInputData) => {
    setSearchTerm(item.label);
    onInputChange(item.id);
    setOpen(false);
  };

  const handleClear = () => {
    setSearchTerm("");
    onInputChange("");
    onNewSchoolClick(undefined);
    setOpen(false);
  };

  const handleNewSchoolClick = () => {
    setSearchTerm("");
    onInputChange("");
    onNewSchoolClick({} as NewSchool);
    setOpen(false);
  };

  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Icon = icon || SearchIcon;

  return (
    <div className="relative">
      <div className="relative">
        <Input
          onClick={() => setOpen(true)}
          onFocusCapture={() => setOpen(true)}
          className={cn("pl-10", className)}
          onChange={handleChange}
          value={searchTerm}
          {...props}
        />
        <Icon className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>

      {open && (
        <div className="absolute top-14 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex items-center justify-between p-2 text-label">
            <p>Resultados</p>
            <button className="text-muted-foreground" onClick={handleClear}>
              Limpar
            </button>
          </div>

          <div className="max-h-60 overflow-y-auto overflow-clip">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="p-2 hover:bg-gray-100 cursor-pointer w-full text-start flex items-center gap-2"
                >
                  <SearchIcon className="size-4" />
                  {item.label}
                </button>
              ))
            ) : (
              <div className="p-2 text-label text-muted-foreground">
                Nenhum resultado encontrado
              </div>
            )}
          </div>

          <div className="p-2 flex items-center gap-2 justify-between text-label">
            <p className="text-muted-foreground">
              Não encontrou a instituição?
            </p>
            <button
              type="button"
              className="text-primary"
              onClick={handleNewSchoolClick}
            >
              Clique aqui
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
