import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import StoreFront, { Props } from "../Components/StoreFront";
import { IProduct } from "../Interfaces/Product";
import { API_URL } from "../Utils/API";

export default function Home({ product }: Props) {
  return (
    <>
      <Head>
        <title>HawaiiDev</title>
      </Head>
      <section
        style={{
          backgroundImage: `url(../background.svg)`,
        }}
        className="bg-cover bg-center flex flex-col w-full h-screen justify-center items-center"
      >
        <h1 className="text-center font-mono tracking-wider text-orange-500 text-5xl sm:text-7xl lg:text-9xl font-extrabold m-3">
          HawaiiDev
        </h1>
        <h3 className="text-center font-mono tracking-wider text-green-600 text-xl sm:text-3xl lg:text-5xl font-bold">
          Förenkla ditt liv
        </h3>
      </section>
      <div
        className="bg-cover bg-center "
        style={{
          backgroundImage: `url(../transition.svg)`,
          width: "100%",
          aspectRatio: "1920/600",
        }}
      />
      <StoreFront product={product} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  product: IProduct;
}> = async () => {
  const res = await fetch(`${API_URL}/api/products/promoted`);
  const json = await res.json();

  if (json === null) {
    return {
      redirect: {
        destination: "/shop",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product: json,
    },
  };
};
