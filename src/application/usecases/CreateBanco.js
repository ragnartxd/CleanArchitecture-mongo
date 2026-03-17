import Bank from "../../domain/entities/Banco.js";

export default class CreateBank {
  constructor(BankRepository) {
    this.BankRepository = BankRepository;
  }

  async execute({ nombre, pais }) {
    const bank = new Bank({ nombre, pais });
    return await this.BankRepository.save(bank);
  }
}