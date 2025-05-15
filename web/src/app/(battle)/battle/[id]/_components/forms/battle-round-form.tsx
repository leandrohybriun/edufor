"use client";

import { LoadingButton } from "@/components/custom/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  userId: number;
  round: {
    id: number;
    round: number;
    title: string;
    questionOptions: {
      id: number;
      title: string;
      image: string;
    }[];
  };
}

const formSchema = z.object({
  answerId: z.string(),
});

export function BattleRoundForm({ round }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answerId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log({ values });
  }

  const handleSelectOption = (questionId: number) => {
    if (form.getValues("answerId") === questionId.toString()) {
      form.setValue("answerId", "", { shouldDirty: true });
      return;
    }

    form.setValue("answerId", questionId.toString(), {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-center"
      >
        <h1 className="text-title md:text-heading font-bold">{round.title}</h1>

        <FormField
          control={form.control}
          name="answerId"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {round.questionOptions.map((option) => (
                <FormControl key={option.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectOption(option.id)}
                    className={cn(
                      "bg-background p-4 rounded-3xl space-y-2 border-2 border-transparent",
                      field.value === option.id.toString() &&
                        "border-2 bg-[#ffcecc] border-primary"
                    )}
                  >
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={120}
                      height={120}
                      className="w-full object-contain"
                    />
                    <p className="font-medium">{option.title}</p>
                  </button>
                </FormControl>
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
          <LoadingButton
            type="submit"
            className="md:w-64"
            variant="white_full_rounded"
            loading={isSubmitting}
            disabled={isSubmitting || form.formState.isDirty}
            text="Pular"
            size="xl"
          />
          <LoadingButton
            type="submit"
            className="md:w-64"
            variant="primary_full_rounded"
            loading={isSubmitting}
            disabled={isSubmitting || !isDirty || !isValid}
            text="Confirmar"
            size="xl"
          />
        </div>
      </form>
    </Form>
  );
}
