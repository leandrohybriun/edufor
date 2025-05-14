import { userPvs } from "@/config/user-pvs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUserPvs(pv: number) {
  switch (pv) {
    case userPvs.student:
      return "Estudante";
    case userPvs.teacher:
      return "Professor";
    case userPvs.moderator:
      return "Moderador";
    case userPvs.coordinator:
      return "Coordenador";
    case userPvs.admin:
      return "Administrador";
    default:
      return "Usuário";
  }
}
