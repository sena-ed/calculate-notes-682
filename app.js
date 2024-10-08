const userName = document.getElementById('name')
const data1 = document.getElementById('note1')
const data2 = document.getElementById('note2')
const data3 = document.getElementById('note3')
const result = document.getElementById('result')


const btnCalculate = document.getElementById('btn-calculate')
const btnPreview = document.getElementById('button')


btnCalculate.addEventListener('click', calculateNote) 

function calculateNote(event) {
    event.preventDefault()

    let name = userName.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)

    let finalResult = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)

    result.textContent = `Señor@ ${name}, su nota definitiva es: ${finalResult}`
}