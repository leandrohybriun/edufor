import { Button } from "@/components/ui/button";
import { Gamepad2, TrophyIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  battle: {
    id: number;
    name: string;
    slug: string;
    battle_type: number;
    status: number;
    duration: number;
    user_id: number;
  };
  team?: {
    id: number;
    title: string;
    image: string;
  };
  battleResults: {
    id: number;
    battle_id: number;
    user_id: number;
    battle_round_id: number;
    teamPoints: number;
    correctAnswers: number;
    averageTimeToAnswer: number;
    users: {
      id: number;
      name: string;
      points: number;
      averageTimeToAnswer: number;
      isMvp: boolean;
    }[];
  };
  medals?: {
    id: number;
    battle_id: number;
    user_id: number;
    battle_round_id: number;
    points: number;
    image: string;
    title: string;
    content: string;
  }[];
}

const useAuth = () => {
  return {
    user: {
      id: 1,
      name: "Leandro",
      email: "leandro.bertalhia@hybriun.com.br",
    },
  };
};

export function BattleResult({ team, battleResults, medals }: Props) {
  const { user } = useAuth();
  const router = useRouter();

  const userMvp = battleResults?.users.find((u) => u.isMvp);
  const userStats = battleResults?.users.find((u) => u.id === user.id);

  const handleBack = () => router.push(`/home`);

  return (
    <div className="bg-background/80 backdrop-blur-sm p-4 md:p-8 rounded-4xl flex-1 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-16">
        {/* left-side */}
        <section className="flex-[2] space-y-8">
          <div className="text-center md:text-start">
            <h1 className="text-heading lg:text-emphasis text-primary font-bold">
              Partida Concluída!
            </h1>
            <p>Veja o seu desempenho e do seu time</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {team && (
              <div className="relative text-white overflow-clip backdrop-blur-sm p-4 rounded-3xl text-center space-y-4">
                <Image
                  src={team.image}
                  alt={team.title}
                  width={240}
                  height={240}
                  className="absolute inset-0 w-full h-full object-cover -z-10 brightness-35"
                />
                <Image
                  src={team.image}
                  alt={team.title}
                  width={120}
                  height={120}
                  className="size-12 rounded-full object-cover place-self-center border"
                />
                <p>Membros da equipe</p>
                <h3 className="text-title font-bold">
                  {battleResults.users.length}
                </h3>
              </div>
            )}

            <div className="bg-[#90BF03] text-white p-4 rounded-3xl text-center space-y-4">
              <Image
                src="/battle/gamepad.svg"
                alt="Gamepad Icon"
                width={120}
                height={120}
                className="size-12 rounded-full object-cover place-self-center"
              />
              <p>Perguntas acertadas</p>
              <h3 className="text-title font-bold">
                {battleResults.correctAnswers}
              </h3>
            </div>

            <div className="bg-[#00B3E0] text-white p-4 rounded-3xl text-center space-y-4">
              <Image
                src="/battle/time.svg"
                alt="Time Icon"
                width={120}
                height={120}
                className="size-12 rounded-full object-cover place-self-center"
              />
              <p>Tempo de resposta</p>
              <h3 className="text-title font-bold">
                {battleResults.averageTimeToAnswer}s
              </h3>
            </div>

            <div className="bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627] text-white p-4 rounded-3xl text-center space-y-4">
              <Image
                src="/battle/xp.svg"
                alt="XP Icon"
                width={120}
                height={120}
                className="size-12 rounded-full object-cover place-self-center"
              />
              <p>Sua pontuação</p>
              <h3 className="text-title font-bold">{userStats?.points}xp</h3>
            </div>

            <div className="bg-background text-primary p-4 rounded-3xl text-center space-y-4">
              <Image
                src="/battle/trophy.svg"
                alt="Trophy Icon"
                width={120}
                height={120}
                className="size-12 rounded-full object-cover place-self-center"
              />
              <p>Jogador destaque</p>
              <h3 className="text-title font-bold">{userMvp?.name}</h3>
            </div>

            <div className="bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627] text-white p-4 rounded-3xl text-center space-y-4">
              <Image
                src="/battle/xp.svg"
                alt="XP Icon"
                width={120}
                height={120}
                className="size-12 rounded-full object-cover place-self-center"
              />
              <p>Pontuação do time</p>
              <h3 className="text-title font-bold">
                {battleResults.teamPoints}xp
              </h3>
            </div>
          </div>
        </section>

        {/* right side */}
        {medals && medals.length > 0 && (
          <section className="flex-1 space-y-8">
            <div className="text-center md:text-start">
              <h1 className="text-subtitle text-foreground font-semibold">
                Conquistas
              </h1>
              <p>Veja as conquistas que você ganhou</p>
            </div>

            <div className="flex flex-col gap-4 md:gap-8">
              {medals.map((medal) => (
                <div
                  key={medal.id}
                  className="bg-background text-foreground p-4 rounded-3xl text-center space-y-4"
                >
                  <Image
                    src={medal.image}
                    alt={medal.title}
                    width={120}
                    height={120}
                    className="size-24 rounded-full object-cover place-self-center"
                  />
                  <h3 className="text-subtitle font-bold">{medal.title}</h3>
                  <p>{medal.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* bottom */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Button variant="white_full_rounded" className="text-primary" size="xl">
          <TrophyIcon />
          Ver ranking
        </Button>
        <Button
          variant="primary_full_rounded"
          className="px-12"
          size="xl"
          onClick={handleBack}
        >
          Voltar ao início
        </Button>
        <Button variant="white_full_rounded" className="text-primary" size="xl">
          <Gamepad2 />
          Jogar novamente
        </Button>
      </div>
    </div>
  );
}
