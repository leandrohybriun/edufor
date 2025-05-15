import { Button } from "@/components/ui/button";
import { medalStatus } from "@/config/medal-status";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function UserMedals() {
  const data = [
    {
      id: 1,
      title: "Vooando Alto",
      content: "Acertou 15 perguntas consecutivas sem errar",
      points: 90,
      status: medalStatus.unlocked,
      image: "/medals/1.svg",
    },
    {
      id: 2,
      title: "Dominou Tudo",
      content: "Venceu 5 partidas sem errar nenhuma pergunta",
      points: 120,
      status: medalStatus.unlocked,
      image: "/medals/2.svg",
    },
    {
      id: 3,
      title: "Elite do Conhecimento",
      content: "Ficou pelo menos 1 vez entre o top 50 jogadores da plataforma",
      points: 120,
      status: medalStatus.unlocked,
      image: "/medals/3.svg",
    },
    {
      id: 4,
      title: "Desbravador",
      content: "Venceu 10 partidas",
      points: 200,
      status: medalStatus.locked,
      image: "/medals/1.svg",
    },
  ];

  return (
    <section className="space-y-4">
      <div className="flex items-center flex-wrap gap-4 justify-between">
        <p className="text-subtitle font-bold">🏅 Minhas medalhas</p>

        <Button variant="ghost" className="text-primary" asChild>
          <Link href="/medals">
            Ver mais <ChevronRightIcon />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-background p-6 rounded-3xl w-full shrink-0 text-center flex flex-col h-full gap-4"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="size-24 md:size-36 place-self-center"
            />

            <p className="text-subtitle font-bold">{item.title}</p>
            <p>{item.content}</p>

            <div className="mt-auto w-full space-y-4">
              <div
                className={cn(
                  "h-2 w-full rounded-full",
                  item.status === medalStatus.unlocked
                    ? "bg-primary"
                    : "bg-muted-foreground"
                )}
              />

              <p className="text-label text-muted-foreground uppercase">
                {item.status === medalStatus.unlocked
                  ? "Desbloqueado!"
                  : "Bloqueado!"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
