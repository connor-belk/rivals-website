// "use client";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  //   console.log(session.user);

  return (
    <div className="text-white flex flex-col items-center justify-center h-[70dvh]">
      <h1 className="text-3xl text-center mb-3">Dashboard</h1>
      <p>Welcome back, {session.user.name}!</p>
      <p>
        This page is under construction. Please check back later for updates!
      </p>
    </div>
  );
}
