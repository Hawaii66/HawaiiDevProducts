import mongoose, { model, models, Schema } from "mongoose";
import { IOption, IProduct, OptionTypes } from "../Interfaces/Product";

const optionSchema = new Schema<IOption>({
  type: { type: String, required: true },
  options: [
    {
      text: String,
      priceExtra: Number,
    },
  ],
});

const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true, min: 0, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  information: { type: String, required: true },
  video: String,
  images: [String],
  thumbnail: { type: String, required: true },
  options: [optionSchema],
});

export const Product =
  models["Product"] || model<IProduct>("Product", productSchema);
