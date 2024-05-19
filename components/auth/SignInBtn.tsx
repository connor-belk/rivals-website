"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord", { redirectTo: "/dashboard" })
          .then(() => {
            redirect("/dashboard");
          })
          .catch((error: any) => {
            console.error(error.message, `Error message: ${error.message}`);
            throw error;
          });
      }}
    >
      <button type="submit">Signin with Discord</button>
    </form>
  );
}
