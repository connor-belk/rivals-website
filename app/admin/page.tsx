import { auth } from "@/auth";
import { redirect } from "next/navigation";

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
        <div>Page not built.</div>
      </div>
    );
  }
}
