"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, FullscreenIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function BattleHeader() {
  const router = useRouter();

  const data = {
    questionNumber: 10,
    totalQuestions: 10,
  };

  const progress = (data.questionNumber / data.totalQuestions) * 100;

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    document.documentElement.requestFullscreen();
  };

  const handleBack = () => router.back();

  return (
    <header className="bg-beige p-4">
      <div className="flex items-center gap-4 h-full justify-between">
        <Button variant="white_full_rounded" onClick={handleBack}>
          <ChevronLeftIcon />
          Voltar
        </Button>

        <div className="flex flex-col gap-2 flex-1 max-w-3xl mx-auto">
          <p className="text-label text-muted-foreground">
            Pergunta {data.questionNumber}/{data.totalQuestions}
          </p>
          <div className="bg-muted-foreground/20 w-full h-4 rounded-full overflow-clip">
            <div
              style={{ width: `${progress}%` }}
              className="bg-success h-full rounded-full"
            />
          </div>
        </div>

        <Button
          variant="white_full_rounded"
          className="cursor-pointer hidden md:flex"
          onClick={handleFullscreen}
        >
          <FullscreenIcon />
          Alterar Tela
        </Button>
      </div>
    </header>
  );
}
