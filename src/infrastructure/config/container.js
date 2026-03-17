import MongoProductRepository from "../repositories/MongoProductRepository.js";
import CreateCurrency from "../../application/usecases/CreateMoneda.js";
import GetAllCurrency from "../../application/usecases/GetAllMoneda.js";
import CurrencyController from "../controllers/MonedaController.js";
import MongoBankRepository from "../repositories/MongoBancoRepository.js";
import CreateBank from "../../application/usecases/CreateBanco.js";
import GetAllBank from "../../application/usecases/GetAllBanco.js";
import BankController from "../controllers/BancoController.js";

// 1. Repositorio
const repository = new MongoProductRepository();
const bankRepository = new MongoBankRepository();

// 2. Casos de uso
const createCurrency = new CreateCurrency(repository);
const getAllCurrencies = new GetAllCurrency(repository);
//banco
const createBank = new CreateBank(bankRepository);
const getAllBanks = new GetAllBank(bankRepository);

// 3. Controlador
const currencyController = new CurrencyController({
  createCurrency,
  getAllCurrencies,
});
const bankController = new BankController({
  createBank,
  getAllBank: getAllBanks,
});

export { currencyController, bankController };
