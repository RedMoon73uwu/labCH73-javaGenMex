import PromptSync from "prompt-sync";

export function costCalculator(pagoE, interes, tarifa) {
    return pagoE + tarifa + interes;

}
const subtotal = Number(PromptSync("Ingresa una cantidad "));
const total = costCalculator (subtotal, subtotal * 0.01, 3 );
console.log ("Total: $", total);