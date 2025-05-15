import { Button } from "@/components/ui/button";
import { formatChallengeLevel } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function ExploreSubjectsRow() {
  const data = [
    {
      id: 1,
      name: "História",
      level: 4,
      color: "#957C7E",
      image: "/battles/explore-subjects-row/1.svg",
      link: "/battles/1",
    },
    {
      id: 2,
      name: "Física",
      level: 4,
      color: "#C0531B",
      image: "/battles/explore-subjects-row/2.svg",
      link: "/battles/2",
    },
    {
      id: 3,
      name: "Ciências",
      level: 4,
      color: "#E1CA03",
      image: "/battles/explore-subjects-row/3.svg",
      link: "/battles/3",
    },
    {
      id: 4,
      name: "Inglês",
      level: 4,
      color: "#022076",
      image: "/battles/explore-subjects-row/4.svg",
      link: "/battles/4",
    },
    {
      id: 5,
      name: "Educação Física",
      level: 4,
      color: "#F5AB13",
      image: "/battles/explore-subjects-row/5.png",
      link: "/battles/5",
    },
  ];

  return (
    <section className="space-y-4 pl-4 md:pl-8">
      <h3 className="text-subtitle font-semibold truncate">
        Suas matérias favoritas
      </h3>

      <div className="flex flex-row flex-nowrap gap-4 overflow-x-auto">
        {data.map((subject) => (
          <div
            key={subject.id}
            className="relative p-6 rounded-3xl overflow-clip text-white w-full min-w-32 max-w-72 h-48 shrink-0"
            style={{ backgroundColor: subject.color }}
          >
            <Image
              src="/battles/explore-subjects-row/top-left-vector.svg"
              alt="Top Left Vector"
              width={80}
              height={80}
              className="absolute -top-8 left-0 mix-blend-luminosity"
            />

            <Image
              src="/battles/explore-subjects-row/top-vector.svg"
              alt="Top Vector"
              width={120}
              height={120}
              className="absolute top-0 left-12 mix-blend-luminosity"
            />

            <Image
              src={subject.image}
              alt={`${subject.name} Image`}
              width={140}
              height={140}
              className="absolute bottom-0 right-0"
            />

            <div className="flex flex-col h-full gap-2">
              <p className="text-subtitle font-bold z-10">{subject.name}</p>
              <p className="z-10">{formatChallengeLevel(subject.level)}</p>

              <Button
                variant="white_full_rounded"
                className="mt-auto w-fit z-10"
                asChild
              >
                <Link href={subject.link}>Jogar agora</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
