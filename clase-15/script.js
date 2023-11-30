/*setInterval(() => {
    setTimeout(() => {
        console.log("Datos de clientes")
    }, 4000)
}, 5000)
*/

const productos = [
    { id: 1, precio: 100, stock: 20, nombre: "Papas" },
    { id: 2, precio: 1200, stock: 10, nombre: "Lentejas" },
    { id: 3, precio: 300, stock: 30, nombre: "Porotos" },
    { id: 4, precio: 500, stock: 10, nombre: "Leche" },
]

const consultarProductos = (permisos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (permisos) {
                resolve(productos)
            } else {
                reject("No cuenta con los permisos necesarios")
            }
        }, 3000)


    })
}

consultarProductos(false)
    .then((valores) => console.log(valores))
    .catch((error) => console.log(error))
    .finally(() => console.log("Me ejecuto independientemente del resultado"))
