//Catalogo de productos orientado a objetos

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
//pendiente para despues: crear un producto nuevo, agregar un metodo para cambiar disponibilidad y crear una extencion de la clase producto; maquillaje con propiedades de tono.