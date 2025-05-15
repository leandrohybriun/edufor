import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export function BattleTeam() {
  const data = {
    users: [
      {
        id: 1,
        name: "Anna",
        avatar: "/battle/user1.jpg",
      },
      {
        id: 2,
        name: "Lucas",
        avatar: "/battle/user2.jpg",
      },
    ],
  };

  return (
    <div className="flex flex-wrap justify-between sm:justify-end items-center gap-4">
      <div className="text-white sm:text-end space-y-2">
        <p className="font-bold">{data.users.length} amigos em batalha</p>
        <p className="text-label">Convide amigos para se juntar a batalha</p>
      </div>

      <div className="flex items-center *:not-first:-ml-4">
        {data.users.map((user) => (
          <Avatar className="size-12" key={user.id}>
            <AvatarImage src={user.avatar} className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}

        <Button variant="invite_battle" className="size-12 z-10">
          <PlusIcon className="size-6" />
        </Button>
      </div>
    </div>
  );
}
