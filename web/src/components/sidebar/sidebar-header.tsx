"use client";

import { NotificationSheet } from "@/components/sheets/notification-sheet";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function AppSidebarHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/home";
  const isSubroute = pathname.split("/").length > 2;

  return (
    <header className="h-24 flex items-center gap-4 px-4 md:px-8 py-4">
      <SidebarTrigger
        variant="ghost_full_rounded"
        className="justify-center size-10"
      />

      {isSubroute && (
        <Button
          variant="ghost_full_rounded"
          className="text-muted-foreground"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon />
          Voltar
        </Button>
      )}

      <Button variant="primary_full_rounded" asChild>
        <Link href="/ranking/expanded">
          <Image
            src="/icons/filled/trophy.svg"
            alt="Trophy"
            width={40}
            height={40}
            className="size-5 pointer-events-none"
          />

          <span>Nível 3</span>
        </Link>
      </Button>

      {isHomePage && (
        <h1 className="text-title font-bold truncate hidden md:block">
          Bem-vinda Anna!
        </h1>
      )}

      <NotificationSheet />
    </header>
  );
}
