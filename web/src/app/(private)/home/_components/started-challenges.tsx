import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function StartedChallenges() {
  const data = [
    {
      id: 1,
      title: "Missão corpo humano",
      image: "/home/started-challenges/image.svg",
      battleRounds: 10,
      battleRoundsCompleted: 5,
      link: "/battles/1",
    },
    {
      id: 2,
      title: "Batalha de gramática",
      image: "/home/started-challenges/image1.svg",
      battleRounds: 10,
      battleRoundsCompleted: 2,
      link: "/battles/2",
    },
    {
      id: 3,
      title: "Acelerando partículas",
      image: "/home/started-challenges/image2.svg",
      battleRounds: 10,
      battleRoundsCompleted: 7,
      link: "/battles/3",
    },
    {
      id: 4,
      title: "Caçadores de mapas",
      image: "/home/started-challenges/image3.svg",
      battleRounds: 10,
      battleRoundsCompleted: 9,
      link: "/battles/4",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {data.map((challenge) => {
        const completePercentage =
          (challenge.battleRoundsCompleted / challenge.battleRounds) * 100;

        return (
          <div
            key={challenge.id}
            className="bg-[#F3F3F3] flex items-center gap-4 p-4 rounded-lg select-none"
          >
            <Image
              src={challenge.image}
              alt={challenge.title}
              width={128}
              height={128}
              className="size-16"
            />

            <div className="w-full">
              <h3 className="text-lg font-semibold">{challenge.title}</h3>

              <div className="flex items-center gap-4">
                <div className="space-y-1 flex-1">
                  <p className="text-success">
                    {challenge.battleRoundsCompleted}
                    {"/"}
                    {challenge.battleRounds}
                  </p>

                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-success h-2.5 rounded-full"
                      style={{ width: `${completePercentage}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" asChild>
                  <Link href={challenge.link}>Continuar</Link>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
