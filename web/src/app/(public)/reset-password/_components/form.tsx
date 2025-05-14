"use client";

import { InputPassword } from "@/components/custom/input-password";
import { LoadingButton } from "@/components/custom/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { errorMessages } from "@/config/error-messages";
import { regex } from "@/config/regex";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z
  .object({
    newPassword: z
      .string()
      .regex(regex.strong_password, errorMessages.password)
      .nonempty(errorMessages.notEmpty),
    confirmPassword: z
      .string()
      .regex(regex.strong_password, errorMessages.password)
      .nonempty(errorMessages.notEmpty),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: errorMessages.passwordMismatch,
    path: ["confirmPassword"],
  });

export function ResetPasswordForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { newPassword: "", confirmPassword: "" },
  });

  const { isSubmitting, isDirty } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Senha alterada com sucesso!");
    console.log({ values });
    redirect("/login");
  }

  return (
    <section className="bg-background max-w-2xl mx-auto h-full rounded-4xl py-16 px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full text-center gap-24 max-w-md mx-auto"
        >
          <div className="space-y-4">
            <h1 className="text-[31px] font-bold">Crie uma nova senha</h1>

            <p className="text-paragraph text-muted-foreground">
              Hora de renovar a senha e seguir no jogo!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nova senha</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="************" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <FormControl>
                    <InputPassword placeholder="************" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <LoadingButton
              size="xl"
              variant="login"
              type="submit"
              text="Salvar nova senha"
              loadingText="Salvando..."
              disabled={isSubmitting || !isDirty}
              loading={isSubmitting}
            />
          </div>
        </form>
      </Form>
    </section>
  );
}
