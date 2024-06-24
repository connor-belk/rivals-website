import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  return NextResponse.json({ message: "Wheel to Wheel events!" });
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const { seasonId, track, vehicle, dateTime } = await req.json();

  const newWheelToWheelEvent = await prisma.wheelToWheelEvent.create({
    data: {
      seasonId: seasonId,
      track: track,
      vehicle: vehicle,
      dateTime: dateTime,
      finished: false,
    },
  });

  console.log(newWheelToWheelEvent);

  return NextResponse.json({ message: "Wheel to Wheel event added!" });
}

export async function DELETE(req: Request) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const { id } = await req.json();

  const event = await prisma.wheelToWheelEvent.delete({
    where: {
      id: id,
    },
  });

  console.log(event);

  return NextResponse.json({ message: "Wheel to Wheel event deleted!" });
}

export async function PATCH(req: Request) {
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  const { id, track, vehicle, dateTime } = await req.json();

  if (!id || !track || !vehicle || !dateTime)
    return NextResponse.json({ message: "Invalid data!" });

  const event = await prisma.wheelToWheelEvent
    .update({
      where: {
        id: id,
      },
      data: {
        track: track,
        vehicle: vehicle,
        dateTime: dateTime,
      },
    })
    .catch((error) => {
      console.log(error);
      return NextResponse.json({ message: "Error updating event!" });
    });

  // console.log(event);

  return NextResponse.json({ message: "Wheel to Wheel event updated!" });
}
