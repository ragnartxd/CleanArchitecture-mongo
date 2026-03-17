export default class Bank {
  constructor({ nombre, pais }) {
    // Campo de texto (ej: "Banco de Bogotá", "Banco de América", "Banco Santander")
    this.nombre = String(nombre); 
    // Campo de texto (ej: "Colombia", "Estados Unidos", "España")
    this.pais = String(pais);
  }
}