
/*
Numero par e impar

let numero = parseInt(prompt("Ingrese un numero"))//Entre parentesis va el mensaje
//Si ingresan un string no numerico, devuelvo NaN (Not a Number)

console.log(numero)
// operacion / es division, esto es % modulo (analizo el resto de la division entera)
if (numero % 2 == 0) { //Dentro del bloque de llaves escribo que es lo que sucede si se cumple la condicion
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}

let numero1 = parseFloat(prompt("Ingrese un numero para multiplicar por dos"))

console.log(numero1)

let nota = parseInt(prompt("Ingrese una nota"))

/*
    < menor
    <= menor o igual
    == igual
    >= mayor o igual (no es lo mismo que =>)
    > mayor


if (nota >= 1) {
    if (nota <= 5) { //Como el 1 ya se que es mi valor minimo, 5 va a ser mi maximo de desaprobado (1,2,3,4,5)
        console.log("Desaprobado");
    } else if (nota <= 7) { //Abarco el 6 y el 7
        console.log("Aprobado");
    } else if (nota <= 9) {
        console.log("Aprobado con nota de Muy Bien");
    } else if (nota == 10) {
        console.log("Aprobado con nota de Excelente");
    } else {
        console.log("Nota no valida"); //Me ingresan por ejemplo 11 o 12
    }
} else {
    console.log("Nota no valida"); //Me ingresan -1 por ejemplo
}

let numero1 = "5"
let numero2 = 5

//Caso de error comun, equivocarse igualdad con asignacion
if (numero1 = numero2) {
    console.log("V")
} else {
    console.log("F")
}

/*
    = asignacion
    == analizo el VALOR de las variables                igual
    === analizo el VALOR y el tipo de las variables     estricticamente igual


let numero = 0
//El cero representa una compuerta logica cerrada (digase, false), cualquier otro numero es true
if (numero) {
    console.log("V")
} else {
    console.log("F")
}*/


let nota = parseInt(prompt("Ingrese una nota"))


if (nota >= 1 && nota <= 10) {
    if (nota <= 5) { //Como el 1 ya se que es mi valor minimo, 5 va a ser mi maximo de desaprobado (1,2,3,4,5)
        console.log("Desaprobado");
    } else if (nota <= 7) { //Abarco el 6 y el 7
        console.log("Aprobado");
    } else if (nota <= 9) {
        console.log("Aprobado con nota de Muy Bien");
    } else {
        console.log("Aprobado con nota de Excelente");
    }
} else {
    console.log("Nota no valida"); //Me ingresan -1 por ejemplo
}


/*
    Operador AND (Operador Si)    
    p     &&    q
    V     V     V
    V     F     F
    F     F     V
    F     F     F

    Operador OR (Operador O)
    p     ||    q
    V     V     V
    V     V     F
    F     V     V
    F     F     F

*/