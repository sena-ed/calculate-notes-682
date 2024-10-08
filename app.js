const userName = document.getElementById('name')
const data1 = document.getElementById('nota1')
const data2 = document.getElementById('nota2')
const data3 = document.getElementById('nota3')
const result = document.getElementById('result')


const btnCalculate = document.getElementById('btn-calculate')
const btnPreview = document.getElementById('button')


btnCalculate.addEventListener('click', calculeNoted) 



function calculeNoted(event) {

    event.preventDefault()

    let name = userName.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)

    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)
    
    response.textContent = `Señor@ ${name}, su nota deifinita es: ${result}`
}