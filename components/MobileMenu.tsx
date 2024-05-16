"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";

export default function MobileMenu() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const session = false; // This block for authorization is not yet implemented

  function handleMobileMenu() {
    setMobileMenu(!mobileMenu);
    // document.getElementById("mobileMenuContainer")?.classList.toggle("hidden");

    document
      .getElementById("mobileMenuContainer")
      ?.classList.toggle("translate-x-full");
  }
  return (
    <>
      <div className="flex gap-5 items-center justify-center">
        <div className="hidden w-12 h-12 bg-slate-400 rounded-full cursor-pointer md:hidden"></div>{" "}
        {/* This is a placeholder div for profile picture dashboard link */}
        <RxHamburgerMenu
          className="text-4xl md:hidden cursor-pointer"
          onClick={() => handleMobileMenu()}
        />
      </div>
      <div
        id="mobileMenuContainer"
        className="z-20 absolute top-0 left-0 w-screen translate-x-full md:hidden h-screen bg-black/95 flex-col justify-center items-center transition-all duration-500"
      >
        {/* <p className="text-center text-3xl font-thin">Navigation Menu</p> */}
        <TfiClose
          className="absolute top-0 right-0 text-5xl m-4 cursor-pointer"
          onClick={() => handleMobileMenu()}
        />
        <ul className="h-screen flex flex-col justify-center items-center text-5xl font-thin text-slate-300 gap-9">
          <li>
            <Link href={"/"} onClick={() => handleMobileMenu()}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/rivals"} onClick={() => handleMobileMenu()}>
              Rivals
            </Link>
          </li>
          <li>
            <Link href={"/wheel-to-wheel"} onClick={() => handleMobileMenu()}>
              Wheel to Wheel
            </Link>
          </li>
          <li>
            <Link href={"#"} onClick={() => handleMobileMenu()}>
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => handleMobileMenu()}>
              Contact
            </Link>
          </li>
          {session ? (
            <li className="w-20 h-20 bg-slate-400 rounded-full cursor-pointer"></li>
          ) : (
            <li
              className="border border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-bold rounded-full text-slate-950 px-16 py-3 hover:scale-105 transition-all duration-150 flex items-center justify-center cursor-pointer text-4xl"
              onClick={() => handleMobileMenu()}
            >
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
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
            <li className="w-10 h-10 bg-slate-400 rounded-full cursor-pointer"></li>
          ) : (
            <li className="border border-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-bold rounded-full text-slate-950 px-3 py-1 hover:scale-105 transition-all duration-150">
              <Link href={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
