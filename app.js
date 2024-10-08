const username = document.getElementById('nombre');
const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3')
const btn = document.getElementById('btn-calculate');
const boton = document.getElementById('btn-predecir');
const result = document.getElementById('resultado');

btn.addEventListener('click', calculateNote)

function calculateNote(event) {

    event.preventDefault()
    
    let name = username.value;
    let nota_1 = Number(nota1.value);
    let nota_2 = Number(nota2.value);
    let nota_3 = Number(nota3.value);
    let result = (nota_1 * 0.3) + (nota_2 * 0.3) + (nota_3 * 0.4);
    'Señor(a)(e), '+ name + ', su nota definitiva es: '+ result
    //esta estructura es mejor
    `Señor(a)(e), ${name} , su nota definitiva es: ${result}`

    // solamente aplica para input o textarea
    response.textContent = `Señor(a)(e), ${name} , su nota definitiva es: ${result}`
}