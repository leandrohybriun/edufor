"use client";

import { LoadingButton } from "@/components/loading-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { errorMessages } from "@/config/error-messages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ForgotPasswordDialog from "./dialog";

const formSchema = z.object({
  email: z.string().nonempty(errorMessages.notEmpty).email(errorMessages.email),
});

export function ForgotPasswordForm() {
  const [openModal, setOpenModal] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const { isSubmitting, isDirty } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log({ values });
    setOpenModal(true);
  }

  return (
    <section className="bg-background max-w-2xl mx-auto h-full rounded-4xl py-16 px-8">
      <ForgotPasswordDialog open={openModal} setOpen={setOpenModal} />

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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="annaoliveira291@outlook.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <LoadingButton
              size="xl"
              variant="login"
              type="submit"
              text="Enviar"
              loadingText="Enviando..."
              disabled={isSubmitting || !isDirty}
              loading={isSubmitting}
            />
          </div>
        </form>
      </Form>
    </section>
  );
}
