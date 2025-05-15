import { BattleCard } from "@/components/custom/battle-card";
import { challengeLevels, challengeType } from "@/config/challenge";
import { GamemodeList } from "./_components/gamemode-list";
import { UserMedals } from "./_components/user-medals";

export default function IndividualBattlePage() {
  const data = {
    id: 3,
    level: challengeLevels.all,
    type: challengeType.team,
    title: "Descubra os países",
    link: "/battles/3",
    color: "#3CCDF2CC",
    users: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    max_users: 15,
    points: 300,
  };

  return (
    <main className="flex flex-col w-full gap-8 px-4 md:px-8 pb-4 md:pb-8">
      <h1 className="font-semibold">Como você quer jogar?</h1>

      <div className="max-w-3xl">
        <BattleCard hideButton {...data} />
      </div>

      <GamemodeList />

      <UserMedals />
    </main>
  );
}
