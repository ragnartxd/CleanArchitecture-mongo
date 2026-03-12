import CurrencyRepository from "../../domain/repositories/MonedaRepository.js";
import CurrencyModel      from "../database/models/MonedaModel.js";

export default class MongoCurrencyRepository extends CurrencyRepository {
  async save(currency) {
    const doc = await CurrencyModel.findOneAndUpdate(
      { code: currency.code },
      { code: currency.code, cambio: currency.cambio },
      { upsert: true, new: true }
    );
    return doc;
  }

  async findAll() {
    return await CurrencyModel.find();
  }

  async findByCode(code) {
    return await CurrencyModel.findOne({ code }) ?? null;
  }

  async delete(code) {
    const result = await CurrencyModel.findOneAndDelete({ code });
    if (!result) throw new Error(`Currency with code "${code}" not found`);
  }
}