
function producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    this.mostrarInfo = function(){
        return this.nombre + "cuesta $ " + this.precio;
    };
}

const producto1 = new producto("Labial", 150);
const producto2 = new producto("Base", 250);
const producto3 = new producto("Rímel", 180);

console.log(producto1.mostrarInfo());
console.log(producto2.mostrarInfo());
console.log(producto3.mostrarInfo());