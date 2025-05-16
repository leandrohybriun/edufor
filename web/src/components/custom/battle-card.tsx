import { challengeType } from "@/config/challenge";
import { formatChallengeLevel } from "@/lib/utils";
import { Gamepad2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  id: number;
  level: number;
  type: number;
  title: string;
  link: string;
  color: string;
  users: { id: number }[];
  max_users: number;
  points: number;
  hideButton?: boolean;
}

export function BattleCard({ hideButton = false, ...props }: Props) {
  return (
    <div
      className="flex items-center justify-between text-white p-4 rounded-lg shadow-md"
      style={{ backgroundColor: props.color }}
    >
      <div className="space-y-2">
        <p className="text-subtitle font-semibold">{props.title}</p>
        <div className="flex items-center gap-2">
          <Gamepad2 className="size-4" />
          <p className="text-label-details">
            {formatChallengeLevel(props.level)}
          </p>
        </div>

        {props.type === challengeType.team && (
          <p className="text-label">
            {props.users.length} / {props.max_users}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/filled/xp.svg"
            alt="XP"
            width={20}
            height={20}
            className="size-6"
          />
          <p className="text-label">+{props.points} XP</p>
        </div>

        {!hideButton && (
          <Button className="mt-auto" variant="primary_full_rounded" asChild>
            <Link href={props.link}>Jogar agora</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
