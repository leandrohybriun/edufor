import Image from "next/image";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-dvh bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627]">
      <Image
        src="/logo/logo-white.svg"
        alt="Background"
        width={150}
        height={34}
        className="fixed hidden lg:block top-8 left-8 z-10"
      />

      <Image
        src={"/auth/bottom-vector.svg"}
        alt="Bottom Vector"
        width={1920}
        height={120}
        className="absolute bottom-0 inset-x-0 w-full"
      />

      <div className="relative flex-1 hidden lg:flex overflow-hidden">
        <Image
          src="/auth/login-icons.svg"
          alt="Background"
          width={768}
          height={768}
          className="absolute object-cover w-full"
          priority
        />

        <Image
          src="/auth/login-vector.svg"
          alt="Background"
          width={553}
          height={553}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96"
          priority
        />
      </div>

      <div className="flex-1 z-10 p-4">
        <LoginForm />
      </div>
    </div>
  );
}
