import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function GamemodeList() {
  const options = [
    {
      id: 1,
      title: "Jogar Sozinho",
      description: "Teste seus conhecimentos no seu tempo.",
      image: "/battles/battle_id/solo.svg",
    },
    {
      id: 2,
      title: "Jogar em Equipe",
      description: "Monte um time e vença com estratégia!",
      image: "/battles/battle_id/team.svg",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {options.map((option) => (
        <div
          key={option.id}
          className="bg-background p-4 rounded-xl shadow-sm space-y-4"
        >
          <Image
            src={option.image}
            alt={option.title}
            width={100}
            height={100}
            className="w-full h-full max-h-32 place-self-center"
          />

          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-subtitle font-medium">{option.title}</h3>

            <p>{option.description}</p>

            <Button variant="primary_full_rounded" className="mt-auto" asChild>
              <Link href={`/battle/${option.id}`}>Jogar agora</Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
