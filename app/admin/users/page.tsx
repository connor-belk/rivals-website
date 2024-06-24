import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Loader from "@/components/utils/Loader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const getAllUsers = async () => {
  const userArray = [];
  console.log("Fetching users...");
  const users = await prisma.user.findMany();
  for (const user in users) {
    userArray.push(users[user]);
  }
  console.log("Fetched users!");
  return userArray;
};

export default async function AdminUsersPage() {
  const userData = await getAllUsers();
  const session = await auth();
  if (!session) redirect("/login");
  if (!session.user.isAdmin) throw new Error("Unauthorized");

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.points}</TableCell>
              {user.isAdmin ? (
                <TableCell>Admin</TableCell>
              ) : (
                <TableCell>User</TableCell>
              )}
              <TableCell>
                <Link
                  href={`/admin/users/${user.id}`}
                  className="bg-yellow-300 text-black font-bold px-4 py-1 rounded-xl"
                >
                  Edit
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
