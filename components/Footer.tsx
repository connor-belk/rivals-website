import Link from "next/link";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-800 to-slate-950  text-slate-200 text-center pt-3 pb-1">
      <h6 className="md:w-[50%] font-bold text-xl">Site Map</h6>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1">
        <ul className="flex flex-col items-center ">
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
        </ul>
        <ul className="flex flex-col items-center ">
          <li>
            <Link href={"#"}>Seasons</Link>
          </li>
          <li>
            <Link href={"#"}>Teams</Link>
          </li>
          <li>
            <Link href={"#"}>Account</Link>
          </li>
          <li>
            <Link href={"#"}>Admin Page</Link>
          </li>
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
        </ul>
        <ul className="self-center">
          <li className="flex justify-center items-center">
            <Link
              href={"#"}
              className="hover:scale-105 transition-all duration-150"
            >
              <FaDiscord className="text-6xl" />
            </Link>
          </li>
          <li>Join our Discord!</li>
        </ul>
        <div className="flex justify-center items-center">
          <Link
            href={"https://forza.net/"}
            target="_blank"
            className="hover:scale-105 transition-all duration-150"
          >
            <Image
              src={"/logo_full_forza.svg"}
              alt={"forza logo"}
              width={125}
              height={125}
              className="md:w-1/2"
            />
          </Link>
        </div>
      </div>
      <p className="text-sm mt-4">&copy; 2024 Rivals Webpage</p>
    </footer>
  );
}
