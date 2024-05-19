import PreviousResults from "@/components/rivals-page/PreviousResults";
import LastWeekPodium from "@/components/wheel-page/LastWeekPodium";
import UpcomingRace from "@/components/wheel-page/UpcomingRace";
import React from "react";

export default function WheelToWheelPage() {
  return (
    <div>
      <h1
        id="desktop-heading"
        className="hidden md:block text-5xl text-slate-200 font-extrabold tracking-wider text-center mt-2"
      >
        Wheel to Wheel
      </h1>

      <h1
        id="mobile-heading"
        className="md:hidden text-4xl text-slate-200 font-extrabold tracking-wider text-center mt-2"
      >
        Wheel to Wheel
      </h1>

      <div className="w-full flex flex-col justify-center items-center mt-4 mb-8">
        <div className="border border-slate-300/40 w-[90%]"></div>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-1">
        <div className="col-span-2 mb-8 md:mb-0">
          <UpcomingRace />
        </div>

        <LastWeekPodium />
      </div>

      <h2 className="text-3xl text-white font-bold tracking-wider text-center mb-2 mt-10">
        Previous Results
      </h2>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="border border-slate-300/40 w-[90%]"></div>
      </div>

      <div className="mx-10 mt-10">
        <PreviousResults />
      </div>
    </div>
  );
}
