export default function LastWeekWinner() {
  return (
    <div className="text-slate-200 h-[18vh] md:h-[40vh] m-2 bg-slate-500 rounded-3xl flex flex-col items-center justify-center">
      <h3 className="ml-2 mb-2 text-3xl font-bold md:text-5xl text-center">
        Last Week&apos;s Winner
      </h3>
      <ul className="flex md:flex-col justify-center items-center w-full gap-4 mt-4">
        <div className="flex items-center justify-center gap-2">
          <li className="w-10 h-10 md:w-14 md:h-14 bg-slate-600 rounded-full"></li>
          <li className="text-2xl font-bold">NINJA goa1ie</li>
        </div>
        <li className="text-2xl">01:23.456</li>
        <li className="text-xl border px-2">PI: 721</li>
      </ul>
    </div>
  );
}
