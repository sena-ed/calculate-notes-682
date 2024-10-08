const $name = document.getElementById('name');

const $data1 = document.getElementById('note1');
const $data2 = document.getElementById('note2');
const $data3 = document.getElementById('note3');

const $btnCalc = document.getElementById('btn-calculate');
const $btnPredict = document.getElementById('btn-predict');

const $calification = document.getElementById('result');

function calculateFinalNote(event) {
    event.preventDefault()

    let name = $name.value;

    let note1 = Number($data1.value);
    let note2 = Number($data2.value);
    let note3 = Number($data3.value);
    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4);

    let message = `Señor/a ${name}, su nota definitiva es: ${result}`;
    $calification.textContent = message;
};

$btnCalc.addEventListener('click', calculateFinalNote);