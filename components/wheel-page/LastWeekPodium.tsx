export default function LastWeekPodium() {
  return (
    <div className="text-slate-200 h-[20vh] md:h-[40vh] m-2 bg-slate-500 rounded-3xl flex flex-col items-center justify-start">
      <h3 className="ml-2 mb-2 mt-5 text-3xl font-bold md:text-5xl text-center">
        Last Week&apos;s Podium
      </h3>
      <div className="grid grid-cols-3 grid-rows-1 gap-4 text-black items-center justify-center">
        <ul className="flex flex-col justify-center items-center bg-[#FFBF00] p-2 rounded-xl">
          <li className="font-bold text-xl">1st</li>
          <li>username</li>
          <li>time, car</li>
        </ul>
        <ul className="flex flex-col justify-center items-center bg-[#c0c0c0] p-2 rounded-xl">
          <li className="font-bold text-xl">2nd</li>
          <li>username</li>
          <li>time, car</li>
        </ul>
        <ul className="flex flex-col justify-center items-center bg-[#CD7F32] p-2 rounded-xl">
          <li className="font-bold text-xl">3rd</li>
          <li>username</li>
          <li>time, car</li>
        </ul>
      </div>
    </div>
  );
}
