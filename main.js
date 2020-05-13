let ersteZahl = 0;
let zweiteZahl = 0;
let operand = "";
let welcheZahlMussIchEingeben = "ersteZahl";
let resultAnzeige = document.querySelector(".result");

// NUMBER
const enterNumber = (number) => {
  resultAnzeige.innerText += number;
  //console.log(number);
  if (welcheZahlMussIchEingeben === "ersteZahl") {
    ersteZahl = number;
    welcheZahlMussIchEingeben = "zweiteZahl";
  } else {
    zweiteZahl = number;
    welcheZahlMussIchEingeben = "ersteZahl";
  }
  console.log(number);
};

//  OPERAND
const einerZeichen = (zeichen) => {
  operand = zeichen;
  resultAnzeige.innerText += operand;
};

// RESET
const reset = () => {
  operand = "";
  resultAnzeige.innerText = "";
};

// CALCULATE
const calculate = () => {
  if (operand === "+") {
    result = ersteZahl + zweiteZahl;
  }
  if (operand === "-") {
    result = ersteZahl - zweiteZahl;
  }
  if (operand === "*") {
    result = ersteZahl * zweiteZahl;
  }
  if (operand === "/") {
    result = ersteZahl / zweiteZahl;
  }
  resultAnzeige.innerText = result;
  // RESET PROGRAM
    // ersteZahl = 0;
    // zweiteZahl = 0;
    // operand = "";
    // zeichen = "";
    // welcheZahlMussIchEingeben = ersteZahl;
    // result = "";
    // resultAnzeige.innerText;
};
