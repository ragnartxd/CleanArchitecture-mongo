import { Schema, model } from "mongoose";

const CurrencySchema = new Schema({
  code:   { type: String, required: true, unique: true },
  cambio: { type: Number, required: true },
});

export default model("Currency", CurrencySchema);