import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HawaiiDev</title>
      </Head>
      <div
        style={{
          backgroundImage: `url(../background.svg)`,
        }}
        className="flex flex-col w-screen h-screen justify-center items-center"
      >
        <h1 className="text-center font-mono tracking-wider text-orange-500 text-9xl font-extrabold m-3">
          HawaiiDev
        </h1>
        <h3 className="text-center font-mono tracking-wider text-green-600 text-5xl font-bold">
          Stay Organised
        </h3>
      </div>
    </div>
  );
}
