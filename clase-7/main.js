const IVA = 1.21

class Product {
    constructor(title, description, price, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.stock = stock
    }
}

const product1 = new Product("Televisor", "HD", 200000, 10)
const product2 = new Product("Aspiradora", "Limpia", 45000, 16)
const product3 = new Product("Notebook", "Grande", 600000, 6)
const product4 = new Product("Tablet", "Bonita", 45000, 23)
const product5 = new Product("Celular", "Para whatsapp", 130000, 22)

const products = [product1, product2, product3, product4, product5]

/*products.forEach((producto, indice, prods) => {
    producto.price *= IVA
    console.log(producto)
    console.log(indice)
    console.log(prods)
})

console.log(products.find(prod => prod.price === 45000 && prod.title === "Tablet")) //OJO con el simple igual por que siempre verdadero (No pongan =, pongan == o ===)

console.log(products.filter((prod) => prod.stock >= 50))*/

const numeros = products.map((prod) => prod.price)

const empleado1 = { nombre: "Francisco", apellido: "Pugh", sueldo: 40000, edad: 30, antiguedad: 1.05 }
const empleado2 = { nombre: "Pedro", apellido: "Perez", sueldo: 42000, edad: 21, antiguedad: 1.1 }
const empleado3 = { nombre: "Analia", apellido: "Alvarez", sueldo: 60000, edad: 43, antiguedad: 1.12 }
const empleado4 = { nombre: "Lucia", apellido: "Laspina", sueldo: 70000, edad: 37, antiguedad: 1.13 }

const empleados = [empleado1, empleado2, empleado3, empleado4]
/*
const sueldosEmpleados = empleados.map(empleado => ({ sueldo: Math.ceil(empleado.sueldo * empleado.antiguedad), nombre: empleado.nombre }))

console.log(sueldosEmpleados)
/*
let acum = 0

sueldos.forEach(sueldo => {
    acum += sueldo
})

console.log(acum)*/

//const sueldos = empleados.map(empleado => Math.ceil(empleado.sueldo * empleado.antiguedad))

//console.log(sueldos)

//console.log(sueldos.reduce((acum, num) => acum + num, 0))

//Numericos
//console.log(empleados.sort((emp1, emp2) => emp1.sueldo - emp2.sueldo)) //Menor a mayor
//console.log(empleados.sort((emp1, emp2) => emp2.sueldo - emp1.sueldo))

//Caracteres

console.log(empleados.sort((emp1, emp2) => {
    const nombre1 = emp1.nombre.toLowerCase()
    const nombre2 = emp2.nombre.toLowerCase()

    if (nombre1 < nombre2) { //Es menor
        return -1
    }

    if (nombre1 > nombre2) { //Es mayor
        return 1
    }

    return 0 //Son iguales
}))