import { loadStripe } from "@stripe/stripe-js";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { IProduct } from "../../Interfaces/Product";
import { API_URL } from "../../Utils/API";
import { BGtoColor } from "../../Utils/Colors";
import { OptionTypeToTitle } from "../../Utils/TypeToText";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface Props {
  product: IProduct;
}

function ConfirmPurchase({ product }: Props) {
  const { id, options } = useRouter().query;
  const [selectedOptions, setOptions] = useState<
    { index: number; text?: string }[]
  >([]);

  useEffect(() => {
    setOptions(JSON.parse(options?.toString() || ""));
  }, []);

  const submitPayment = async () => {
    const url = `/api/stripe/stripe`;
    const data = JSON.stringify({
      name: product.name,
      options: JSON.parse(options?.toString() || ""),
      id: product.id,
    });
    const result = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
      },
    });
    window.location.href = (await result.json()).url;
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-full md:w-4/5 xl:w-1/3 flex justify-center items-center flex-col gap-5 ">
        <h1 className="text-center font-mono text-orange-500 text-5xl font-extrabold">
          Stämmer detta?
        </h1>
        <table className="w-4/5 md:w-1/3 xl:w-2/4">
          {selectedOptions.length === product.options.length &&
            product.options.map((option, index) => {
              return (
                <>
                  <tr>
                    <td className="pr-10">
                      <h2 className="text-left font-mono font-extrabold text-3xl text-neutral-600">
                        {OptionTypeToTitle(option.type)}
                      </h2>
                    </td>
                    {option.type === "Color" ? (
                      <p className="text-left font-mono font-bold text-2xl text-neutral-400">
                        {BGtoColor(
                          option.options[selectedOptions[index].index].text
                        )}
                      </p>
                    ) : (
                      <p className="text-left font-mono font-bold text-2xl text-neutral-400">
                        {option.options[selectedOptions[index].index].text}
                      </p>
                    )}
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {option.options[selectedOptions[index].index]
                        .collectText && (
                        <p className="text-left font-mono font-bold text-2xl text-neutral-400">
                          {selectedOptions[index].text}
                        </p>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
        </table>
        <Button text="Genomför köp" onClick={submitPayment} />
        <Button text="Tillbaka" link={`/shop?id=${product.id}`} small />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<{
  product: IProduct;
}> = async (ctx) => {
  if (ctx.query.success) {
    return {
      redirect: {
        destination: `/completed?id=${ctx.query.success_id}`,
        permanent: true,
      },
    };
  }

  if (ctx.query.cancel) {
    return {
      redirect: {
        destination: "/error",
        permanent: true,
      },
    };
  }

  if (ctx.query.id === undefined || ctx.query.id.toString() !== ctx.query.id) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    `${API_URL}/api/products/get?id=${ctx.query.id?.toString() || ""}`
  );
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

export default ConfirmPurchase;
