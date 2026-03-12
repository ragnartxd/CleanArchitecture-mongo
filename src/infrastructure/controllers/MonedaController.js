export default class CurrencyController {
  constructor({ createCurrency, getAllCurrencies }) {
    this.createCurrency = createCurrency;
    this.getAllCurrencies = getAllCurrencies;
  }

  async create(req, res) {
    try {
        // Ejecuta el caso de uso para crear una nueva moneda
        const currency = await this.createCurrency.execute(req.body);
        res.status(201).json(currency);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const currencies = await this.getAllCurrencies.execute();
      res.status(200).json(currencies);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
