import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default async function Navbar() {
  const session = true; // This block for authorization is not yet implemented

  return (
    <nav className="bg-slate-800 flex justify-between items-center px-5 py-3 text-slate-200">
      <h1 className="text-2xl font-bold flex">
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
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu className="md:hidden text-3xl" />
            <p className="hidden md:block text-xl">Menu</p>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-3xl md:text-4xl mb-1">
                Navigation
              </SheetTitle>
              <Separator />
              <SheetDescription className="hover:bg-slate-200 px-5 py-2 rounded-md transition-all duration-150">
                <Link href={"/rivals"} className="text-3xl">
                  Rivals
                </Link>
              </SheetDescription>
              <Separator />
              <SheetDescription className="hover:bg-slate-200 px-5 py-2 rounded-md transition-all duration-150">
                <Link href={"/wheel2wheel"} className="text-3xl">
                  Wheel to Wheel
                </Link>
              </SheetDescription>
              <Separator />
              <Separator />
            </SheetHeader>
            {!session ? (
              <Link href={"/api/auth/signin"}>
                <SheetDescription className="mt-5 bg-green-500 text-center text-3xl text-white py-2 rounded-lg hover:bg-green-600 active:bg-green-700 focus:outline-none transition-all duration-150">
                  Sign In
                </SheetDescription>
              </Link>
            ) : (
              <>
                <div className="mt-10 flex justify-between items-center mb-5 w-full justify-self-end">
                  {/* <Image
                    src={"/favicon.ico"}
                    alt="profile picture"
                    width={50}
                    height={50}
                  /> */}
                  <div className="md:h-[75px] w-[75px] rounded-full bg-black/30"></div>
                  {/* // placeholder for profile picture */}
                  <button className="md:px-10 py-2 rounded-md bg-red-500 text-xl font-bold">
                    Sign Out
                  </button>
                </div>
              </>
            )}
            {/* <SheetFooter>hello world</SheetFooter> */}
          </SheetContent>
        </Sheet>
      </div>
      {/* <ul className="flex gap-4">
        <li>
          <Link href="/rivals">Rivals</Link>
        </li>
        <li>
          <Link href="/W2W">W2W</Link>
        </li>
      </ul> */}
    </nav>
  );
}
