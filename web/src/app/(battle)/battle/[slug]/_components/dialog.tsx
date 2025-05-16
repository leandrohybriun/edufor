import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SHOW_DIALOG_TIME } from "@/config/battle-config";
import { CircleX, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  points: number;
  isCorrect?: boolean;
}

export function BattleRoundDialog({ open, setOpen, points, isCorrect }: Props) {
  const [progress, setProgress] = useState(100);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (open) {
      setProgress(100);
      const start = Date.now();
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = Math.max(0, 100 - (elapsed / SHOW_DIALOG_TIME) * 100);
        setProgress(percent);
      }, 50);

      const timer = setTimeout(() => setOpen(false), SHOW_DIALOG_TIME);

      return () => {
        clearTimeout(timer);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    } else {
      setProgress(100);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [open, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {isCorrect ? (
        <CorrectDialogContent points={points} progress={progress} />
      ) : (
        <WrongDialogContent progress={progress} />
      )}
    </Dialog>
  );
}

function CorrectDialogContent({
  points,
  progress,
}: {
  points: number;
  progress: number;
}) {
  return (
    <DialogContent className="border-0 max-w-md space-y-4 text-white bg-gradient-to-b text-center from-[#891810] via-[#B11813] to-[#E22627] overflow-clip">
      <Image
        alt="Dialog Vector"
        src="/battle/dialog-vector.svg"
        className="absolute left-0 top-0 w-full h-full"
        height={200}
        width={200}
      />

      <div className="p-3 bg-background place-self-center rounded-full w-fit z-10">
        <Sparkles className="size-6 text-primary" />
      </div>

      <DialogHeader>
        <DialogTitle className="text-white">Você acertou!</DialogTitle>
        <DialogDescription className="text-white">
          Você ganhou mais {points} pontos para o time!
          <br />
          Continue nessa pegada
        </DialogDescription>
      </DialogHeader>

      <p className="text-emphasis font-bold">+{points} pontos</p>

      <Button variant="white_full_rounded" className="text-primary z-20">
        Finalizar jogo
      </Button>

      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </DialogContent>
  );
}

function WrongDialogContent({ progress }: { progress: number }) {
  return (
    <DialogContent className="border-0 max-w-md space-y-4 text-white bg-gradient-to-b text-center from-[#891810] via-[#B11813] to-[#E22627] overflow-clip">
      <Image
        alt="Dialog Vector"
        src="/battle/dialog-vector.svg"
        className="absolute left-0 top-0 w-full h-full"
        height={200}
        width={200}
      />

      <div className="p-3 bg-background place-self-center rounded-full w-fit z-10">
        <CircleX className="size-6 text-primary" />
      </div>

      <DialogHeader>
        <DialogTitle className="text-white">Você errou!</DialogTitle>
        <DialogDescription className="text-white">
          Você não ganhou pontos para o time!
          <br />
          Não desanime, continue tentando!
        </DialogDescription>
      </DialogHeader>

      <p className="text-emphasis font-bold">0 pontos</p>

      <Button variant="white_full_rounded" className="text-primary z-20">
        Finalizar jogo
      </Button>

      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </DialogContent>
  );
}
