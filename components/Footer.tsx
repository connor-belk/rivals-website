import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-slate-200 text-center pt-3 pb-1">
      <h6>Site Map</h6>
      <div className="grid grid-cols-2 grid-rows-1">
        <ul className="justify-left">
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
            <Link href={"contact"}>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Seasons</Link>
          </li>
          <li>
            <Link href={"/wheel-to-wheel/teams"}>Teams</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Account</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin Page</Link>
          </li>
        </ul>
      </div>
      <p className="text-sm">&copy; 2024 Rivals Webpage</p>
    </footer>
  );
}
