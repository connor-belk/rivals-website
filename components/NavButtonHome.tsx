import Link from "next/link";

export default function NavButtonHome({
  title,
  navigation,
  image,
}: {
  navigation: string;
  title: string;
  image: string;
}) {
  return (
    <Link
      href={`/${navigation}`}
      prefetch={true}
      className="grow cursor-pointer hover:scale-105 transition-all duration-150"
    >
      <div className="relative bg-gradient-to-r from-blue-400 to-cyan-400 min-h-[15rem] my-4 mx-2 rounded-2xl items-center justify-center flex">
        <img
          src={image}
          alt={title}
          className="absolute z-0 object-cover overflow-hidden h-[100%] w-[100%] rounded-2xl"
        />
        <div className="bg-black opacity-50 absolute z-5 w-full h-full rounded-2xl " />
        <p className="z-10 items-center justify-center font-sans font-extrabold text-6xl text-white">
          {title}
        </p>
      </div>
    </Link>
  );
}
