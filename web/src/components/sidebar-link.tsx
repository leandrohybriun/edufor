"use client";

import { Button } from "@/components/ui/button";
import { SidebarMenuItem } from "@/components/ui/sidebar";
import { type SidebarLink } from "@/config/sidebar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarLink({ id, title, href, icon: Icon }: SidebarLink) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href);

  return (
    <SidebarMenuItem key={id}>
      <Button
        variant={isActive ? "sidebarActive" : "sidebar"}
        size="sidebar"
        asChild
      >
        <Link href={href}>
          <Icon className="size-4" />
          {title}
        </Link>
      </Button>
    </SidebarMenuItem>
  );
}
