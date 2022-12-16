import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../Interfaces/Product";
import { Product } from "../../../Schemas/Products";
import { connect } from "../../../Utils/DBConnection";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method !== "POST") {
    res.status(400).end();
    return;
  }

  await connect();

  const info = req.body;
  try {
    const product = new Product<IProduct>({
      id: (await Product.find()).length,
      information: info.information,
      name: info.name,
      options: info.options,
      price: info.price,
      thumbnail: info.thumbnail,
      images: info.images,
      video: info.video,
    });

    await product.save();
    res.json(product);
  } catch (error: any) {
    res.send(error.message);
    return;
  }
}
