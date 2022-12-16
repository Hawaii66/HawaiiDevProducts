import { NextApiRequest, NextApiResponse } from "next";
import { IProduct, SelectedOption } from "../../../Interfaces/Product";
import { Product } from "../../../Schemas/Products";
import { BGtoColor, TypeToText } from "../../../Utils/Colors";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const info: {
      name: string;
      id: number;
      options: {
        index: number;
        text?: string;
      }[];
    } = req.body;

    const product: IProduct | null = await Product.findOne({
      id: info.id,
    });

    if (product === null) {
      res.status(500).send("No product found");
      return;
    }

    const selections: SelectedOption[] = info.options.map((i, index) => {
      if (i.text !== undefined) {
        return {
          index: i.index,
          option: product.options[index],
          extraText: i.text,
        };
      }

      return {
        index: i.index,
        option: product.options[index],
      };
    });

    const getPrice = () => {
      var price = product.price;

      selections.map((selection) => {
        price += selection.option.options[selection.index].priceExtra;
      });

      return price;
    };

    var description = ``;
    selections.map((i) => {
      description += TypeToText(i.option.type);
      description += " ";
      if (i.option.type === "Color") {
        description += BGtoColor(i.option.options[i.index].text);
      } else {
        description += i.option.options[i.index].text;
      }
      if (i.extraText !== undefined) {
        description += " (";
        description += i.extraText;
        description += ")";
      }
      description += ", ";
    });

    try {
      const session = await stripe.checkout.sessions.create({
        billing_address_collection: "auto",
        shipping_address_collection: {
          allowed_countries: ["SE"],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: { amount: 0, currency: "sek" },
              display_name: "Free shipping",
              delivery_estimate: {
                minimum: { unit: "business_day", value: 2 },
                maximum: { unit: "business_day", value: 7 },
              },
              tax_behavior: "inclusive",
            },
          },
        ],
        phone_number_collection: {
          enabled: true,
        },
        line_items: [
          {
            price_data: {
              currency: "SEK",

              tax_behavior: "inclusive",
              product_data: {
                name: info.name,
                description: description,
              },
              unit_amount: getPrice() * 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/confirm?success=true&success_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/confirm?cancel=true`,
        automatic_tax: { enabled: true },
        currency: "SEK",
      });
      res.json({ url: session.url });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}
