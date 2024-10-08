
// Declaraciones de variables

// El document.getelementById trae todo el input
const username = document.getElementById('nombre');
const note_one = document.getElementById('nota1');
const note_two = document.getElementById('nota2');
const note_three = document.getElementById('nota3');
const btn_Calculate = document.getElementById('btn-calculate');
const btn_predict = document.getElementById('btn-predict')
const answer = document.getElementById('resultado')


// Crear evento
btn_Calculate.addEventListener('click', calculateNote )

// Funcion para calcular nota
function calculateNote(event){

    event.preventDefault()

    // El value para traer el valor 
    let name = username.value
    let note1 = Number(note_one.value)
    let note2 = Number(note_two.value)
    let note3 = Number(note_three.value)

    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)

    let mensaje = `Señor ${name}, su nota definitva es: ${result}`
    
    // Para mostrar un mensaje que no sea input o textarea
    answer.textContent = mensaje  


}