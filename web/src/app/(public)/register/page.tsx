import Image from "next/image";
import { RegisterForm } from "./_components/form";

export default function RegisterPage() {
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
        width={890}
        height={752}
        className="fixed left-0 w-full lg:w-3/4 object-cover h-full"
      />

      {/* this image is a line that needs to crop the background */}
      {/* <Image
        src={"/auth/vector.svg"}
        alt="Right Side Vector"
        width={500}
        height={500}
        className="fixed w-full h-full object-contain lg:top-0"
      /> */}

      <div className="lg:flex-1" />

      <div className="flex-1 self-center z-10 p-4">
        <RegisterForm />
      </div>
    </div>
  );
}
