import { cn } from "@/lib/utils";
import Image from "next/image";

export function RankingUsersTopTen() {
  const data = [
    {
      id: 1,
      name: "Anna Hautz",
      points: 55_283,
      position: 1,
      mvpBattles: 23,
      image: "/home/weekly-ranking/top1.jpg",
      institution: {
        id: 1,
        name: "IFSP - Campinas",
      },
    },
    {
      id: 2,
      name: "David Brito",
      points: 12_265,
      position: 2,
      mvpBattles: 12,
      image: "/home/weekly-ranking/top2.jpg",
      institution: {
        id: 2,
        name: "Dom Pedro II",
      },
    },
    {
      id: 3,
      name: "Anna Hautz",
      points: 9_938,
      position: 3,
      mvpBattles: 8,
      image: "/home/weekly-ranking/top3.jpg",
      institution: {
        id: 3,
        name: "Santa Clara",
      },
    },
    {
      id: 4,
      name: "Anna Hautz",
      points: 8_362,
      position: 4,
      mvpBattles: 8,
      image: "/home/weekly-ranking/top1.jpg",
      institution: {
        id: 4,
        name: "IFSP - Campinas",
      },
    },
    {
      id: 5,
      name: "David Brito",
      points: 6_265,
      position: 5,
      mvpBattles: 12,
      image: "/home/weekly-ranking/top2.jpg",
      institution: {
        id: 5,
        name: "Dom Pedro II",
      },
    },
    {
      id: 6,
      name: "Anna Hautz",
      points: 5_938,
      position: 6,
      mvpBattles: 8,
      image: "/home/weekly-ranking/top3.jpg",
      institution: {
        id: 6,
        name: "Santa Clara",
      },
    },
    {
      id: 7,
      name: "David Brito",
      points: 3_938,
      position: 7,
      mvpBattles: 8,
      image: "/home/weekly-ranking/top1.jpg",
      institution: {
        id: 7,
        name: "IFSP - Campinas",
      },
    },
    {
      id: 8,
      name: "Anna Hautz",
      points: 3_265,
      position: 8,
      mvpBattles: 12,
      image: "/home/weekly-ranking/top2.jpg",
      institution: {
        id: 8,
        name: "Dom Pedro II",
      },
    },
    {
      id: 9,
      name: "David Brito",
      points: 3_042,
      position: 9,
      mvpBattles: 8,
      image: "/home/weekly-ranking/top3.jpg",
      institution: {
        id: 9,
        name: "Santa Clara",
      },
    },
    {
      id: 10,
      name: "Anna Hautz",
      points: 2_862,
      position: 10,
      mvpBattles: 4,
      image: "/home/weekly-ranking/top1.jpg",
      institution: {
        id: 10,
        name: "IFSP - Campinas",
      },
    },
  ];

  const renderBadge = (position: number) => {
    if (position > 3) return null;

    const badge = {
      1: "/badges/rank-gold-light.svg",
      2: "/badges/rank-silver-light.svg",
      3: "/badges/rank-bronze-light.svg",
    }[position];

    return (
      <Image
        src={badge!}
        alt="Badge"
        width={48}
        height={48}
        className="size-12 min-w-12 absolute -top-6 -left-6"
      />
    );
  };

  return (
    <section className="space-y-4 md:space-y-8">
      <h2 className="text-subtitle font-semibold">Ranking da semana!</h2>
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        {data.map((user) => (
          <div
            key={user.id}
            className={cn(
              "relative p-4 rounded-3xl bg-background flex flex-wrap items-center justify-between gap-4",
              user.position === 1 &&
                "bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627] text-white"
            )}
          >
            <Image
              src="/ranking/user-ranking-vector.svg"
              alt="User Ranking Vector"
              width={180}
              height={180}
              className="absolute right-0 bottom-0 h-full"
            />

            <div className="relative shrink-0">
              <Image
                src={user.image}
                alt={user.name}
                width={240}
                height={240}
                className="size-24 rounded-lg object-cover"
              />
              {renderBadge(user.position)}
            </div>

            <div>
              <p className="text-subtitle font-bold truncate">{user.name}</p>
              <p className="truncate">{user.institution.name}</p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/icons/filled/gamepad.svg"
                alt="Gamepad Icon"
                width={40}
                height={40}
                className="size-12 xl:hidden"
              />
              <p>{user.mvpBattles} MVPs</p>
            </div>

            <p className="text-subtitle font-semibold">
              {user.points.toLocaleString("pt-BR")} XP
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
