/*const edades = [50, 24, 43, 22, 18, 70, 34]

const total = edades.reduce((prev, curr) => prev + curr, 0)

console.log(total / edades.length)


//Circunferencia de un circulo
const radio = parseFloat(prompt("Ingrese el radio del circulo"))

const circunferencia = 2 * Math.PI * radio

alert("La circunferencia del circulo es: " + circunferencia)

//Area del triangulo
/*
const base = parseFloat(prompt("Ingrese la base del triangulo"))
const altura = parseFloat(prompt("Ingrese la altura del triangulo"))

const area = (base * altura) / 2

alert("El area de un triangulo es: " + Math.area)

//Redondeo al entero mas cercano (5.99 redonde a 6)
const radio = 5

const circunferencia = 2 * Math.PI * radio

console.log("La circunferencia del circulo es: " + Math.round(circunferencia))

//Redondeo hacia abajo (5.99 redonde a 5) 
const radio = 6

const circunferencia = 2 * Math.PI * radio

console.log("La circunferencia del circulo es: " + Math.floor(circunferencia))



//Redondeo hacia arriba (5.1 redonde a 6) 

const radio = 5

const circunferencia = 2 * Math.PI * radio

console.log("La circunferencia del circulo es: " + (circunferencia))


const num = [5, 10, 40, 30, 20, 40, 22]
//... operador spreed que me permite a mi poder copiar los elementos del array
const numMaximo = Math.max(...num) //Math.max(5,10,40,30,20,40,22)
const numMinimo = Math.min(...num)//Math.min(5,10,40,30,20,40,22)

console.log(numMaximo)
console.log(numMinimo)

console.log(Math.sqrt(16)) //Raiz cuadrada
console.log(Math.cbrt(16)) //Raiz cubica


console.log(Math.round(Math.random() * 100)) //array.length para definir maximos

//Defino rangos en mis numeros
const min = 50
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//30-10-2023 -> 2023-10-30*/
let fecha = new Date()

let año = fecha.getFullYear()
let mes = (fecha.getMonth() + 1)
let diaMes = fecha.getDate() //Dia del mes. 1 a 31 

//let diaSemana = fecha.getDay() //Dia de la semana = 0 Domingo, 1 Lunes,... 6 Sabado
//yyyy-mm-dd
let fechaCompleta = año + '-' + mes + '-' + diaMes

if (new Date("02-29-2019") != 'Invalid Date') {
    console.log("Fecha valida")
} else {
    console.log("Fecha invalida")
}

function validarMayorEdad(fechaNacimiento) {

    let fechaActual = new Date()
    let dia = fechaActual.getDate()
    let mes = fechaActual.getMonth()
    let año = fechaActual.getFullYear()

    let diaNacimiento = fechaNacimiento.getDate()
    let mesNacimiento = fechaNacimiento.getMonth()
    let añoNacimiento = fechaNacimiento.getFullYear()

    let edad = año - añoNacimiento //Si es 2005 me da 18
    //25/12/2005            //31/10/2005
    if (mes < mesNacimiento || (mes === mesNacimiento && dia < diaNacimiento)) {
        edad-- //Si el calculo me da 18 pero todavia no cumplio años, le resto a 17
    }

    return edad >= 18 //True o false

}

console.log(validarMayorEdad(new Date("10-30-2005")))