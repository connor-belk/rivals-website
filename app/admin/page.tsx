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
      <div className="text-white mt-4">
        <h2 className="text-center text-3xl font-bold">Admin Page</h2>
        <div>
          <p className="text-center">QuickLinks</p>
          <ul className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[768px] mx-auto my-[96px]">
            <Link
              href={"/admin/users"}
              className="bg-gray-700 rounded-xl px-3 py-10 text-center text-2xl font-bold hover:bg-gray-600 active:bg-gray-500 transition-all duration-150"
            >
              <li>Users</li>
            </Link>
            <Link
              href={"/admin/events"}
              className="bg-gray-700 rounded-xl px-3 py-10 text-center text-2xl font-bold hover:bg-gray-600 active:bg-gray-500 transition-all duration-150"
            >
              <li>Events</li>
            </Link>
            <Link
              href={"/admin/seasons"}
              className="bg-gray-700 rounded-xl px-3 py-10 text-center text-2xl font-bold hover:bg-gray-600 active:bg-gray-500 transition-all duration-150"
            >
              <li>Seasons</li>
            </Link>
            <Link
              href={"/admin/results"}
              className="bg-gray-700 rounded-xl px-3 py-10 text-center text-2xl font-bold hover:bg-gray-600 active:bg-gray-500 transition-all duration-150"
            >
              <li>Results</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
