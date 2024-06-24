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
      // description: body.description,
      startsAt: body.startsAt,
    },
  });

  return NextResponse.json(season);
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session || !session.user.isAdmin) throw new Error("Unauthorized");

  const { id } = await req.json();

  const season = await prisma.season.findUnique({
    where: {
      id: id,
    },
  });

  if (!season) throw new Error("Season not found!");

  await prisma.season.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ message: "Season deleted!" });
}

export async function PATCH(req: Request) {
  const session = await auth();
  if (!session || !session.user.isAdmin) throw new Error("Unauthorized");

  const { id, name, startsAt, endsAt } = await req.json();

  // throw new Error("Not implemented yet!");

  const season = await prisma.season.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      startsAt: startsAt,
      endsAt: endsAt,
    },
  });

  // console.log(season);

  return NextResponse.json({ message: "Season updated!" });
}
