const API_KEY = "";
let city = "Cordoba"
let state = "Cordoba"
let country = "A"


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${API_KEY}`)
    .then(response => response.json())
    .then(datos => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${datos[0].lat}&lon=${datos[0].lon}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(datos => {
                console.log(datos)
            })
    })

/*fetch('https://criptoya.com/api/dolar')
    .then((response) => response.json()) //Transformo el contenido de la promesa a JSON
    .then(({ blue, ccl, mep, solidario }) => {
        console.log(blue)
        console.log(ccl)
        console.log(mep)
        console.log(solidario)
    })
*/

