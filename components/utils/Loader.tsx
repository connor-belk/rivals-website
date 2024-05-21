import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin h-[100px] w-[100px] rounded-full border-t-4 border-b-4"></div>
    </div>
  );
}
