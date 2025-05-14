import Image from "next/image";

export function DailyCuriositis() {
  return (
    <div className="bg-[#C9E7FF] p-6 rounded-3xl">
      <div className="flex items-center gap-4">
        <div className="bg-[#8DCCFF] w-fit p-2 rounded-md">
          <Image
            src="/icons/filled/light-bulb.svg"
            alt="Trophy"
            width={48}
            height={48}
            className="size-6"
          />
        </div>

        <p className="font-bold">Curiosidade do dia</p>
      </div>
    </div>
  );
}
