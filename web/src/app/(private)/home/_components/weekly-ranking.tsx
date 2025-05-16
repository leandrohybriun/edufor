import { cn } from "@/lib/utils";
import Image from "next/image";

export function WeeklyRanking() {
  const data = [
    {
      id: 1,
      name: "Ana",
      points: 2560,
      position: 1,
      image: "/home/weekly-ranking/top1.jpg",
    },
    {
      id: 2,
      name: "João",
      points: 1265,
      position: 2,
      image: "/home/weekly-ranking/top2.jpg",
    },
    {
      id: 3,
      name: "Ana",
      points: 938,
      position: 3,
      image: "/home/weekly-ranking/top3.jpg",
    },
  ];

  const podiumOrder = [2, 1, 3];

  const orderedData = podiumOrder.map(
    (pos) => data.find((user) => user.position === pos)!
  );

  return (
    <div className="bg-[#FFDBDB] p-6 rounded-3xl flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-primary w-fit p-2 rounded-md">
          <Image
            src="/icons/filled/trophy.svg"
            alt="Trophy"
            width={48}
            height={48}
            className="size-6"
          />
        </div>

        <p className="font-bold">Ranking semanal</p>
      </div>

      <div className="space-y-4">
        <div className="relative flex justify-evenly gap-4">
          {orderedData.map((user) => {
            const badge = {
              1: "/badges/rank-gold-light.svg",
              2: "/badges/rank-silver-light.svg",
              3: "/badges/rank-bronze-light.svg",
            }[user.position];

            return (
              <div
                key={user.id}
                className={cn(
                  "flex flex-col gap-4",
                  user.position === 2 && "translate-y-8",
                  user.position === 3 && "translate-y-14"
                )}
              >
                <div className="relative">
                  <div className="relative ring-1 rounded-full overflow-clip">
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={96}
                      height={96}
                      className="object-cover object-top bg-muted size-16 sm:size-24 md:size-32 lg:size-16"
                    />
                  </div>

                  {badge && (
                    <Image
                      src={badge}
                      alt={`Top ${user.position} badge`}
                      width={96}
                      height={96}
                      className="size-8 sm:size-12 md:size-16 lg:size-8 absolute top-0 -right-4 sm:-right-8 lg:-right-4"
                    />
                  )}
                </div>

                <div className="bg-[#E51F2566] text-black text-label text-center p-2 rounded-xl">
                  {user.points}XP
                </div>
              </div>
            );
          })}
        </div>

        <Image
          src="/home/weekly-ranking/podium.svg"
          alt="Weekly ranking"
          width={500}
          height={500}
          className="w-full h-auto rounded-md"
          priority
        />
      </div>
    </div>
  );
}
