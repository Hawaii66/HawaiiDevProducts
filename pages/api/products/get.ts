import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../Schemas/Products";
import { connect } from "../../../Utils/DBConnection";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  const { method } = req;

  if (method !== "GET") {
    res.status(400).end();
    return;
  }

  const productId = req.query.id;
  if (productId === undefined || productId.toString() !== productId) {
    res.status(401).send("Wrong product id, query = id");
    return;
  }

  await connect();

  const product = await Product.findOne({
    id: parseInt(productId),
  });

  res.status(200).json(product);
}
