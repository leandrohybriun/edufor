import Image from "next/image";
import { ForgotPasswordNextForm } from "./_components/form";

interface Props {
  searchParams: Promise<{ code?: string }>;
}

export default async function ForgotPasswordNextPage({ searchParams }: Props) {
  const { code } = await searchParams;

  return (
    <div className="relative flex min-h-dvh bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627]">
      <Image
        src="/logo/logo-mixed.svg"
        alt="Logo"
        width={150}
        height={34}
        className="fixed hidden lg:block top-8 left-8 z-10"
      />

      <Image
        src={"/auth/background.svg"}
        alt="Background"
        width={1920}
        height={1622}
        className="fixed left-0 w-full lg:w-[70%]"
      />

      {/* this image is a line that needs to crop the background */}
      {/* <Image
        src={"/login2/vector.svg"}
        alt="Right Side Vector"
        width={500}
        height={500}
        className="fixed w-full h-full object-contain lg:top-0"
      /> */}

      <div className="lg:flex-1" />

      <div className="flex-1 z-10 p-4">
        <ForgotPasswordNextForm code={code} />
      </div>
    </div>
  );
}
