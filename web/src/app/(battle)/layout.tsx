import Image from "next/image";
import { BattleHeader } from "./battle/[id]/_components/header";
import { BattleTeam } from "./battle/[id]/_components/team";

interface Props {
  children: React.ReactNode;
}

export default function BattleLayout({ children }: Props) {
  return (
    <main className="relative flex flex-col min-h-dvh">
      <Image
        src="/battle/background.jpg"
        className="-z-10 object-cover"
        alt="Background"
        fill
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
