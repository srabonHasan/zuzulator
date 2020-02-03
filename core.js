let a = 0;
let b = 0;
let op = "";
let inputNumber = document.getElementById("inputNumber");

function cls() {
  inputNumber.value = "0";
}
function getNumber(a) {
  number = inputNumber.value;

  if (number == "0") {
    inputNumber.value = a;
  } else {
    inputNumber.value = number + a;
  }
}

function operation(t) {
  a = inputNumber.value;
  op = t;
  cls();
  return a, op;
}
function calculate() {

  a = parseInt(a, 10);
  b = inputNumber.value;
  b = parseInt(b, 10);
  
  switch (op) {
    case "+":
      inputNumber.value = a + b;
      break;
    case "-":
      inputNumber.value = a - b;
      break;
    case "d":
      inputNumber.value = Math.round(a / b, 2);
      break;
    case "*":
      inputNumber.value = a * b;
      break;
  }
}
