import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function MyProgress() {
  const userProgress = {
    level: 3,
    xp: 1250,
    nextLevelXp: 2000,
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-label font-bold text-muted-foreground px-3 py-2.5">
        Meu progresso
      </div>

      <div className="relative bg-primary text-white p-4 rounded-3xl overflow-clip">
        <Image
          src="/home/my-progress/top-vector.svg"
          alt="Top vector"
          width={100}
          height={100}
          className="absolute -top-4 right-0 w-full z-10 pointer-events-none"
        />

        <Image
          src="/home/my-progress/bottom-left-vector.svg"
          alt="Bottom Left Vector"
          width={100}
          height={100}
          className="absolute left-0 bottom-0 z-10 pointer-events-none"
        />

        <Image
          src="/home/my-progress/trophies.svg"
          alt="Right Side Vector"
          width={100}
          height={100}
          className="absolute top-0 right-0 size-24 sm:size-32 z-20 pointer-events-none"
        />

        <Image
          src="/home/my-progress/trophies.svg"
          alt="Bottom Middle Vector"
          width={50}
          height={50}
          className="absolute left-1/4 -bottom-4 sm:-bottom-8 size-16 sm:size-24 z-20 pointer-events-none"
        />

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/filled/trophy.svg"
              alt="Trophy"
              width={40}
              height={40}
              className="size-6 pointer-events-none"
            />

            <p className="font-medium">Nível {userProgress.level}</p>
          </div>

          <div className="flex items-center gap-2 px-6 py-2 border w-fit rounded-full">
            <Image
              src="/icons/filled/xp.svg"
              alt="XP"
              width={40}
              height={40}
              className="size-6 pointer-events-none"
            />
            <p>{userProgress.xp}XP</p>
          </div>

          <div className="flex items-center justify-end">
            <Button variant="ghost" asChild>
              <Link href="/progress">Ver detalhes</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
