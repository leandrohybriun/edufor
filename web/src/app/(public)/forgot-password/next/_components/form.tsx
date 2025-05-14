"use client";

import { LoadingButton } from "@/components/custom/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { errorMessages } from "@/config/error-messages";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { InputOTPWithSeparator } from "./input-otp";

const formSchema = z.object({
  code: z
    .string()
    .nonempty(errorMessages.notEmpty)
    .regex(/^\d{6}$/, errorMessages.otp_code),
});

interface Props {
  code?: string;
}

export function ForgotPasswordNextForm({ code }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { code: code || "" },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log({ values });
    redirect("/reset-password");
  }

  async function onResend() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Código reenviado com sucesso!");
    console.log("Resend code");
  }

  return (
    <section className="bg-background max-w-2xl mx-auto h-full rounded-4xl py-16 px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full text-center gap-24 max-w-md mx-auto"
        >
          <div className="space-y-4">
            <h1 className="text-[31px] font-bold">Recuperar senha</h1>

            <p className="text-paragraph text-muted-foreground">
              Será enviado um código para o e-mail cadastrado
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTPWithSeparator
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-muted-foreground">
              Não recebeu?{" "}
              <button
                type="button"
                className="text-foreground font-medium"
                onClick={onResend}
              >
                Reenviar
              </button>
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <LoadingButton
              size="xl"
              variant="login"
              type="submit"
              text="Confirmar"
              loadingText="Confirmando..."
              disabled={isSubmitting || !isValid}
              loading={isSubmitting}
            />
          </div>
        </form>
      </Form>
    </section>
  );
}
