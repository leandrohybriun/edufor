import { Button } from "@/components/ui/button";
import { userPvs } from "@/config/user-pvs";
import { formatUserPvs } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";

export function SidebarUser() {
  const user = {
    name: "Anna Hatz",
    email: "anna@hatz.com.br",
    image: "/home/sidebar-user.png",
    role: userPvs.student,
  };

  return (
    <div className="flex items-center gap-4 px-4 py-2 rounded-md">
      <div className="relative size-10 rounded-full overflow-clip ring-2 ring-primary">
        <Image src={user.image} alt="User Image" className="bg-muted" fill />
      </div>

      <div className="flex-1">
        <p className="font-medium">{user.name}</p>
        <p className="text-sm">{formatUserPvs(user.role)}</p>
      </div>

      <Button size="icon" variant="sidebar" className="justify-center">
        <LogOutIcon />
      </Button>
    </div>
  );
}
