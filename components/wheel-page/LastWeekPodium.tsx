export default function LastWeekPodium() {
  return (
    <div className="hidden text-slate-200 h-[20vh] lg:h-[40vh] min-h-48 m-2 bg-slate-500 rounded-3xl lg:flex flex-col items-center justify-start">
      <h3 className="ml-2 mb-2 mt-5 text-3xl font-bold md:text-5xl text-center">
        Last Week&apos;s Podium
      </h3>
      <div className="grid grid-cols-3 grid-rows-1 lg:grid-cols-1 ld:grid-rows-3 gap-4 text-black items-center justify-center mt-6">
        <ul className="grid grid-cols-5 grid-rows-1 items-center justify-center gap-3 bg-[#FFBF00] p-2 rounded-xl">
          <li className="font-bold text-xl">1st</li>
          <li className="col-span-2 font-bold">NINJA goa1ie</li>
          <li className="col-span-2 font-bold">13:34.647</li>
        </ul>
        <ul className="grid grid-cols-5 grid-rows-1 items-center justify-center gap-3 bg-[#c0c0c0] p-2 rounded-xl">
          <li className="font-bold text-xl">2nd</li>
          <li className="col-span-2 font-bold">NINJA goa1ie</li>
          <li className="col-span-2 font-bold">13:34.647</li>
        </ul>
        <ul className="grid grid-cols-5 grid-rows-1 items-center justify-center gap-3 bg-[#CD7F32] p-2 rounded-xl">
          <li className="font-bold text-xl">3rd</li>
          <li className="col-span-2 font-bold">NINJA goa1ie</li>
          <li className="col-span-2 font-bold">13:34.647</li>
        </ul>
      </div>
    </div>
  );
}
