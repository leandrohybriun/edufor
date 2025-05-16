import Image from "next/image";
import { BattleHeader } from "./battle/[slug]/_components/header";
import { BattleTeam } from "./battle/[slug]/_components/team";

interface Props {
  children: React.ReactNode;
}

export default function BattleLayout({ children }: Props) {
  return (
    <main className="flex flex-col min-h-dvh">
      <Image
        src="/battle/background.jpg"
        className="fixed inset-0 object-cover w-full h-full -z-10"
        width={1920}
        height={1080}
        alt="Background"
      />

      <BattleHeader />

      <div className="p-4 space-y-4 flex flex-col flex-1">
        <div className="hidden md:block">
          <BattleTeam />
        </div>

        {children}
      </div>
    </main>
  );
}
