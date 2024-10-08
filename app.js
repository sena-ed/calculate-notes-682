// ckconst username = document.getElementById('name')
const firstNote = document.getElementById('note1')
const secondNote = document.getElementById('note2')
const thirdNote = document.getElementById('note3')
const calculateBtn = document.getElementById('btn-calculate')
const predictBtn = document.getElementById('predict-note-btn')
const response = document.getElementById('result')

calculateBtn.addEventListener('click', calculateNotes) 

function calculateNotes(event) {

    event.preventDefault()

    let name = username.value
    let note1 = Number(firstNote.value)
    let note2 = Number(secondNote.value) //'Number' nos ayuda a transformar el valor agregado (en caso de ser string) a un valor numerico
    let note3 = Number(thirdNote.value) //'value' es para capturar los valores del input

    let resultNote = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)
    response.textContent = `Mr./Mrs ${name}, your definitive note is: ${resultNote}`
}