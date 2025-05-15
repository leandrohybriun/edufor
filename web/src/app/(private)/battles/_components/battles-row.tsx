import { Button } from "@/components/ui/button";
import { formatChallengeLevel } from "@/lib/utils";
import { BookOpenIcon, ChevronRightIcon, Gamepad2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BattlesRow() {
  const data = [
    {
      id: 1,
      name: "Caça ao sentido",
      level: 4,
      points: 90,
      subject: "Português",
      image: "/battles/battles-row/1.svg",
      link: "/battles/1",
    },
    {
      id: 2,
      name: "Desafio dos números",
      level: 4,
      points: 120,
      subject: "Matemática",
      image: "/battles/battles-row/2.svg",
      link: "/battles/2",
    },
    {
      id: 3,
      name: "Explorando o espaço",
      level: 4,
      points: 150,
      subject: "Ciências",
      image: "/battles/battles-row/3.svg",
      link: "/battles/3",
    },
    {
      id: 4,
      name: "Esporte é jogo",
      level: 4,
      points: 200,
      subject: "Educação Física",
      image: "/battles/battles-row/4.svg",
      link: "/battles/4",
    },
    {
      id: 5,
      name: "Viagem pela arte",
      level: 4,
      points: 250,
      subject: "Artes",
      image: "/battles/battles-row/5.svg",
      link: "/battles/5",
    },
  ];

  return (
    <section className="space-y-4 pl-4 md:pl-8">
      <div className="flex items-center gap-2 pr-8">
        <div className="hidden md:block">
          <Image
            src="/icons/filled/direct-hit.svg"
            alt="Direct Hit Icon"
            width={40}
            height={40}
            className="size-6"
          />
        </div>

        <h3 className="text-subtitle font-bold truncate">Partidas para você</h3>

        <Button variant="ghost" className="ml-auto text-primary" asChild>
          <Link href="/battles">
            Ver mais <ChevronRightIcon />
          </Link>
        </Button>
      </div>

      <div className="flex flex-row flex-nowrap shrink-0 gap-4 overflow-x-auto">
        {data.map((battle) => (
          <Link
            href={battle.link}
            key={battle.id}
            className="flex items-center gap-4 bg-[#F3F3F3] hover:bg-[#ededed] text-foreground p-6 rounded-3xl w-fit shrink-0"
          >
            <Image
              src={battle.image}
              alt={`${battle.name} Image`}
              width={140}
              height={140}
              className="size-20"
            />

            <div className="space-y-2">
              <div className="flex items-center gap-4 justify-between">
                <p className="text-subtitle font-bold z-10">{battle.name}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/filled/xp.svg"
                    alt="XP Icon"
                    width={40}
                    height={40}
                    className="size-4"
                  />
                  <p className="text-primary font-semibold">
                    +{battle.points} XP
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-info">
                  <BookOpenIcon className="size-4" />
                  <p className="text-label">{battle.subject}</p>
                </div>

                <div className="flex items-center gap-2 text-warning">
                  <Gamepad2Icon className="size-4" />
                  <p className="text-label">
                    {formatChallengeLevel(battle.level)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
