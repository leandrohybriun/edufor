import { UserMedals } from "../../battles/[id]/_components/user-medals";
import { MyProgressRow } from "../_components/my-progress-row";
import { MyProgressCards } from "./_components/my-progress-cards";
import { PerformanceChart } from "./_components/performance-chart";

export default function RankingExpandedPage() {
  return (
    <main className="relative space-y-4 md:space-y-8 p-4 md:p-8">
      <MyProgressRow hideButton />

      <div className="grid grid-cols-1 gap-4 xl:gap-8 xl:grid-cols-2">
        <MyProgressCards />
        <PerformanceChart />
      </div>

      <UserMedals />
    </main>
  );
}
