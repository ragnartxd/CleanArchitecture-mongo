import BankRepository from "../../domain/repositories/BancoRepository.js";
import BankModel      from "../database/models/BancoModel.js";

export default class MongoBankRepository extends BankRepository {
  async save(bank) {
    const doc = await BankModel.findOneAndUpdate(
      { nombre: bank.nombre },
      { pais: bank.pais },
      { upsert: true, new: true }
    );
    return doc;
  }

  async findAll() {
    return await BankModel.find();
  }
}