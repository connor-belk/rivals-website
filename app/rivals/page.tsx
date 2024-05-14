import CurrentChallenge from "@/components/rivals-page/CurrentChallenge";
import LastWeekWinner from "@/components/rivals-page/LastWeekWinner";
import PreviousResults from "@/components/rivals-page/PreviousResults";
// import PreviousResults from "@/components/rivals-page/PreviousResults";

export default function RivalsPage() {
  return (
    <div>
      <h1 className="text-5xl text-slate-200 font-extrabold tracking-wider text-center my-2">
        Rivals
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border border-slate-300/40 w-[90%]"></div>
      </div>
      <div className="md:grid grid-cols-3 grid-rows-1">
        <div className="col-span-2">
          <CurrentChallenge />
        </div>

        <LastWeekWinner />
      </div>
      <h2 className="text-3xl text-white font-bold tracking-wider text-center my-2">
        Previous Results
      </h2>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="border border-slate-300/40 w-[90%]"></div>
      </div>

      <PreviousResults />
    </div>
  );
}
