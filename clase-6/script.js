/*const nombres = ["Jesus", "Jorge", "Luciana", "Francisco"]

/*for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

console.log(nombres)

//Agrega elemento al final del array
nombres.push("Pedro")

console.log(nombres)

nombres.pop()

console.log(nombres)

//Agrega elemento al principio del array
nombres.unshift("Tamara")
//T-a-m-a-r-a
//0-1-2-3-4-5

console.log(nombres)

nombres.shift()

console.log(nombres)

//Agrego un nuevo elemento dado un indice(elemento 1), cantidad de elementos a eliminar (0), elemento a agregar
nombres.splice(3, 0, "Ulises")
console.log(nombres)
//nombres.splice(3, 1) //Desde el indice 3, eliminame 1 elemento
//nombres.splice(0, nombres.length) //Me elimina todos mis elementos de mi array
console.log(nombres)

console.log(nombres.join('--'))

const movilidad = ["Bicicleta", "Monopatin", "Rollers"]
const electro = ["Heladera", "Freezer", "Mini-heladera"]
const tecno = ["Televisor", "Tablet"]
const promoMedioAmbiente = movilidad.concat(electro).concat(tecno) //La combinacion de dos arrays en uno


console.log(promoMedioAmbiente)

let producto = prompt("Ingrese el producto a buscar")

const indice = promoMedioAmbiente.indexOf(producto)
//Devuelve el indice del elemento si lo encuentra, si no lo encuentra devuelve -1
if (indice != -1) {
    console.log("El producto existe")
    console.log(promoMedioAmbiente[indice])
} else {
    console.log("Producto no existe")
}*/

class Product {
    constructor(titulo, descripcion, precio, stock) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Product("Arroz", "Rico", 220, 25)
const producto2 = new Product("Lentejas", "Ricas", 260, 30)
const producto3 = new Product("Garbanzos", "Excelentes", 340, 20)
const producto4 = new Product("Polenta", "Riquisima", 430, 20)

const productos = [producto1, producto2, producto3, producto4]

console.table(productos)