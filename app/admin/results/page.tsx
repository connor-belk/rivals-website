import Link from "next/link";

const ResultsPage = () => {
  return (
    <div className="text-white">
      <h2 className="text-3xl text-center font-bold my-3">Results Page</h2>
      <ul className="flex flex-col gap-2 items-center justify-center my-3">
        <Link
          href={"/admin/results/rivals"}
          className="text-center text-xl px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-500 transition-all duration-150"
        >
          <li>Add Rivals Result</li>
        </Link>
        <Link
          href={"/admin/results/wheeltowheel"}
          className="text-center text-xl px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-500 transition-all duration-150"
        >
          <li>Add Wheel to Wheel Result</li>
        </Link>
      </ul>
    </div>
  );
};

export default ResultsPage;
