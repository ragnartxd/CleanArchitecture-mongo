import MongoProductRepository from "../repositories/MongoProductRepository.js";
import CreateCurrency from "../../application/usecases/CreateMoneda.js";
import GetAllCurrency from "../../application/usecases/GetAllMoneda.js";
import CurrencyController from "../controllers/MonedaController.js";

// 1. Repositorio
const repository = new MongoProductRepository();

// 2. Casos de uso
const createCurrency = new CreateCurrency(repository);
const getAllCurrencies = new GetAllCurrency(repository);

// 3. Controlador
const currencyController = new CurrencyController({
  createCurrency,
  getAllCurrencies,
});

export { currencyController };
