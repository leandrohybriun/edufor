import { InfoCard } from "@/components/custom/info-card";
import { DailyCuriositis } from "./_components/daily-curiosities";
import { MyProgress } from "./_components/my-progress";
import { PopularChallenges } from "./_components/popular-challenges";
import { StartedChallenges } from "./_components/started-challenges";
import { WeeklyRanking } from "./_components/weekly-ranking";

export default function Page() {
  return (
    <main className="relative flex flex-col-reverse gap-8 xl:flex-row xl:items-start p-4">
      <section className="flex-[2] space-y-8">
        <PopularChallenges />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <WeeklyRanking />
          <DailyCuriositis />
        </div>

        <InfoCard
          content="Você ainda não está vinculado a nenhuma instituição."
          linkContent="Clique aqui para adicionar"
          link="/institutions"
        />
      </section>
      <aside className="flex-1 space-y-8">
        <MyProgress />
        <StartedChallenges />
      </aside>
    </main>
  );
}
