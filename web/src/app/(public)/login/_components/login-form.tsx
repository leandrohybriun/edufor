"use client";

import { InputPassword } from "@/components/input-password";
import { LoadingButton } from "@/components/loading-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { errorMessages } from "@/config/error-messages";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().nonempty(errorMessages.notEmpty).email(errorMessages.email),
  password: z.string().nonempty(errorMessages.notEmpty),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Login realizado com sucesso!");
    console.log(values);
  }

  const { isSubmitting, isDirty } = form.formState;

  return (
    <section className="bg-background max-w-2xl mx-auto h-full rounded-4xl py-16 px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col h-full text-center gap-16 max-w-md mx-auto"
        >
          <div className="space-y-4">
            <h1 className="text-[31px] font-bold text-primary">
              Bem-vindo à EduFor!
            </h1>

            <h3 className="text-2xl text-foreground font-semibold">
              Entre na arena do conhecimento
            </h3>

            <p className="text-paragraph text-muted-foreground max-w-sm mx-auto">
              Supere desafios, ganhe batalhas e aprenda jogando.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da instituição</FormLabel>
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
                  <FormDescription className="text-end">
                    <Link href="/forgot-password">Recuperar senha</Link>
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-4">
            <LoadingButton
              size="xl"
              variant="login"
              type="submit"
              text="Entrar"
              loadingText="Entrando..."
              disabled={isSubmitting || !isDirty}
              loading={isSubmitting}
            />

            <Link href="/register" className="text-primary">
              Cadastrar-se
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
}
