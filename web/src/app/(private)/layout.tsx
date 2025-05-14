import { AppSidebar } from "@/components/sidebar/sidebar";
import { AppSidebarHeader } from "@/components/sidebar/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface Props {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="bg-beige">
        <AppSidebarHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
