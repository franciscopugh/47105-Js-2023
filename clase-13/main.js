/*const persona1 = {
    nombre: "Pepe",
    apellido: "Perez",
    edad: 30
}

//const persona2 = persona1 NO SE REALIZA ESTA OPERACION ya que se copia la referencia y no el valor
const persona2 = { ...persona1 }

//persona2.nombre = "Walter"

console.log(persona1)
console.log(persona2)

const persona1 = {
    nombre: "Pepe",
    apellido: "Perez",
    edad: 30,
    mascotas: [{ nombre: 'Copito de nieve' }, { nombre: 'Cual' }]
}

const persona2 = structuredClone(persona1) //Hacer copias de objetos profundos, o sea que tengas atributos de tipo objeto

persona2.nombre = 'Walter'
persona2.mascotas[0] = null

console.log(persona1)
console.log(persona2)*/

const temperaturas = [5, 10, 13, 20, 6, 12, 8]

console.log(...temperaturas)

//REST a los tipo objeto los desestructura, a los datos primitivos los estructura

//Desestructurando  con REST
console.log(Math.max(...temperaturas))
console.log(Math.min(...temperaturas))

//+ es para sumar y para concatener

//Estructurando con REST
const sumar = (...numeros) => { //Si envio unos datos simples, me los transforma en un array
    console.log(numeros)
    // console.log(numeros.reduce((pre, curr) => pre + curr, 0))
}

sumar(5, 10, 40, 20, 10)


const calculoTotalCarrito = (...totalCompra) => {
    console.log(totalCompra)
    return totalCompra.reduce((pre, curr) => pre + curr, 0)
}


console.log(calculoTotalCarrito(100, 200, 400))