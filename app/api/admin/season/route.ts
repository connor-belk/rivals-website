import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session || !session.user.isAdmin) throw new Error("Unauthorized");

  const body = await req.json();

  const season = await prisma.season.create({
    data: {
      name: body.name,
      description: body.description,
    },
  });

  return NextResponse.json(season);
}
