import { signIn } from "@/auth";
import { FaDiscord } from "react-icons/fa6";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  //   const { data: session } = useSession();
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <div className="text-white min-h-[70dvh] flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-bold">Sign In With Email</h1>
        <section className="w-full flex flex-col items-center justify-center">
          <form
            action=""
            className="flex flex-col gap-5 w-full items-center justify-center"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email login not yet implemented :("
              className="w-[80%] max-w-[350px] px-5 py-2 bg-red-500/40 rounded-full border border-slate-500"
              disabled
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Email login not yet implemented :("
              className="w-[80%] max-w-[350px] px-5 py-2 bg-red-500/40 rounded-full border border-slate-500"
              disabled
            />
          </form>
        </section>
        <section className="w-full flex gap-3 items-center justify-center">
          <span className="w-[25%] border border-slate-500"></span>
          <span className="text-sm text-slate-300">OR</span>
          <span className="w-[25%] border border-slate-500"></span>
        </section>
        <section>
          <form
            action={async () => {
              "use server";
              await signIn("discord");
            }}
          >
            <button
              type="submit"
              className="bg-[#7299EE] flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold hover:scale-105 transition-all duration-150 text-xl"
            >
              <FaDiscord className="text-4xl" />
              Signin with Discord
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
