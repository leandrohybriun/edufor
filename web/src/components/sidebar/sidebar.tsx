"use client";

import { SidebarLink } from "@/components/sidebar/sidebar-link";
import { SidebarUser } from "@/components/sidebar/sidebar-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { sidebarLinks } from "@/config/sidebar-links";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Image src="/logo/logo-main.svg" alt="Logo" width={120} height={27} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-4">
          {sidebarLinks.map(({ id, title, href, icon }) => (
            <SidebarLink
              key={id}
              id={id}
              title={title}
              href={href}
              icon={icon}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  );
}
