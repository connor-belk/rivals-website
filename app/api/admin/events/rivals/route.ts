import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const rivalsEvents = await prisma.rivalsEvent.findMany();

  return NextResponse.json(rivalsEvents);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const { seasonId, track, vehicle, endsAt } = await req.json();

  const rivalsEvent = await prisma.rivalsEvent.create({
    data: {
      seasonId: seasonId,
      track: track,
      vehicle: vehicle,
      endsAt: endsAt,
      finished: false,
    },
  });

  console.log(rivalsEvent);

  return NextResponse.json({ message: "Rivals event added!" });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const { id } = await req.json();

  const event = await prisma.rivalsEvent.delete({
    where: {
      id: id,
    },
  });

  // console.log(event);

  return NextResponse.json({ message: "Rivals event deleted!" });
}

export async function PATCH(req: Request) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const { id, track, vehicle, endsAt } = await req.json();

  const event = await prisma.rivalsEvent.update({
    where: {
      id: id,
    },
    data: {
      track: track,
      vehicle: vehicle,
      endsAt: endsAt,
    },
  });

  // console.log(event);

  return NextResponse.json({ body: "Rivals event updated!" });
}
