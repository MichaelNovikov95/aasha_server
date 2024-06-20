import { Schema, model } from "mongoose";

const STATUS = ["Pending", "fulfilled", "Canceled"];

const OrderModel = new Schema({
  email: { type: String, required: true },
  country: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  address: { type: String, required: true },
  appartment: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postal_code: { type: Number, required: true },
  products: { type: Object, required: true },
  payment_status: { type: STATUS, required: true, default: STATUS[1] },
});

export const Order = model("Order", OrderModel);
