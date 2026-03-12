import Currency from "../../domain/entities/Moneda.js";

export default class CreateCurrency {
  constructor(CurrencyRepository) {
    this.CurrencyRepository = CurrencyRepository;
  }

  async execute({ code, cambio }) {
    const currency = new Currency({ code, cambio });
    return await this.CurrencyRepository.save(currency);
  }
}