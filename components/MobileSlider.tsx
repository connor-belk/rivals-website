"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export default function MobileSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  function handleMobileMenu() {
    // setMobileMenu(!mobileMenu);
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
            <Link href={"/about"} onClick={() => handleMobileMenu()}>
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => handleMobileMenu()}>
              Contact
            </Link>
          </li>
          {children}
        </ul>
      </div>
    </>
  );
}
