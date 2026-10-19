/* PEDIR DATOS SIN PROMPT:
Estructura base:

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('¿Cómo te llamas? ', nombre => {
  console.log(`Hola, ${nombre}`);
  readline.close(); // Es importante cerrar la interfaz
});

*/
//tambien puede funcionar de esta manera:
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("¿Cómo te llamas? ", nombre => {
readline.close(); 
 
console.log("Hola, " + nombre+". Que guapx estas ¿eh?");
});
//pequeña nota: esta estructura de código es para pedir datos al usuario sin usar prompt, ya que prompt no funciona en Node.js. 
// En su lugar, se utiliza el módulo readline para leer la entrada del usuario desde la consola.
//otra cosa a tener en cuenta es que esta estructura de codigo no funciona si se le añaden más líneas de código después del 
// console.log, ya que readline.close() cierra la interfaz y no permite más interacciones.