import { prisma } from "@/lib/prisma";
import Link from "next/link";
import UserEditForm from "./UserEditForm";

export default async function AdminUserEditPage({
  params,
}: {
  params: { id: string };
}) {
  const userData = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!userData)
    return (
      <div className="text-white">
        <div>User not found!</div>
        <Link href={"/admin/users"} className="underline">
          Go Back
        </Link>
      </div>
    );

  return <UserEditForm userData={userData} />;
}
