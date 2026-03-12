export default class GetAllCurrency {

    /* Obtiene el repositorio de monedas e inicializa la instancia */
    constructor(CurrencyRepository) {
    this.CurrencyRepository = CurrencyRepository;
        }
    async execute() {
    return await this.CurrencyRepository.findAll();
    }
}