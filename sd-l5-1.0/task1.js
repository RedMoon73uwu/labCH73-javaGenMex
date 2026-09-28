export function costCalculator(pagoE, interes, tarifa) {
    
    tarifa = 3;
    interes = pagoE * 0.01;
    return pagoE + tarifa + interes;

}
//import {PromptSync} from "prompt-sync";
import pkg from 'prompt-sync';
const {PromptSync} = pkg;

//var subtotal = PromptSync("Ingresa una cantidad ");
const total = costCalculator ( PromptSync("Ingresa una cantidad "));

/* con esto comprobe que funciona.
const total = costCalculator (100)
console.log (total)
*/