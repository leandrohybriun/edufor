import {
  HomeIcon,
  LucideIcon,
  SettingsIcon,
  ShieldUserIcon,
  SwordIcon,
  TrophyIcon,
  Users2Icon,
} from "lucide-react";

export type SidebarLink = {
  id: string;
  title: string;
  href: string;
  icon: LucideIcon;
};

export const sidebarLinks: SidebarLink[] = [
  {
    id: "1",
    title: "Início",
    href: "/home",
    icon: HomeIcon,
  },
  {
    id: "2",
    title: "Batalhas",
    href: "/battles",
    icon: SwordIcon,
  },
  {
    id: "3",
    title: "Ranking",
    href: "/ranking",
    icon: TrophyIcon,
  },
  {
    id: "4",
    title: "Equipes",
    href: "/teams",
    icon: Users2Icon,
  },
  {
    id: "5",
    title: "Comunidade",
    href: "/community",
    icon: ShieldUserIcon,
  },
  {
    id: "6",
    title: "Configurações",
    href: "/settings",
    icon: SettingsIcon,
  },
];
