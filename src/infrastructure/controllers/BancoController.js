export default class BankController {
  constructor({ createBank, getAllBank }) {
    this.createBank = createBank;
    this.getAllBank = getAllBank;
  }

  async create(req, res) {
    try {
      const banco = await this.createBank.execute(req.body);
      res.status(201).json(banco);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const bancos = await this.getAllBank.execute();
      res.status(200).json(bancos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}