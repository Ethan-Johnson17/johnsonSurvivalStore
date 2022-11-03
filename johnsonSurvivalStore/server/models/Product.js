import { Schema } from "mongoose";

export const ProductSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: String, reqired: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true }, 
  imgUrl: { type: String, required: true}
}, { timestamps: true, toJSON: { virtuals: true } })