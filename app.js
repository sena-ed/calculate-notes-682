//Declaracion de variables
const username = document.getElementById('name')
const note_one = document.getElementById('nota1')
const note_two = document.getElementById('nota2')
const note_thre = document.getElementById('nota3')
const button_calculate = document.getElementById('btn-calculate')
const button_predict = document.getElementById('btn-predict')
const response = document.getElementById('result')

//Eventos
button_calculate.addEventListener('click',calculateNote)
//Funcion de calcular nota
function calculateNote(event){

    event.preventDefault()

    let name = username.value //value para traer el valor
    let note1 = Number(note_one.value)
    let note2 = Number(note_two.value)
    let note3 = Number(note_thre.value)
    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4) //variable para calcular las notas
    //'señor(a)(e),'+ name +', su nota definitiva es: ' + result // dos formas de mostrar 
   // `señor(a)(e), ${name} , su nota definitiva es: ${result}`// buenas practicas
    response.textContent =  `señor(a)(e), ${name} , su nota definitiva es: ${result}`//Para mostrar un mensaje que no sea input o textarea


}
