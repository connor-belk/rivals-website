import { signOut } from "@/auth";

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
        className="text-white px-6 py-2 font-thin text-3xl border-white md:text-lg md:px-4 md:py-1 rounded-xl md:font-medium md:border-2 md:border-red-500/50 md:hover:border-transparent md:hover:bg-red-500/50 md:transition-all md:duration-150"
      >
        Sign Out
      </button>
    </form>
  );
}
