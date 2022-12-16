import React from "react";
import Button from "../Components/Button";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="m-10 flex w-full h-1/3 flex-col items-center justify-evenly pt-">
        <h1 className="text-center font-mono text-orange-500 text-2xl sm:text-5xl lg:text-7xl font-bold mt-10">
          Nu hittade du på något konstigt
        </h1>
        <p className="text-center font-mono text-green-600  sm:text-xl lg:text-3xl font-semibold m-5">
          Men vad spelar de för roll, hitta på något roligt
        </p>
        <div className="w-5/6 flex justify-center items-center sm:w-2/3 lg:1/3">
          <Button link="/" text="Start" />
        </div>
        <p className="text-center font-mono text-slate-800 font-bold m-5">
          Error 404
        </p>
      </div>
    </div>
  );
}

export default NotFound;
