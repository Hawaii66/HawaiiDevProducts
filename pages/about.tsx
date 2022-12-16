import React from "react";

function about() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-4/5 md:w-1/2 xl:w-1/3 gap-5 flex flex-col">
        <h1 className="text-orange-500 font-bold text-center font-mono text-5xl">
          Om oss
        </h1>
        <p className="text-slate-500 font-semibold text-center font-mono text-2xl">
          Ano 2022
        </p>
        <p className="text-slate-600 text-left font-mono text-lg">
          HawaiiDev är ett företag som säljer små, användbara produkter som
          hjälper människor att organisera sin vardag.
        </p>
        <p className="text-slate-600 text-left font-mono text-lg">
          HawaiiDevs produkter är kända för sin höga kvalitet och
          användarvänlighet, och de har en lojal kundbas som uppskattar deras
          förmåga att göra vardagen enklare och mer organiserad.
        </p>
        <p className="text-slate-600 text-left font-mono text-lg">
          Företaget är stolta över att kunna erbjuda prisvärda produkter som kan
          göra en stor skillnad i människors vardag.
        </p>
        <p className="text-slate-600 text-left font-mono text-lg">
          - HawaiiDev hawaiidev@outlook.com
        </p>
      </div>
    </div>
  );
}

export default about;
