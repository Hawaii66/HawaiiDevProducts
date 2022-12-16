import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../Interfaces/Product";
import { Product } from "../../../Schemas/Products";
import { connect } from "../../../Utils/DBConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  const { method } = req;

  if (method !== "GET") {
    res.status(400).end();
    return;
  }

  await connect();

  const products = Product;

  const promoted = await products.findOne({});

  res.json(promoted);
}
