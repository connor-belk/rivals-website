export default function CurrentChallenge() {
  return (
    <div className="text-slate-200 h-[30vh] md:h-[40vh] m-2 bg-slate-500 rounded-3xl relative">
      {/* <img src="#" alt="current challenge track/car hidden" />  */}
      <div className="absolute w-full h-full bg-black/50 rounded-3xl">
        <div className="w-full h-full flex flex-col justify-center items-center gap-2">
          <h3 className="text-4xl md:text-5xl font-bold">Current Challenge</h3>
          <p className="font-bold text-xl md:text-3xl">
            Circuit of Spa-Francorchamps
          </p>
          <p className="font-bold text-xl md:text-2xl">Porsche 924 in B</p>
          <p className="font-bold flex flex-col items-center justify-center md:text-2xl">
            Time Left:{" "}
            <span className="mt-5 font-thin text-4xl md:text-5xl bg-slate-800/80 px-8 md:px-10 py-2 rounded-full">
              04:12:34:03
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
