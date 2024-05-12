import Link from "next/link";

export default function NavButtonHome({
  title,
  navigation,
}: {
  navigation: string;
  title: string;
}) {
  return (
    <Link
      href={`/${navigation}`}
      className="grow cursor-pointer hover:scale-105 transition-all duration-150"
    >
      <div className="bg-gradient-to-r from-slate-400 to-blue-400 min-h-[15rem] my-4 mx-2 rounded-2xl items-center justify-center flex">
        <p className="items-center justify-center font-sans font-extrabold text-6xl text-white/90">
          {title}
        </p>
      </div>
    </Link>
  );
}
