const username = document.getElementById('name')
const data1 = document.getElementById('note1') 
const data2 = document.getElementById('note2')
const data3 = document.getElementById('note3')
const bntcalculate = document.getElementById('btn-calculate')
const resultnote = document.getElementById('resultado')

bntcalculate.addEventListener('click',calculatenote)






function calculatenote(event) {
 event.preventDefault()
 let name = username.value 
 let note1 = Number(data1.value)
 let note2 = Number(data2.value)
 let note3 = Number(data3.value)

 let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)

 resultnote.textContent = `Señor ${name} , su nota difinitiva es: ${result}`
 

}
