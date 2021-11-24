let firstNumber;
let secondNumber;
let operator;
let result;
let resultArray = [];
let historyString;

function add(){
    operator ="+";
    firstNumber = parseInt(document.querySelector("#firstNumber").value);
    secondNumber = parseInt(document.querySelector("#secondNumber").value);
    result = firstNumber + secondNumber;
    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
    
}
function sub(){
    operator = "-"
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;
    result = firstNumber - secondNumber;

    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
}
function mult(){
    operator= "*"
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;
    result = firstNumber * secondNumber;
    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
}
function div(){
    operator="/";
    firstNumber = document.querySelector("#firstNumber").value;
    secondNumber = document.querySelector("#secondNumber").value;
    if(secondNumber == 0){
        alert("Kan inte dividera med noll, skriv ett annat andra tal!")
        return;
    }
    result = firstNumber / secondNumber;

    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
}
function printHistory(){
    document.querySelector("p").innerText = "";
    for(i=0; i < resultArray.length;i++){
        document.querySelector("p").innerText += resultArray[i].num1 + " " + resultArray[i].op + " " +
         resultArray[i].num2 + " = " + resultArray[i].answer +"\n";
    }
}