//Declaracion de la funcion
/*function saludar() {
    let nombre = prompt("Ingrese su nombre")
    alert("Adios " + nombre)
}

//Llamado a la funcion
saludar()
saludar()
saludar()

const IVA = 1.21

function sumar(num1, num2) { //num1 y num2 parametros de mi funcion
    let resultado = num1 + num2
    console.log(num1)
    console.log(num2)
    console.log(resultado)
    console.log(IVA)
    IVA = 1.30
}

let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))

sumar(numero1, numero2)

console.log(IVA)
//Valores por defecto de los parametros

function calcularImpuestos(valorBase, impPais = 0.30, impGanancias = 0.45, impBP = 0.25) {
    let impuestos = valorBase * impPais + valorBase * impGanancias + valorBase * impBP
    alert("La suma de sus impuestos es: " + impuestos)
    return valorBase + impuestos
}

let confirmacion = true

do {
    let valorVideojuego = parseFloat(prompt("Ingrese el valor de su videojuego y le devolvere cuanto sale con impuestos"))

    let costoTotal = calcularImpuestos(valorVideojuego, 0.50, 0.45)
    alert("El costo total es " + costoTotal)

    let respuesta = prompt("¿Desea ingresar otro precio para calcular?")

    if (respuesta == 'no') {
        confirmacion = false
    }

} while (confirmacion == true)


//Funcion normal
function sumarNormal(num1, num2) {
    return num1 + num2
}

//Funcion anonima
const sumarAnonima = function (num1, num2) {
    return num1 + num2
}

//Funcion flecha (si es una sola linea de codigo, tiene un return implicito)
const sumarFlecha = (num1, num2) => num1 + num2


console.log(sumarNormal(5, 10))
console.log(sumarAnonima(5, 10))
console.log(sumarFlecha(5, 10))

*/
function validarRta(texto, textoValidar) {
    //.toLowerCase() pasa un texto a miniscula 
    if (texto.toLowerCase() == textoValidar) { //no == no
        return true
    }
    //Si el if es verdadero, devuelve true. Si es false (o sea, el texto no es igual), devuelvo Flase
    return false
}

let sigue = "si"//sigue = Si, SI, sI, si

do {
    //Primero declara la variable numero y luego le asigno el valor
    let numero
    //Ciclo para que solo me ingresen numeros validos
    do {
        //Variable que sea crea dentro de una funcion o un ciclo es de ambito local (variable local)
        numero = parseFloat(prompt("Ingrese un numero para verlo al cuadrado"))
        if (isNaN(numero) == true) {
            alert("Solo se permiten numeros validos")
        }
    } while (isNaN(numero) == true) //Si me ingresa un numero, numero no es NaN. Si me ingresa cualquier cosa, numero es NaN
    //isNaN() devuelve verdadero si el numero ingresado es NaN, falso si no lo es

    alert(numero ** 2) //** es potencia en js

    let rta = prompt("¿Desea ingresar otro numero")

    if (validarRta(rta, "no") == true) {
        sigue = "no"
    }


} while (sigue == "si")

