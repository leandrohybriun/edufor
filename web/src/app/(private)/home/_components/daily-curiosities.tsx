import Image from "next/image";

export function DailyCuriositis() {
  return (
    <div className="relative bg-[#C9E7FF] p-6 rounded-3xl overflow-clip select-none">
      <Image
        src="/home/daily-curiosities/bottom-vector.svg"
        alt="Vector"
        width={100}
        height={100}
        className="absolute bottom-0 right-0 w-full"
      />
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

      <div className="flex flex-col items-center justify-center text-center gap-4 h-full">
        <p className="text-7xl font-black text-[#5a94ff]">86</p>
        <p className="text-heading font-bold">Milhões</p>
        <p className="font-medium">
          É a quantidade de neurônios que o nosso cérebro possui!
        </p>
      </div>
    </div>
  );
}
