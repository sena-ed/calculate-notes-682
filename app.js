const username = document.getElementById('name');
const noteOne = document.getElementById('note1');
const noteTwo = document.getElementById('note2');
const noteThree = document.getElementById('note3');
const button = document.getElementById('btn-calculate');
const btnPredict = document.getElementById('btn-predict');
const response = document.getElementById('result');

button.addEventListener('click', calculateNote);

function calculateNote(event) {
    event.preventDefault(); 
    let name = username.value;
    let note1 = Number(noteOne.value);
    let note2 = Number(noteTwo.value);
    let note3 = Number(noteThree.value);

    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4); // Corrección: usa las variables correctas

    response.textContent = `Sr(a) ${name}, su nota definitiva es: ${result.toFixed(2)}`;  // Usamos toFixed(2) para mostrar dos decimales
}
