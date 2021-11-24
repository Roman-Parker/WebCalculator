let firstNumber;
let secondNumber;
let operator;
let result;
let resultArray = [];
let historyString;
let checkFirstnumber = false;
let checkSecondNumber = false;
let subCounter = 0;
let addCounter = 0;
let multCounter = 0;
let divCounter = 0;

function evaluateInput(){
    checkFirstnumber = checkForMarcus(document.querySelector("#firstNumber").value);
    checkSecondNumber = checkForMarcus(document.querySelector("#secondNumber").value);
    if(checkFirstnumber && checkSecondNumber){
        firstNumber = 42;
        secondNumber = 42;
    }
    else if(checkFirstnumber){
        firstNumber = 42;
        secondNumber = parseInt(document.querySelector("#secondNumber").value);
    }
    else if(checkSecondNumber){
        firstNumber = parseInt(document.querySelector("#firstNumber").value);
        secondNumber = 42;
    }
    else{
        firstNumber = parseInt(document.querySelector("#firstNumber").value);
        secondNumber = parseInt(document.querySelector("#secondNumber").value);
    }
}
function add(){
    operator ="+";
    evaluateInput();
    addCounter++;
    result = firstNumber + secondNumber;
    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
    updateStatistics();
}
function sub(){
    operator = "-"
    evaluateInput()
    subCounter++;
    result = firstNumber - secondNumber;

    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
    updateStatistics();
}
function mult(){
    operator= "*"
    multCounter++;
    evaluateInput()
    result = firstNumber * secondNumber;
    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
    updateStatistics();
}
function div(){
    operator="/";
    divCounter++;
    evaluateInput();
    if(secondNumber == 0){
        alert("Kan inte dividera med noll, skriv ett annat andra tal!")
        return;
    }
    result = firstNumber / secondNumber;

    resultArray.push({ num1: firstNumber , op: operator , num2: secondNumber , answer: " = " + result})
    printHistory();
    updateStatistics();
}
function printHistory(){
    document.querySelector("p").innerText = "";
    for(i=0; i < resultArray.length;i++){
        document.querySelector("p").innerText += resultArray[i].num1 + " " + resultArray[i].op + " " +
         resultArray[i].num2 + " = " + resultArray[i].answer +"\n";
    }
}
function checkForMarcus(input){
    if(input == "marcus"){
        return true;
    }
}
function updateStatistics(){
    /*
    for(i=0; i<resultArray.length; i++){
        switch(resultArray[i].op){
            case "+":
                addCounter++;
            case "-":
                subCounter++;
            case "*":
                multCounter++;
            case "/":
                divCounter++;
        }
    }*/
    document.querySelector("#addCounter").innerText = "Antalet additioner " + addCounter ;
    document.querySelector("#subCounter").innerText = "Antalet subtraktioner " + subCounter;
    document.querySelector("#multCounter").innerText = "Antalet multiplikationer " + multCounter;
    document.querySelector("#divCounter").innerText = "Antalet divisioner " + divCounter;
}
function calculate(operator){
    
}