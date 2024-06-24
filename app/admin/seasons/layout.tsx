import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function AdminPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link
        href={"/admin"}
        className="text-white flex gap-2 items-center border-b border-slate-300 py-2 px-4 hover:bg-slate-800 transition-all duration-150"
      >
        <IoIosArrowBack className="text-2xl" />
        <h1 className="">Back to Admin Dashboard</h1>
      </Link>
      {children}
    </>
  );
}
