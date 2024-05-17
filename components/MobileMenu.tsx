// "use client";

// import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
import SignInBtn from "./auth/SignInBtn";
import MobileSlider from "./MobileSlider";
import { auth } from "@/auth";
import SignOutBtn from "./auth/SignOutBtn";

export default async function MobileMenu() {
  // const [mobileMenu, setMobileMenu] = useState(false);

  const session = await auth(); // This block for authorization is not yet implemented

  // function handleMobileMenu() {
  //   // setMobileMenu(!mobileMenu);
  //   // document.getElementById("mobileMenuContainer")?.classList.toggle("hidden");

  //   document
  //     .getElementById("mobileMenuContainer")
  //     ?.classList.toggle("translate-x-full");
  // }
  return (
    <>
      <MobileSlider />
      <div className="hidden md:block">
        <ul className="hidden md:flex gap-5 items-center justify-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/rivals"}>Rivals</Link>
          </li>
          <li>
            <Link href={"/wheel-to-wheel"}>Wheel to Wheel</Link>
          </li>
          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          {session ? (
            <>
              <li className="w-10 h-10 bg-slate-400 rounded-full cursor-pointer"></li>
              <SignOutBtn />
            </>
          ) : (
            <li className="border border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-bold rounded-full text-slate-950 px-3 py-1 hover:scale-105 transition-all duration-150">
              {/* <Link href={"/login"}>Login</Link> */}
              <SignInBtn />
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
