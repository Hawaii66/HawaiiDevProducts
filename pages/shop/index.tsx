import { GetServerSideProps } from "next";
import React from "react";
import Product from "../../Components/Product/Product";
import { IProduct } from "../../Interfaces/Product";
import { API_URL } from "../../Utils/API";

interface Props {
  product: IProduct;
}

function ProductPage({ product }: Props) {
  return <Product product={product} />;
}

export const getServerSideProps: GetServerSideProps<{
  product: IProduct;
}> = async (ctx) => {
  if (ctx.query.id === undefined || ctx.query.id.toString() !== ctx.query.id) {
    return {
      redirect: {
        destination: "/shop?id=0",
        permanent: true,
      },
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

export default ProductPage;
