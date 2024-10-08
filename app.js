// const $ = (el) => document.querySelector(el);

const $name = document.getElementById('name');

const $data1 = document.getElementById('note1');
const $data2 = document.getElementById('note2');
const $data3 = document.getElementById('note3');

const $btnCalc = document.getElementById('btn-calculate');
const $btnPredict = document.getElementById('btn-predict');

const $calification = document.getElementById('result');

function printMessage(text, HTMLClass = '') {
    $calification.textContent = text;
    $calification.classList.add(HTMLClass);
};

function calculateFinalNote(e) {
    let notes = [$note1.value, $note2.value, $note3.value];
    notes.map((i) => Number(i))
    let finalNote = notes.reduce((i, count) => count + i);
    printMessage(finalNote);
};

$btnCalc.addEventListener('click', calculateFinalNote);
