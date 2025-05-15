"use client";

import Image from "next/image";
import { useState } from "react";
import { BattleRoundForm } from "./_components/forms/battle-round-form";

export default function BattlePage() {
  const [loading, setLoading] = useState(true);

  const teamData = {
    id: 1,
    title: "Os Espartanos",
    image: "/battle/team.png",
  };

  const userData = {
    id: 1,
    points: 0,
  };

  const roundData = {
    id: 1,
    round: 1,
    title:
      "Qual país é conhecido por ter o formato semelhante a uma bota no mapa?",
    questionOptions: [
      { id: 1, title: "Turquia", image: "/battle/question.png" },
      { id: 2, title: "Espanha", image: "/battle/question.png" },
      { id: 3, title: "Itália", image: "/battle/question.png" },
      { id: 4, title: "Grécia", image: "/battle/question.png" },
    ],
  };

  // simulate loading
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div className="bg-background/80 backdrop-blur-sm p-4 rounded-4xl flex-1">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="p-2 bg-background rounded-full flex items-center gap-2">
          <Image
            src={teamData.image}
            alt={teamData.title}
            width={120}
            height={120}
            className="size-12 rounded-full object-cover"
          />
          <div className="pr-6">
            <p className="text-label text-primary">Os Espartanos</p>
            <p className="font-semibold">Aguarde a sua vez</p>
          </div>
        </div>

        <div className="p-2 bg-background rounded-full flex items-center gap-2">
          <Image
            src="/icons/filled/xp.svg"
            alt="XP"
            width={40}
            height={40}
            className="size-12"
          />
          <div className="pr-6">
            <p className="text-label">Sua pontuação</p>
            <p className="font-bold text-primary">{userData.points} xp</p>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center pt-8">
          <Image
            src="/battle/loading.gif"
            alt="Loading"
            width={100}
            height={100}
            className="size-32"
          />
          <p>Estamos procurando por partidas</p>
        </div>
      )}

      {!loading && (
        <div className="max-w-4xl mx-auto pt-16 md:py-16">
          <BattleRoundForm userId={userData.id} round={roundData} />
        </div>
      )}
    </div>
  );
}
