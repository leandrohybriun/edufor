import { MyProgressRow } from "./_components/my-progress-row";
import { RankingUsersTopTen } from "./_components/ranking-users-top-ten";

export default function RankingPage() {
  return (
    <main className="relative space-y-4 md:space-y-8 p-4 md:p-8">
      <MyProgressRow />

      <div className="grid grid-cols-1 gap-4 xl:gap-8 xl:grid-cols-2">
        {/* left side */}
        <RankingUsersTopTen />
        {/* <RankingSchoolsTopTen /> */}
      </div>
    </main>
  );
}
