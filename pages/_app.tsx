import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadWrapper from "../Components/HeadWrapper";
import Navbar from "../Components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className="bg-gray-100 min-h-screen"
      style={{
        maxWidth: "100vw",
      }}
    >
      <HeadWrapper />
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
