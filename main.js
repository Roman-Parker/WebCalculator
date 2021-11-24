let firstNumber;
let secondNumber;
let result;

function add(){
    firstNumber = parseInt(document.querySelector("#firstNumber").value);
    secondNumber = parseInt(document.querySelector("#secondNumber").value);
    result = firstNumber + secondNumber;

    document.querySelector("p").innerText = firstNumber + " + " + secondNumber + " = " + result;
}
function sub(){
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;
    result = firstNumber - secondNumber;

    document.querySelector("p").innerText = firstNumber + " - " + secondNumber + " = " + result;
}
function mult(){
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;
    result = firstNumber * secondNumber;

    document.querySelector("p").innerText = firstNumber + " * " + secondNumber + " = " + result;
}
function div(){
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;
    if(secondNumber == 0){
        alert("Kan inte dividera med noll, skriv ett annat andra tal!")
        return;
    }
    result = firstNumber / secondNumber;

    document.querySelector("p").innerText = firstNumber + " / " + secondNumber + " = " + result;
}