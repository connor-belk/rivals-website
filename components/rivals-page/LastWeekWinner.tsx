export default function LastWeekWinner() {
  return (
    <div className="text-slate-200 h-[15vh] md:h-[40vh] m-2 bg-slate-500 rounded-3xl flex flex-col items-center justify-center">
      <h3 className="ml-2 mb-2 text-3xl font-bold md:text-5xl text-center">
        Last Week&apos;s Winner
      </h3>
      <ul className="flex flex-col justify-center items-center">
        <li>profile pic</li>
        <li>username</li>
        <li>time, car, track, PI rating</li>
      </ul>
    </div>
  );
}
