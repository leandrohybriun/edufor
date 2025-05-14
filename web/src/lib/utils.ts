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

export function formatChallengeLevel(level: number) {
  switch (level) {
    case 1:
      return "Fácil";
    case 2:
      return "Médio";
    case 3:
      return "Difícil";
    case 4:
      return "Todos os níveis";
    default:
      return "Nível desconhecido";
  }
}
