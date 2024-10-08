
const username= document.getElementById('name')
const data1= document.getElementById('note1')
const data2= document.getElementById('note2')
const data3= document.getElementById('note3')
const btncalculate= document.getElementById('btn-calculate')
const btnPredict= document.getElementById('btn-predict')
const response= document.getElementById('result')

btncalculate.addEventListener('click',calculateNote)

function calculateNote(event) {

event.preventDefault()
let name= username.value
let note1= Number(data1.value)
let note2= Number(data2.value)
let note3= Number(data3.value)

let result= (note1*0.3)+(note2*0.3)+(note3*0.4)

//'señor(a)(e), '+name+', su nota definitiva es:'+ result

response.textContent = `Señor(a)(e), ${name}, su nota definitiva es: ${result}`



}

