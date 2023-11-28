/*Swal.fire({

    icon: "success",
    title: "Clase Js Coderhouse",
    text: "Utilizando mi primera libreria",
    footer: '<button><a><href="#">Click Aqui!</a><button>'
});

const botonAlerta = document.getElementById('botonAlerta')

botonAlerta.addEventListener('click', () => {
    Swal.fire({
        title: "¿Desea guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: 'No guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: "#7CFC00",
        cancelButtonColor: "#C0C0C0",
        denyButtonColor: '#FF4500'
    }).then((eleccionUser) => { //Capturo la eleccion de mi usuario
        if (eleccionUser.isConfirmed) {
            Swal.fire("Los cambios fueron guardados correctamente", "", "success");
        } else if (eleccionUser.isDenied) {
            Swal.fire("Los cambios no fueron guardados", "", "info");
        }
    });
})

const consultarResultados = async () => {
    const { value: resultado } = await Swal.fire({
        title: "¿Cuanto es la suma de 2 + 2?",
        input: "number",
        inputLabel: "Ingrese la respuesta"
    });

    if (resultado == 4) {
        //Title - Description - Icon
        Swal.fire(`Resultado correcto!`, "", "success");
    } else {
        Swal.fire(`Resultado incorrecto!`, "", "error");
    }
}

consultarResultados()

const botonAlerta = document.getElementById('botonAlerta')

botonAlerta.addEventListener('click', () => {
    Toastify({
        text: "Esto es una notificacion",
        duration: 3000, //Medida en ms
        //destination: "https://github.com/apvarun/toastify-js",  //Cuando doy click en la notificacion me lleva a esta direccion
        //newWindow: true, //Si doy click en la notificacion se abre una nueva pestaña
        close: true, //Aparezca un boton para eliminar la notificacion
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #1c92d2, #f2fcfe)",
            color: 'black'
        },
        onClick: function () { //Callback after click
            console.log("Hola!")
    */

//Obtener fecha actual
const fechaHoraActual = luxon.DateTime.now()
console.log(`La fecha y hora actuales son ${fechaHoraActual.toISO()}`)

//Crear una fecha

const fechaCreada = luxon.DateTime.fromObject({ year: 2022, month: 12, day: 18, hour: 18, minute: 0 })
console.log(fechaCreada)

//Fecha no valida
const fechaCreadaBisiesto = luxon.DateTime.fromObject({ year: 2022, month: 2, day: 29, hour: 18, minute: 0 })
console.log(fechaCreadaBisiesto)

//Diferencia entre fechas
const diferenciaFechas = fechaCreada.diff(fechaHoraActual, ['days', 'hours', 'minutes'])
console.log(diferenciaFechas.toObject())

//Suma de fechas
const sumaFecha = fechaCreada.plus({ days: 44, hours: 6 })
console.log(sumaFecha)