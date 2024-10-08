export function verifyNumber (arrayNumber) {
    for (let i = 0; i<arrayNumber.length; i++){
        if (!Number.isInteger(arrayNumber[i]) || arrayNumber[i] < 1 || Number > 5) {
            alert(`La Nota ${i + 1 } es un numero incorrecto`)
            return;
        }
    }
}