function suma(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}
function resta(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}
const multiplicacion = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}
const division = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if(num2 === 0){
        document.getElementById("resultado").value = "No se puede dividir por cero";
    } else {
        let resultado = num1 / num2;
        document.getElementById("resultado").value = resultado;
    }
}