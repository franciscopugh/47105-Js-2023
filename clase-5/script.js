/*//Un objeto se compone de atributos clave-valor
const alumno = {
    nombre: "Pepe",
    apellido: "Perez",
    email: "pepe@pepe.com",
    password: "pepe123",
    dni: 123123
}

alumno.apellido = "Martinez"
console.log(alumno.apellido.toLowerCase())
parseFloat()
//alumno = null

//Los objetos en JS se crean con constantes


class Producto {
    constructor(code, nombre, categoria, precio, stock) {
        this.code = code //Estoy definiendo que mi propiedad code sea igual al code que llegue como parametro
        this.nombre = nombre
        this.categoria = categoria
        this.precio = precio
        this.stock = stock
    }

    aumentarPrecio(porcentajeAumento) { //Por ejemplo 1.3
        const precioRedondeado = Math.ceil(this.precio *= porcentajeAumento) //this.precio = this.precio * porcentajeAumento
        this.precio = precioRedondeado
    }

    aumentarStock(cantidadProductos) {
        this.stock += cantidadProductos
    }
}

const producto1 = new Producto("A123", "Arroz", "Legumbre", 450, 20) //Estoy generando una nueva instancia de la clase Producto


producto1.aumentarPrecio(1.3123213)

producto1.aumentarStock(20)

console.log(producto1)

*/

class Animal {
    constructor(nombre, nombreCientifico, habitat) {
        this.nombre = nombre
        this.nombreCientifico = nombreCientifico
        this.habitat = habitat
    }

    duerme() {
        console.log("Estoy durmiendo")
    }

    comiendo() {
        console.log("Estoy comiendo")
    }
}

class Mamifero extends Animal { //Mamifero va a ser una extension de la clase Animal (La clase Animal es la clase Padre de la clase Mamifero)
    constructor(colorPelaje, nombre, nombreCientifico, habitat) {
        super(nombre, nombreCientifico, habitat) //super es superclass y es llamar a la clase padre
        this.colorPelaje = colorPelaje
    }

    amamantar() {
        console.log("Estoy amamantando")
    }
}

class Reptil extends Animal {
    constructor(esVenonoso, nombre, nombreCientifico, habitat) {
        super(nombre, nombreCientifico, habitat)
        this.esVenonoso = esVenonoso

    }

    ponerHuevos() {
        console.log("Pongo huevos")
    }
}

const mamifero1 = new Mamifero("Marron", "Lobo", "Lobitus", "Bosque")
const reptil1 = new Reptil("No", "Cocodrilo", "Cocitus", "Pantano")

reptil1.duerme()
mamifero1.comiendo()
console.log(mamifero1)
console.log(reptil1)
