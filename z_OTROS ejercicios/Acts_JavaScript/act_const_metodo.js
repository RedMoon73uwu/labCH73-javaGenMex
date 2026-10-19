
const contact = {
    "forename": "Ash",
    "surname": "Springs",
    "fullname": function() {
        return "Ash Springs"
    }
}

/* los parentesis () son necesarios para invocar la función fullname 
y obtener el valor de retorno. Si no se colocan los paréntesis, se 
obtiene la referencia a la función en lugar del valor de retorno.
*/
let ashSpringsFullName = contact.fullname();
console.log (ashSpringsFullName);

/* Otra forma de invocar la función fullname y obtener el valor de
 retorno es utilizando los paréntesis () al final de la llamada a 
 la función. Esto es necesario para que se ejecute la función y se 
 obtenga el valor de retorno.
*/
ashSpringsFullName = contact.fullname;
console.log(contact.fullname());
//funcionamiento de la clase math:
funcionamientoMath();
function funcionamientoMath() {
    const numeroRandom=Math.random();
    console.info(numeroRandom);
    console.info(Math.PI);
}

funcionString();
function funcionString(){
    let nombre = "Samira";
    //el toUpperCase() convierte todos los caracteres de la cadena a mayúsculas
    console.info(nombre.toUpperCase());
    for (let i=0; i<=nombre.length; i++){
        console.log(nombre.charAt(i));
    }
    console.info(nombre.substring(0,nombre.length));
let numero2=2343;
console.info(typeof numero2);
console.info(typeof numero2.toString());
numero2=numero2.toString();
console.info(typeof numero2);
console.error(numero2);

}