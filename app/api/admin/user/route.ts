import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function PUT(req: Request) {
  const session = await auth();
  if (!session || !session.user.isAdmin) throw new Error("Unauthorized");

  const body = await req.json();

  let isAdmin = false;
  if (body.isAdmin === "on") {
    isAdmin = true;
  }

  const user = await prisma.user.update({
    where: { id: body.id },
    data: {
      xboxId: body.xboxId,
      age: parseInt(body.age),
      bio: body.bio,
      points: parseInt(body.points),
      isAdmin: isAdmin,
    },
  });

  return NextResponse.json(user);
}
