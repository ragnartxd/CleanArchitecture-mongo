import { Schema, model } from "mongoose";

const BankSchema = new Schema({
  nombre: { type: String, required: true },
  pais:   { type: String, required: true },
});

export default model("Bank", BankSchema);