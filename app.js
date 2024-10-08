const username = document.getElementById("name");
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const btn_calculate = document.getElementById("btn-calculate");
const btn_predict = document.getElementById("tn_predict")
const result = document.getElementById("result");


btn_calculate.addEventListener('click',calculate)
 

function calculate (event){
    event.preventDefault()
    let name = username.value
    let note1End = Number(note1.value)
    let note2End = Number(note2.value)
    let note3End = Number(note3.value)
    let noteEnd = (note1End * 0.3) + (note2End * 0.3) + (note3End * 0.4)
    if (note1End < 3.5){
        result.textContent = `${name} su nota es ${noteEnd}`
    }
   
}
  
