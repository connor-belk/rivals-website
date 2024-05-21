import { prisma } from "@/lib/prisma";
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
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              {user.isAdmin ? (
                <TableCell>Admin</TableCell>
              ) : (
                <TableCell>User</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
