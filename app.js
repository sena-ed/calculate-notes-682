const username = document.getElementById("name");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const btn_calculate = document.getElementById("btn-calculate");
const btn_predict = document.getElementById("btn-predict")
const result = document.getElementById("result");


btn_calculate.addEventListener('click',calculate)
btn_predict.addEventListener('click',predict)

function calculate (event){
    event.preventDefault()
    let name = username.value
    let note1End = Number(note1.value)
    let note2End = Number(note2.value)
    let note3End = Number(note3.value)
    if (note1End >= 1 && note1End <= 5 && note2End >= 1 && note2End <= 5 && note3End >= 1 && note3End <= 5) {
        let noteEnd = (note1End * 0.3) + (note2End * 0.3) + (note3End * 0.4)
        if (noteEnd < 3.5) {
            result.textContent = `${name}, su nota es ${noteEnd.toFixed(2)}. Usted perdió la materia.`;
            result.style.cssText = 'background-color: black; color: white;';
        } else if (noteEnd >= 3.5 && noteEnd < 4.5) {
            result.textContent = `${name}, su nota es ${noteEnd.toFixed(2)}. Usted ganó la materia.`;
            result.style.cssText = 'background-color: orange; color: black;';
        } else if (noteEnd >= 4.5) {
            result.textContent = `${name}, su nota es ${noteEnd.toFixed(2)}. Usted ha sido sobresaliente en la materia.`;
            result.style.cssText = 'background-color: green; color: black;';
        }
    }else{
        alert("Las notas deben ser entre 1 y 5")
    }
}
function predict(event){
    event.preventDefault()
    let note1End = Number(note1.value)
    let note2End = Number(note2.value)
    if (note1End >= 1 && note1End <= 5 && note2End >= 1 && note2End <= 5){
        let predictnNote = (3.5-(note1End * 0.3) - (note2End * 0.3))/0.4
        note3.value = predictnNote
        console.log(predictnNote);
        
    }else{
        alert("Las notas deben ser entre 1 y 5")
    }


}
  
