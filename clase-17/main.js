//JSON BIN
const binID = '65711ae012a5d37659a427a1'
const apiKey = ''
const url = `https://api.jsonbin.io/v3/b/${binID}`
const headers = {
    'secret-key': apiKey
}


fetch(url, { headers })
    .then(response => response.json())
    .then(data => {
        console.log(data.record)
    })