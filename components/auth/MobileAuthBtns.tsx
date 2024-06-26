import { auth } from "@/auth";
import { FaDiscord } from "react-icons/fa6";
import SignOutBtn from "./SignOutBtn";
import SignInBtn from "./SignInBtn";
import Link from "next/link";
import Image from "next/image";

export default async function MobileAuthBtns() {
  const session = await auth();
  const userImageUrl = session?.user.image;

  if (!session)
    return (
      <li className="flex gap-2 items-center justify-center text-3xl bg-gradient-to-r from-[#7785CC] to-[#2A4D7E] px-5 py-3 rounded-xl font-medium">
        <FaDiscord />
        <SignInBtn />
      </li>
    );

  return (
    <>
      <li className="w-24 h-24 bg-slate-400 rounded-full cursor-pointer overflow-hidden">
        <Link href={"/dashboard"}>
          <Image
            src={userImageUrl || "/profile.jpg"}
            alt="profile image"
            height={200}
            width={200}
          />
        </Link>
      </li>
      <SignOutBtn />
    </>
  );
}

//   {
//     session ? (
//       <>
//         <li className="w-20 h-20 bg-slate-400 rounded-full cursor-pointer"></li>
//         <button>Sign Out</button>
//       </>
//     ) : (
//       <li
//         className="border border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-bold rounded-full text-slate-950 px-16 py-3 hover:scale-105 transition-all duration-150 flex items-center justify-center cursor-pointer text-4xl"
//         onClick={() => handleMobileMenu()}
//       >
//         <Link href={"/login"}>Login</Link>
//       </li>
//     );
//   }
// }
