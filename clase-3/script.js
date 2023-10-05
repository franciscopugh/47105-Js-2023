/*let fin = parseInt(prompt("Ingrese un numero para ver todos los pares hasta ese numero"))


/*
Si mi inicio nunca llega a mi fin, genero un ciclo infinito
for (let i = 0; i <= fin; i = i - 2) { Si ingreso 2, el ciclo hace 0, -2, -4, -6 y nunca a llega a 2
    console.log(i)
}

for (let i = 1; i <= fin; i = i + 2) { //Las variables suelen ser i, j o k
    console.log(i)
}

/*
    i       i<=5     i = i +1
    1       V           2
    2       V           3
    3       V           4
    4       V           5
    5       V           6
    6       F



let ejecucionWhile = true
let contador = 0

//El while primero consulta por la condicion luego ejecuta
while (ejecucionWhile == true) { //es lo mismo que while(ejecucionWhile)

    let numero = parseInt(prompt("Ingrese un numero par"))

    if (numero % 2 == 0) {
        alert("Gracias por ingresar un numero par")
        ejecucionWhile = false //Si numero es impar no entra al if por que me daria false el if
    } else {
        contador++ // esto es equivalente a contador += 1 o a contador = contador + 1
        if (contador >= 5) {
            alert("Flaco, ingresame el numero par o te envio un trabajo de devOps")
        } else {
            alert("Por favor ingresame un numero par")
        }

    }
}


let usuarioInvalido = true
let contador = 0
while (usuarioInvalido) {
    let contraseña = prompt("Ingrese la contraseña asociada a la cuenta")

    if (contraseña == "coderhouse") { //supongamos que esto lo consulto de la BDD
        usuarioInvalido = false
    } else {
        contador++
        alert("Contraseña no valida")
        if (contador == 3) { //Corto el ciclo de ejecucion
            alert("Llegaste al maximo de intentos")
            break //El break se utiliza para ERRORES
        }
    }
}

if (usuarioInvalido == true) {
    alert("Usuario bloqueado")
} else {
    alert("Bienvenido/a")
}
*/

let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let operacion = prompt("Ingrese la operacion (+,-,*,/)")
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))


switch (operacion) {
    case "+":
        alert("El resultado de la suma es: " + (numero1 + numero2))
        break
    case "*":
        alert("El resultado de la multiplicacion es: " + (numero1 * numero2))
        break
    case "/":
        alert("El resultado de la division es: " + (numero1 / numero2))
        break
    case "-":
        alert("El resultado de la resta es: " + (numero1 - numero2))
        break
    default:
        alert("La operacion ingresada no es valida")
        break
}
