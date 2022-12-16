import Link from "next/link";
import React from "react";
import Button from "../Components/Button";

function error() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="m-10 flex w-full h-1/3 flex-col items-center justify-evenly pt-">
        <h1 className="text-center font-mono text-orange-500 text-2xl sm:text-5xl lg:text-7xl font-bold mt-10">
          Något gick fel med köpet
        </h1>
        <p className="text-center font-mono text-green-600  sm:text-xl lg:text-3xl font-semibold mt-5">
          Försök igen nedan
        </p>
        <p className="text-slate-500 font-semibold font-mono w-11/12 sm:w-4/5 lg:w-1/2 xl:w-1/3 mt-10">
          Vi beklagar verkligen att det uppstod ett problem när du försökte
          genomföra ditt köp hos oss. Vi vill göra vårt yttersta för att lösa
          detta och hjälpa dig att genomföra ditt köp så snabbt och smidigt som
          möjligt.
        </p>
        <p className="text-slate-500 font-semibold font-mono w-11/12 sm:w-4/5 lg:w-1/2 xl:w-1/3 mt-10">
          Det kan finnas olika orsaker till att köpet avbröts eller att något
          gick fel. Det kan till exempel bero på tekniska problem med vår
          hemsida, eller att det fanns ett problem med den information du angav
          vid köpet. Oavsett orsaken vill vi hjälpa dig att försöka igen så att
          du kan genomföra ditt köp utan problem.
        </p>
        <p className="text-slate-500 font-semibold font-mono w-11/12 sm:w-4/5 lg:w-1/2 xl:w-1/3 my-10">
          Om du fortfarande önskar att genomföra ditt köp hos oss kan du försöka
          igen genom att följa stegen för att lägga en beställning. Kontrollera
          att du har angett all nödvändig information, inklusive din
          fakturerings- och leveransadress och betalningsuppgifter. Om du
          fortfarande har problem kan du kontakta oss{" "}
          <Link href={"mailto:hawaiidev@outlook.com"}>
            (hawaiidev@outlook.com)
          </Link>{" "}
          så hjälper vi dig att lösa det. Vi beklagar verkligen de besvär och
          den frustration som detta orsakat och hoppas att vi kan hjälpa dig att
          genomföra ditt köp så snart som möjligt.
        </p>
        <div className="w-5/6 flex justify-center items-center sm:w-2/3 lg:1/3">
          <Button link="/shop" text="Försök igen" />
        </div>
        <p className="text-center font-mono text-slate-800 font-bold m-5">
          Error med köp
        </p>
      </div>
    </div>
  );
}

export default error;
