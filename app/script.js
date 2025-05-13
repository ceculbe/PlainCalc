let display = "0";
let numA = 0;
let numB = 0;
let operation = "";
document.getElementById("display").innerHTML = display;


function addDigit(digit) {
  if (display == "0" || display == "+" || display == "–" || display == "×" || display == "÷") {
    display = "" + digit;
  } else {
    display = display + "" + digit;
  }
  document.getElementById("display").innerHTML = display;
}

function clr() {
  display = "0";
  numA = 0;
  numB = 0;
  operation = "";
  document.getElementById("display").innerHTML = display;
}

function addDecimal() {
  if (display.includes(".")) {
    // do nothing
  } else {
    display += ".";
    document.getElementById("display").innerHTML = display;
  }
}

function backspace() {
  display = display.substring(0,display.length-1);
  if (display.length == 0) display = "0";
  document.getElementById("display").innerHTML = display;
}

function plusminus() {
  if (display.includes("-")){
    display = display.substring(1);
  } else {
    display = "-" + display;
  }
  document.getElementById("display").innerHTML = display;
}

function percent(){
  let num = parseFloat(display) / 100;
  display = "" + num;
  document.getElementById("display").innerHTML = display;
}

function addOp(op){
  if (operation == ""){
    operation = op;
    numA = parseFloat(display);
    display = op;
    document.getElementById("display").innerHTML = display;
  }
}

function solve(){
  numB = parseFloat(display);
  if (operation == "+") display = numA + numB + "";
  if (operation == "–") display = numA - numB + "";
  if (operation == "×") display = numA * numB + "";
  if (operation == "÷") display = numA / numB + "";
  document.getElementById("display").innerHTML = display;
  operation = "";
}






















