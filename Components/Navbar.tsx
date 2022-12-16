import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Navbar() {
  const router = useRouter();
  return (
    <div className="fixed t-0 l-0 w-full flex flex-row justify-between px-2 sm:px-10 mt-2">
      {router.pathname !== "/" ? (
        <h1 className="text-orange-500 font-bold text-3xl">HawaiiDev</h1>
      ) : (
        <h1></h1>
      )}
      <nav className="flex flex-row justify-end gap-2 sm:gap-10">
        <Link className="text-slate-600 text-xl font-semibold" href={"/"}>
          Hem
        </Link>
        <Link className="text-slate-600 text-xl font-semibold" href={"/shop"}>
          Shop
        </Link>
        <Link className="text-slate-600 text-xl font-semibold" href={"/about"}>
          Om oss
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
