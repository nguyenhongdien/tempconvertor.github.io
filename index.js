const typeSlec = document.getElementById("typeSlec");
const typeSlec1 = document.getElementById("typeSlec1");
const typeSlec2 = document.getElementById("typeSlec2");
const num1Inp = document.getElementById("num1Inp");
const num2Inp = document.getElementById("num2Inp");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");

function reset(){
    num1Inp.value = "";
    num2Inp.value = "";
}

function convert(){
    if (num1Inp.value == ""){
        window.alert("You must enter a number!")
    }
    else
    {
        console.log(typeSlec.value);
        if (typeSlec.value == "Celcius to Fahrenheit"){
            cToF(num1Inp.value);
        } else {
            fToC(num1Inp.value);
        }
    }
    
}

function fToC(fah){
    fah = Number(fah);
    num2Inp.value = ((fah - 32) / 1.8).toFixed(2);
}

function cToF(cel){
    cel = Number(cel);
    num2Inp.value = (cel * 1.8 + 32).toFixed(2);
}

function changeType(){
    reset();
    if (typeSlec.value == "Celcius to Fahrenheit"){
        num1Inp.placeholder = "℃";
        num2Inp.placeholder = "℉";
    } else {
        num1Inp.placeholder = "℉";
        num2Inp.placeholder = "℃";
    }
}

function run(){
    typeSlec.addEventListener("change", changeType);
    convertBtn.addEventListener("click", convert);
    resetBtn.addEventListener("click", reset);
}

run();