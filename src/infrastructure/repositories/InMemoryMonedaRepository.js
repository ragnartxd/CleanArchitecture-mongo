import CurrencyRepository from "../../domain/repositories/MonedaRepository.js";

export default class InMemoryCurrencyRepository extends CurrencyRepository {
  constructor() {
    super();
    this.currencies = [];
  }

  async save(currency) {
    const index = this.currencies.findIndex(p => p.id === currency.id);

    if (index >= 0) {
      this.currencies[index] = currency;
    } else {
      this.currencies.push(currency);
    }

    return currency;
  }

  async findAll() {
    return this.currencies;
  }
}