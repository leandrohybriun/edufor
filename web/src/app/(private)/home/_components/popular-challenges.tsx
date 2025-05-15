import { Button } from "@/components/ui/button";
import { challengeLevels, challengeType } from "@/config/challenge";
import { formatChallengeLevel } from "@/lib/utils";
import { Gamepad2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    level: challengeLevels.easy,
    type: challengeType.team,
    title: "História Geral",
    link: "/battles/1",
    color: "#937C7C",
    users: [{ id: 1 }, { id: 2 }, { id: 3 }],
    max_users: 10,
    points: 100,
  },
  {
    id: 2,
    level: challengeLevels.medium,
    type: challengeType.team,
    title: "Descubra os países",
    link: "/battles/2",
    color: "#3CCDF2CC",
    users: [],
    max_users: 10,
    points: 200,
  },
  {
    id: 3,
    level: challengeLevels.all,
    type: challengeType.team,
    title: "Desafio dos números",
    link: "/battles/3",
    color: "#9F2BC8CC",
    users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    max_users: 15,
    points: 300,
  },
];

export function PopularChallenges() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#F4A32C] w-fit px-3 py-2 rounded-full text-white font-bold space-x-2">
        <span>🔥</span>
        <span>Desafios Populares</span>
      </div>

      <div>
        {data.map((challenge) => (
          <div
            key={challenge.id}
            className="flex items-center justify-between text-white p-4 rounded-lg shadow-md mb-4 select-none"
            style={{ backgroundColor: challenge.color }}
          >
            <div className="space-y-2">
              <p className="text-subtitle font-semibold">{challenge.title}</p>
              <div className="flex items-center gap-2">
                <Gamepad2 className="size-4" />
                <p className="text-label-details">
                  {formatChallengeLevel(challenge.level)}
                </p>
              </div>

              {challenge.type === challengeType.team && (
                <p className="text-label">
                  {challenge.users.length} / {challenge.max_users}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/filled/xp.svg"
                  alt="XP"
                  width={20}
                  height={20}
                  className="size-6"
                />
                <p className="text-label">+{challenge.points} XP</p>
              </div>
              <Button variant="primary_full_rounded" asChild>
                <Link href={challenge.link}>Jogar agora</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
