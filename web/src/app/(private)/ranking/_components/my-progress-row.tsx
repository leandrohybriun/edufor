import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hideButton?: boolean;
}

export function MyProgressRow({ hideButton }: Props) {
  const performanceData = [
    {
      id: 1,
      title: "Desempenho geral",
      image: "/ranking/1.svg",
      color: "#57D393",
      progress: 80,
    },
    {
      id: 2,
      title: "Matemática",
      image: "/ranking/2.svg",
      color: "#FBAC68",
      progress: 60,
    },
    {
      id: 3,
      title: "Português",
      image: "/ranking/3.svg",
      color: "#D91A51",
      progress: 90,
    },
    {
      id: 4,
      title: "História",
      image: "/ranking/4.svg",
      color: "#277DE5",
      progress: 70,
    },
  ];

  const userData = {
    mvpBattles: 10,
    points: 24_000,
  };

  return (
    <div className="space-y-4 md:space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-subtitle font-semibold">Meu desempenho</h1>

        {!hideButton && (
          <Button variant="ghost" className="text-primary" asChild>
            <Link href="/ranking/expanded">
              Ver mais detalhes <ChevronRightIcon />
            </Link>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:gap-8 xl:grid-cols-2">
        {/* left side */}
        <div className="bg-background rounded-3xl p-4 flex-1 space-y-4">
          {performanceData.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="size-6"
                />

                <div className="flex items-center gap-2 justify-between flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-label font-medium">{item.progress}%</p>
                </div>
              </div>

              <div className="w-full bg-muted-foreground/20 rounded-sm overflow-clip h-4">
                <div
                  className="h-full rounded-r-sm"
                  style={{
                    width: `${item.progress}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* right side */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627] text-white p-4 rounded-3xl flex gap-4 flex-col xl:items-center xl:text-center xl:justify-center">
            <Image
              src="/icons/filled/xp.svg"
              alt="XP Icon"
              width={120}
              height={120}
              className="size-16 md:size-24"
            />
            <p>Minha pontuação</p>
            <h3 className="text-heading font-black">
              {userData.points.toLocaleString()} xp
            </h3>
          </div>

          <div className="relative bg-[#EFEFEF] text-foreground p-4 rounded-3xl flex gap-4 flex-col xl:items-center xl:text-center xl:justify-center overflow-clip">
            <Image
              src="/icons/filled/controller.svg"
              alt="Controller Icon"
              width={120}
              height={120}
              className="absolute bottom-0 right-0 size-24"
            />

            <Image
              src="/icons/filled/gamepad.svg"
              alt="Gamepad Icon"
              width={120}
              height={120}
              className="size-16 md:size-24"
            />
            <p>Melhor jogador de batalha</p>
            <h3 className="text-heading font-black z-10">
              {userData.mvpBattles} MVPs
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
