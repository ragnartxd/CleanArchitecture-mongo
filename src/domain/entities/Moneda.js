export default class Currency {
  constructor({ code, cambio }) {
    // Campo de texto (ej: "USD", "COP", "EUR")
    this.code = String(code); 
    
    // Campo numérico (ej: 1.0, 2.500, 0.92)
    this.cambio = Number(cambio);
  }
}
