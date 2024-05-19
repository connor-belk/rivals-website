import { auth } from "@/auth";

export default async function AuthCheck() {
  const session = await auth();
  // if (session) {
  //   console.log("session", session);
  // } else {
  //   console.log("no session");
  // }

  console.log("session", session);

  return (
    <>
      {session ? (
        <div className="absolute top-0 left-0 m-[5px] w-5 h-5 rounded-full bg-green-500/50"></div>
      ) : (
        <div className="absolute top-0 left-0 m-[5px] w-5 h-5 rounded-full bg-red-500/50"></div>
      )}
    </>
  );
}
