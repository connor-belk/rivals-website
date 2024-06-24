import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  } else if (!session.user.isAdmin) {
    return <div className="text-white">Unauthorized</div>;
  } else {
    return (
      <div className="text-white">
        <div>Admin Page</div>
        <div>
          <ul>
            <li>QuickLinks</li>
            <li>
              <Link href={"/admin/users"}>Users</Link>
            </li>
            <li>
              <Link href={"/admin/events"}>Events</Link>
            </li>
            <li>
              <Link href={"/admin/seasons"}>Seasons</Link>
            </li>
            <li>
              <Link href={"/admin/results"}>Results</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
