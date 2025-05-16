"use client";

import { LoadingButton } from "@/components/custom/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SHOW_DIALOG_TIME } from "@/config/battle-config";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { BattleRoundDialog } from "../dialog";

interface Props {
  battle: {
    id: number;
    name: string;
    slug: string;
    battle_type: number;
    status: number;
    duration: number;
    user_id: number;
  };
  battleRound?: {
    id: number;
    battle_id: number;
    round: number;
    max_score: number;
    name: string;
    question: {
      id: number;
      user_id: number;
      subject_id: number;
      battle_id: number;
      battle_round_id: number;
      status: number;
      difficulty: number;
      content: string;
      questionOptions: {
        id: number;
        question_id: number;
        content: string;
        image: string;
        is_correct: boolean;
      }[];
    };
  };
}

const formSchema = z.object({
  answerId: z.string(),
});

export function BattleRoundForm({ battleRound }: Props) {
  const router = useRouter();
  const [roundPoints, setRoundPoints] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { answerId: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const selectedOption = battleRound?.question.questionOptions.find(
      (option) => option.id === Number(values.answerId)
    );

    if (selectedOption?.is_correct) {
      setIsCorrect(true);
      setRoundPoints(Math.floor(Math.random() * 100));
    }

    handleModal();
  }

  const handleLoadingNextRound = () => {
    setOpen(false);
    setIsCorrect(false);
    setRoundPoints(0);
    router.refresh();
  };

  const handleModal = () => {
    setOpen(true);
    setTimeout(handleLoadingNextRound, SHOW_DIALOG_TIME);
  };

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
        <BattleRoundDialog
          open={open}
          setOpen={setOpen}
          points={roundPoints}
          isCorrect={isCorrect}
        />

        <h1 className="text-title md:text-heading font-bold">
          {battleRound?.question.content}
        </h1>

        <FormField
          control={form.control}
          name="answerId"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {battleRound?.question?.questionOptions.map((option) => (
                <FormControl key={option.id}>
                  <button
                    type="button"
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isSubmitting}
                    className={cn(
                      "bg-background p-4 rounded-3xl space-y-2 border-2 border-transparent",
                      field.value === option.id.toString() &&
                        "border-2 bg-[#ffcecc] border-primary"
                    )}
                  >
                    <Image
                      src={option.image}
                      alt={option.content}
                      width={120}
                      height={120}
                      className="w-full object-contain"
                    />
                    <p className="font-medium">{option.content}</p>
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
