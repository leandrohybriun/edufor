"use client";

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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NewSchool } from "./dialog";

const formSchema = z.object({
  phone: z.string().nonempty(errorMessages.notEmpty),
  email: z.string().nonempty(errorMessages.notEmpty).email(errorMessages.email),
  social_media: z.string().nonempty(errorMessages.notEmpty),
});

interface Props {
  setNewSchool: (newSchool: NewSchool) => void;
}

export function NewSchoolForm({ setNewSchool }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      email: "",
      social_media: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setNewSchool(values);
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h3 className="text-muted-foreground">
          Adicione alguns dados da sua instituição
        </h3>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="Digite o telefone" {...field} />
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
              <FormLabel>E-mail institucional</FormLabel>
              <FormControl>
                <Input placeholder="Digite o e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="social_media"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rede social</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: @instituicao ou facebook.com/instituicao"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
