import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BellIcon } from "lucide-react";

export function AppSidebarHeader() {
  return (
    <header className="h-24 flex items-center gap-4 p-4">
      <SidebarTrigger
        variant="sidebarHeader"
        className="justify-center size-10"
      />
      <h1 className="text-title font-bold">Bem-vinda Anna!</h1>

      <Button
        size="icon"
        variant="sidebarHeader"
        className="relative cursor-pointer ml-auto"
      >
        <BellIcon />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
      </Button>
    </header>
  );
}
