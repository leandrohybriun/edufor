import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-dvh bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627]">
      <Image
        src="/logo/logo-white.svg"
        alt="Background"
        width={150}
        height={34}
        className="absolute top-8 left-8 z-10"
      />

      <div className="relative flex-1 hidden lg:flex">
        <Image
          src="/login/login-icons.svg"
          alt="Background"
          width={768}
          height={768}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />

        <Image
          src="/login/login-vector.svg"
          alt="Background"
          width={553}
          height={553}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96"
        />
      </div>
      <div className="flex-1">
        {/* card */}
      </div>
    </div>
  );
}
