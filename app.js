const nameUser = document.getElementById('name')
const firstNote = document.getElementById('note1')
const secondNote = document.getElementById('note2')
const thirdNote = document.getElementById('note3')
const btnCalculate = document.getElementById('btn-calculate')
const result = document.getElementById('result')
const notePredic = document.getElementById('notePredict')


// let resultAprove = ''
// if (resultNote >= 3.5 || resultNote < 5) {
//     resultAprove = 'Pass'
// }else if (resultNote <= 3.4 || resultNote >= 0){
//     resultAprove = 'Reapprove'
// }


btnCalculate.addEventListener('click', showResult)


function showResult(event) {
    event.preventDefault()
    let name = nameUser.value
    let resultNote = (Number(firstNote.value) * 0.3) + (Number(secondNote.value) * 0.3) + (Number(thirdNote.value) * 0.4)
    result.textContent = `${name} your note is ${resultNote}`
// result.textContent = `${name} your note is ${resultNote}: your are: ${resultAprove}` 
}