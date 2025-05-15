import { Button } from "@/components/ui/button";
import { formatChallengeLevel } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function SubjectsRow() {
  const data = [
    {
      id: 1,
      name: "Química",
      level: 4,
      color: "#FA7CB3",
      image: "/battles/subjects-row/chemistry.svg",
      link: "/battles/1",
    },
    {
      id: 2,
      name: "Matemática",
      level: 4,
      color: "#9F2BC8",
      image: "/battles/subjects-row/math.svg",
      link: "/battles/2",
    },
    {
      id: 3,
      name: "Português",
      level: 4,
      color: "#D9443B",
      image: "/battles/subjects-row/portuguese.svg",
      link: "/battles/3",
    },
    {
      id: 4,
      name: "Geografia",
      level: 4,
      color: "#3CCDF2",
      image: "/battles/subjects-row/geography.svg",
      link: "/battles/4",
    },
    {
      id: 5,
      name: "Artes",
      level: 4,
      color: "#657DD7",
      image: "/battles/subjects-row/arts.png",
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
              src="/battles/subjects-row/top-left-vector.svg"
              alt="Top Left Vector"
              width={80}
              height={80}
              className="absolute -top-8 left-0 mix-blend-luminosity"
            />

            <Image
              src="/battles/subjects-row/top-vector.svg"
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
