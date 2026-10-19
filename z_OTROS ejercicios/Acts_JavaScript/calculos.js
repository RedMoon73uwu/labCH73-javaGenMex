// calculos.js funciona para TiendaApol.js
export function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}

export function calcularIVA(subtotal) {
  return subtotal * 0.16;
}