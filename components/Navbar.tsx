import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";

export default async function Navbar() {
  const session = true; // This block for authorization is not yet implemented

  return (
    <nav className="bg-slate-800 flex justify-between items-center px-5 py-6 text-slate-200">
      <h1 className="text-3xl font-bold flex">
        {/* <Image
          src="/Forza_new_logo.png"
          alt="logo"
          width={70}
          height={70}
          className="text-slate-200"
        /> */}
        <Link href={"/"}>Rivals Webpage</Link>
      </h1>
      <div>
        <MobileMenu />
      </div>
    </nav>
  );
}
