import Link from "next/link";

export default function UnderContruction({ pageName }: { pageName?: string }) {
  return (
    <div className="text-white h-[600px] w-[80%] md:w-[50%] mx-auto flex flex-col items-center justify-center gap-7">
      <h2 className="text-4xl">{pageName}</h2>
      <p className="mx-auto text-center">
        We're Sorry. The {pageName} page is currently under construction. Please
        check back later!
      </p>
      <Link href="/" className="underline text-sm">
        Click here to go back to the home page
      </Link>
    </div>
  );
}
