export default class GetAllBank {
    /* Obtener todos los bancos */
  constructor(bankRepository) {
    this.bankRepository = bankRepository;
  }

  async execute() {
    return await this.bankRepository.findAll();
  }
}