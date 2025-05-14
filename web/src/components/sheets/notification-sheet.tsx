"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { notificationType } from "@/config/notification-type";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  BellIcon,
  BookCheck,
  Heart,
  ShieldCheck,
  ShieldUser,
  SwordIcon,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Notification = {
  id: number;
  type: number;
  title: string;
  content: string;
  link?: string;
};

const data: Notification[] = [
  {
    id: 1,
    type: notificationType.battle,
    title: "Nova batalha disponível",
    content: "Entre e mostre seu conhecimento para pontuar com sua equipe.",
    link: "/battle",
  },
  {
    id: 2,
    type: notificationType.community,
    title: "Bem-vindo à comunidade",
    content: "Você foi adicionado ao grupo de estudos.",
    link: "/community",
  },
  {
    id: 3,
    type: notificationType.teamRequest,
    title: "Solicitação de equipe",
    content: "Sua equipe recebeu uma nova solicitação de participação.",
    link: "/team/requests",
  },
  {
    id: 4,
    type: notificationType.communityPostLike,
    title: "Curtida na publicação",
    content: "Usuário x curtiu sua publicação na comunidade.",
    link: "/community/posts/123",
  },
];

export function NotificationSheet() {
  const [notifications, setNotifications] = useState<Notification[]>(data);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="sidebarHeader"
          className="relative cursor-pointer ml-auto"
        >
          <BellIcon />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notificações</SheetTitle>
          <VisuallyHidden>
            <SheetDescription>
              Você tem {notifications.length} notificações.
            </SheetDescription>
          </VisuallyHidden>
        </SheetHeader>

        <div className="flex flex-col gap-4 p-4 overflow-y-auto">
          {!notifications.length && (
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-muted-foreground/20 rounded-xl">
              <BellIcon className="size-4" />
              <p className="text-muted-foreground">
                Você não tem notificações.
              </p>
            </div>
          )}

          {notifications.map((notification) => {
            const Icon =
              {
                1: SwordIcon,
                2: ShieldUser,
                3: ShieldCheck,
                4: UserRound,
                5: ShieldUser,
                6: BookCheck,
                7: Heart,
              }[notification.type] ?? BellIcon;

            return (
              <div
                key={notification.id}
                className="flex flex-col gap-4 bg-muted-foreground/20 p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-b from-[#891810] via-[#B11813] to-[#E22627] text-white w-fit rounded-full p-2">
                    <Icon className="size-4" />
                  </div>
                  <p className="font-medium">{notification.title}</p>
                </div>
                <p>{notification.content}</p>

                {notification.link && (
                  <div className="flex items-center gap-4">
                    <Link
                      href={notification.link}
                      className="text-label text-primary"
                    >
                      Ver mais
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <SheetFooter>
          <Button type="button" variant="primary_full_rounded" size="xl">
            Filtrar
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="xl"
            onClick={handleClearNotifications}
          >
            Limpar
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
