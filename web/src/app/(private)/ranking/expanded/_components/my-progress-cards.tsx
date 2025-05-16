import Image from "next/image";

export function MyProgressCards() {
  const data = {
    battles: 23,
    correctAnswers: 120,
    correctAnswersPercentage: 80,
    averageTime: 89,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
      <div className="bg-[#FF1003]/20 text-[#FF1003] p-4 rounded-3xl flex gap-4 flex-col xl:items-center xl:text-center xl:justify-center">
        <Image
          src="/ranking/expanded/gamepad.svg"
          alt="Gamepad Icon"
          width={120}
          height={120}
          className="size-16 md:size-24"
        />
        <p className="text-title">Partidas</p>
        <h3 className="text-heading font-black">{data.battles}</h3>
      </div>
      <div className="bg-[#D7F3D3] text-[#4F9F12] p-4 rounded-3xl flex gap-4 flex-col xl:items-center xl:text-center xl:justify-center">
        <Image
          src="/ranking/expanded/success.svg"
          alt="Success Icon"
          width={120}
          height={120}
          className="size-16 md:size-24"
        />
        <p className="text-title">Acertos</p>
        <h3 className="text-heading font-black">{data.correctAnswers}</h3>
      </div>
      <div className="bg-[#F76CB6]/20 text-[#F76CB6] p-4 rounded-3xl flex gap-4 flex-col xl:items-center xl:text-center xl:justify-center">
        <Image
          src="/ranking/expanded/mind.svg"
          alt="Mind Icon"
          width={120}
          height={120}
          className="size-16 md:size-24"
        />
        <p className="text-title">Aproveitamento</p>
        <h3 className="text-heading font-black">
          {data.correctAnswersPercentage}%
        </h3>
      </div>
      <div className="bg-[#C69736]/20 text-[#C69736] p-4 rounded-3xl flex gap-4 flex-col xl:items-center xl:text-center xl:justify-center">
        <Image
          src="/ranking/expanded/time.svg"
          alt="Time Icon"
          width={120}
          height={120}
          className="size-16 md:size-24"
        />
        <p className="text-title">Tempo médio</p>
        <h3 className="text-heading font-black">{data.averageTime} segundos</h3>
      </div>
    </div>
  );
}
