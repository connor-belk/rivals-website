import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { prisma } from "@/lib/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getRivalsEvents() {
  const rivalsEvents = await prisma.rivalsEvent.findMany();
  return rivalsEvents;
}

export async function getW2WEvents() {
  const wheelToWheelEvents = await prisma.wheelToWheelEvent.findMany();
  return wheelToWheelEvents;
}

export async function getSeasons() {
  const seasons = await prisma.season.findMany();
  return seasons;
}
