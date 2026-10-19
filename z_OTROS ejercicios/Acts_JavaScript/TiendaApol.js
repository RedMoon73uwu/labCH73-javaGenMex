// main.js
import { calcularSubtotal, calcularIVA } from "./calculos.js";
import { formatearMoneda } from "./formato.js";

function mostrarResumen(producto, total) {
  console.log(`${producto}: ${formatearMoneda(total)}`);
}

const subtotal = calcularSubtotal(100, 3);
const total = subtotal + calcularIVA(subtotal);
mostrarResumen("Apol Watch", total);


//100x3=300 x  0.16 = 48
//48 + 300= 348