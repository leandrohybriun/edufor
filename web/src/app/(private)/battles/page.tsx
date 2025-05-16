import { BattlesRow } from "./_components/battles-row";
import { ExploreSubjectsRow } from "./_components/explore-subjects-row";
import { SubjectsRow } from "./_components/subjects-row";

export default function BattlesPage() {
  return (
    <main className="space-y-8 flex-1 pb-4 md:pb-8">
      <div className="px-8">
        <h1 className="text-title text-primary font-bold">
          Monte sua partida!
        </h1>
      </div>

      <SubjectsRow />

      <BattlesRow />
      
      <ExploreSubjectsRow />
    </main>
  );
}
