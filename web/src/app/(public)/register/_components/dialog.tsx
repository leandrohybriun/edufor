"use client";

import { LoadingButton } from "@/components/custom/loading-button";
import { SearchInput } from "@/components/custom/search-input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { NewSchoolForm } from "./new-school-form";

const schools = [
  { id: "1", label: "Dom Pedro II", value: "dom-pedro-ii" },
  { id: "2", label: "Universidade Federal do Rio de Janeiro", value: "ufrj" },
  { id: "3", label: "Faculdade de Americana", value: "faculdade-de-americana" },
  { id: "4", label: "Universidade de São Paulo", value: "usp" },
  { id: "5", label: "Universidade Estadual de Campinas", value: "unicamp" },
  { id: "6", label: "Universidade Federal de Minas Gerais", value: "ufmg" },
  {
    id: "7",
    label: "Universidade Federal do Rio Grande do Sul",
    value: "ufrgs",
  },
  { id: "8", label: "Universidade Federal da Bahia", value: "ufba" },
  { id: "9", label: "Universidade Federal de Santa Catarina", value: "ufsc" },
  { id: "10", label: "Universidade Federal do Paraná", value: "ufpr" },
];

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  values: {
    name: string;
    email: string;
    password: string;
  };
}

interface SubmitValues {
  name: string;
  email: string;
  password: string;
  school_id?: string;
  new_school?: NewSchool;
}

export interface NewSchool {
  phone: string;
  email: string;
  social_media: string;
}

export function RegisterSchoolDialog({ open, onOpenChange, values }: Props) {
  const [isPending, startTransition] = useTransition();

  const [newSchool, setNewSchool] = useState<NewSchool | undefined>(undefined);
  const [newValues, setNewValues] = useState<SubmitValues>({
    ...values,
    school_id: undefined,
    new_school: undefined,
  });

  async function onSubmit(type: "skip" | "save") {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (type === "skip") {
        console.log(newValues);
        onOpenChange(false);
        return;
      }

      console.log(newValues);
      onOpenChange(false);
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideCloseButton className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-foreground font-black">
            Deseja vincular sua conta a uma instituição agora?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Procure pela sua escola, se não encontrar adicione em uma rede
            social e o resto deixa com a gente!
          </DialogDescription>
        </DialogHeader>

        <SearchInput
          data={schools}
          placeholder="Nome da instituição"
          onNewSchoolClick={setNewSchool}
          onInputChange={(value) =>
            setNewValues({ ...newValues, school_id: value })
          }
        />

        {newSchool && !newValues.school_id && (
          <NewSchoolForm setNewSchool={setNewSchool} />
        )}

        {/* Ações */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <LoadingButton
            type="button"
            size="lg"
            onClick={() => onSubmit("skip")}
            variant="ghost"
            className="rounded-full text-muted-foreground md:flex-1"
            text="Pular por enquanto"
            disabled={isPending}
            loading={isPending}
          />

          <LoadingButton
            type="button"
            size="lg"
            onClick={() => onSubmit("save")}
            variant="primary_full_rounded"
            className="md:flex-1"
            disabled={isPending}
            loading={isPending}
            text="Salvar"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
