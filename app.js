const username = document.getElementById('name')
const note1 = document.getElementById('data1')
const note2 = document.getElementById('data2')
const note3 = document.getElementById('data3')
const submit= document.getElementById('btncalculate')
const button = document.getElementById('button')
const resultado = document.getElementById('result')


btncalculate.addEventListener('click',calculeNoded)

function calculeNoded(event) {

    event.preventDefault()


    let name = username.value
    let data1 = Number(note1.value)
    let data2 = Number(note2.value)
    let data3 = Number(note3.value)

    let resultado =(data1 * 0.3) + (data2 * 0.3) + (data3 * 0.4)

    response.textContent =` Señor@ ${name}, su nota deifinita es: ${resultado}`

}