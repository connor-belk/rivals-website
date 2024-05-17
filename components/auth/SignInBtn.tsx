"use server";

import { signIn } from "@/auth";

export default async function SignIn() {
  //   const handleSignIn = async () => {
  //     await signIn("discord");
  //   };

  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <button type="submit">Signin with Discord</button>
    </form>
  );
}
