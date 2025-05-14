import { NotificationSheet } from "@/components/sheets/notification-sheet";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppSidebarHeader() {
  return (
    <header className="h-24 flex items-center gap-4 p-4">
      <SidebarTrigger
        variant="sidebarHeader"
        className="justify-center size-10"
      />
      <h1 className="text-title font-bold truncate">Bem-vinda Anna!</h1>

      <NotificationSheet />
    </header>
  );
}
