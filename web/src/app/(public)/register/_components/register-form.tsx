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
import { Input } from "@/components/ui/input";
import { errorMessages } from "@/config/error-messages";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterSchoolDialog } from "./dialog";

const formSchema = z.object({
  name: z.string().nonempty(errorMessages.notEmpty),
  email: z.string().nonempty(errorMessages.notEmpty).email(errorMessages.email),
  password: z.string().nonempty(errorMessages.notEmpty),
});

export function RegisterForm() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<z.infer<typeof formSchema>>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setValues(values);
    setOpen(true);
  }

  const { isSubmitting, isDirty } = form.formState;

  return (
    <section className="bg-background max-w-2xl mx-auto h-full rounded-4xl py-16 px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full text-center gap-16"
        >
          {values && (
            <RegisterSchoolDialog
              open={open}
              onOpenChange={setOpen}
              values={values}
            />
          )}

          <div className="space-y-4">
            <h1 className="text-[31px] font-bold text-primary">
              Crie sua conta
            </h1>

            <h3 className="text-2xl text-foreground font-semibold">
              Inicie sua jornada na arena do conhecimento
            </h3>

            <p className="text-paragraph text-muted-foreground">
              Cadastre-se rapidinho com e-mail e senha e comece a desafiar
              outros estudantes
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <InputPassword {...field} />
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
              text="Cadastrar"
              loadingText="Cadastrando..."
              disabled={isSubmitting || !isDirty}
              loading={isSubmitting}
            />

            <p className="text-muted-foreground">
              Já possui uma conta?{" "}
              <Link href="/login" className="text-primary font-medium">
                Entrar na conta
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </section>
  );
}
