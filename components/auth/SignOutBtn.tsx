import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export default function SignOutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" }).catch((error: any) => {
          console.error(error.message, `Error message: ${error.message}`);
          throw error;
        });
      }}
    >
      <button
        type="submit"
        className="text-3xl px-6 py-2 font-medium md:px-4 rounded-xl bg-red-500/70 md:font-bold md:hover:scale-105 md:transition-all md:duration-150"
      >
        Sign Out
      </button>
    </form>
  );
}
