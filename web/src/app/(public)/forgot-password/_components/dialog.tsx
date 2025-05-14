import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function ForgotPasswordDialog({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[340px]">
        <Image
          src="/forgot-password/success.gif"
          alt="Success"
          width={100}
          height={100}
          className="size-24 mx-auto"
        />
        <DialogHeader>
          <DialogTitle>Enviado!</DialogTitle>
          <DialogDescription>
            Seu código foi enviado com sucesso para o seu e-mail. Verifique-o
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
