import { signOut } from "@/auth";

export default function SignOutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-red-500/70 font-bold hover:scale-105 transition-all duration-150"
      >
        Signout
      </button>
    </form>
  );
}
