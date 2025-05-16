"use client";

import {
  battleRoundDifficulty,
  battleRoundStatus,
  battleStatus,
  battleType,
} from "@/config/battle-config";
import Image from "next/image";
import { useState } from "react";
import { BattleResult } from "./_components/battle-result";
import { BattleRoundForm } from "./_components/forms/battle-round-form";

export default function BattlePage() {
  const [loading, setLoading] = useState(true);

  const teamData = {
    id: 1,
    title: "Os Espartanos",
    image: "/battle/team.png",
  };

  const battle = {
    id: 1,
    name: "Batalha do Conhecimento",
    slug: "batalha-do-conhecimento",
    battle_type: battleType.team,
    status: battleStatus.inProgress,
    duration: 15,
    user_id: 1,
  };

  const battleRound = {
    id: 1,
    battle_id: 1,
    round: 1,
    max_score: 100,
    name: "Primeira Rodada",
    question: {
      id: 1,
      user_id: 1,
      subject_id: 1,
      battle_id: 1,
      battle_round_id: 1,
      status: battleRoundStatus.default,
      difficulty: battleRoundDifficulty.easy,
      content:
        "Qual país é conhecido por ter o formato semelhante a uma bota no mapa?",
      questionOptions: [
        {
          id: 1,
          question_id: 1,
          content: "Turquia",
          image: "/battle/question.png",
          is_correct: false,
        },
        {
          id: 2,
          question_id: 1,
          content: "Espanha",
          image: "/battle/question.png",
          is_correct: false,
        },
        {
          id: 3,
          question_id: 1,
          content: "Itália",
          image: "/battle/question.png",
          is_correct: true,
        },
        {
          id: 4,
          question_id: 1,
          content: "Grécia",
          image: "/battle/question.png",
          is_correct: false,
        },
      ],
    },
  };

  const battleResults = {
    id: 1,
    battle_id: 1,
    user_id: 1,
    battle_round_id: 1,
    teamPoints: 1604,
    correctAnswers: 10,
    averageTimeToAnswer: 5,
    users: [
      {
        id: 2,
        name: "Anna",
        points: 703,
        averageTimeToAnswer: 5,
        isMvp: true,
      },
      {
        id: 3,
        name: "Lucas",
        points: 301,
        averageTimeToAnswer: 5,
        isMvp: false,
      },
      {
        id: 1,
        name: "Leandro",
        points: 600,
        averageTimeToAnswer: 5,
        isMvp: false,
      },
    ],
  };

  const medals = [
    {
      id: 1,
      battle_id: 1,
      user_id: 1,
      battle_round_id: 1,
      points: 100,
      image: "/battle/medal1.svg",
      title: "Relâmpago",
      content: "Respondeu as perguntas em menos de 10 segundos",
    },
    {
      id: 2,
      battle_id: 1,
      user_id: 1,
      battle_round_id: 1,
      points: 100,
      image: "/battle/medal1.svg",
      title: "Relâmpago",
      content: "Respondeu as perguntas em menos de 10 segundos",
    },
  ];

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (battle.status === battleStatus.finished) {
    return (
      <BattleResult
        battle={battle}
        team={teamData}
        battleResults={battleResults}
        medals={medals}
      />
    );
  }

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
            <p className="text-label text-primary">{teamData.title}</p>
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
            <p className="font-bold text-primary">123 xp</p>
          </div>
        </div>
      </div>

      {loading ? (
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
      ) : (
        <div className="max-w-4xl mx-auto pt-16 md:py-16">
          <BattleRoundForm battle={battle} battleRound={battleRound} />
        </div>
      )}
    </div>
  );
}
