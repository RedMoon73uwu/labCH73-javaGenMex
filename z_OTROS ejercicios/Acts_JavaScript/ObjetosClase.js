
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
mostrarInfo() {
    return this.nombre + " \ncuesta: $ " + this.precio + "\nDisponibilidad: " + this.disponible;
}
}

const labial = new Producto ("Labial", 150, true);
const base = new Producto ("Base", 250, false);
const rimmel = new Producto ("Rímel", 180, true);


console.log(labial.mostrarInfo());
console.log(base.mostrarInfo());
console.log(rimmel.mostrarInfo());