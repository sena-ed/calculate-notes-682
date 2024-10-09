const userName = document.getElementById('name')
const data1 = document.getElementById('note1')
const data2 = document.getElementById('note2')
const data3 = document.getElementById('note3')
const result = document.getElementById('result')


const btnCalculate = document.getElementById('btn-calculate')
const buttonPredict = document.getElementById('buttonPredict')

if (btnCalculate) {
    btnCalculate.addEventListener('click', calculateNote);
}


if (buttonPredict) {
    buttonPredict.addEventListener('click', previewNote)
}


function previewNote(event) {
    event.preventDefault()

    let note1 = Number(data1.value)
    let note2 = Number(data2.value)

    if (note1 < 1 || note1 > 5 || note2 < 1 || note2 > 5 || note3 < 1) {
        result.textContent = "Por favor, ingrese valores válidos para las notas."
        return
    }


    let totalNote = 3.5

    let minNote = (totalNote - (note1 * 0.3) - (note2 * 0.3)) / 0.4;

    document.getElementById("note3").value = minNote.toFixed(2);
    document.getElementById("note3").classList.add("autocomplete");

}


function calculateNote(event) {
    event.preventDefault()

    let name = userName.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)



    if (!name || !/^[A-Za-z]+$/.test(name)) {
        result.textContent = "Por favor, ingrese un nombre valido."
        return
    }


    if (note1 < 1 || note1 > 5 || note2 < 1 || note2 > 5 || note3 < 1 || note3 > 5) {
        result.textContent = "Por favor, ingrese valores válidos para las notas."
        return
    }

    let finalResult = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)

    if (finalResult < 3.5) {
        result.textContent = `Señor@ ${name}, su nota definitiva es: ${finalResult}, perdio la materia `

    } else if (finalResult >= 3.5 && finalResult <= 4.5) {
        result.textContent = `Señor@ ${name}, su nota definitiva es: ${finalResult}`
        result.style.color = "orange"

    } else {
        result.textContent = `Señor@ ${name}, su nota definitiva es: ${finalResult}, es sobresaliente`
        result.style.color = "green"
    }




}