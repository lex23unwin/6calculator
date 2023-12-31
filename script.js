let clearButton = document.querySelector(".calculator-clear");
let deleteButton = document.querySelector(".calculator-delete");
let calculatorScreenContent = document.querySelector(".calculator-screen-content");
let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");
let equalsButton = document.querySelector(".equals");
let decimalButton = document.querySelector(".decimal");

let operand1 = "";
let operator = "";
let operand2 = "";

decimalButton.addEventListener("click", () => {
  if (operator === "") 
  {
    if (!operand1.includes(".")) 
    {
      operand1 += ".";
      calculatorScreenContent.textContent += ".";
    }
  } 
  else if (operator !== "") 
  {
    if (!operand2.includes(".")) 
    {
      operand2 += ".";
      calculatorScreenContent.textContent += ".";
    }
  }
});

equalsButton.addEventListener("click", () => {
  if (operand1 !== "" && operator !== "" && operand2 !== "") 
  {
    let result = operate(operand1, operator, operand2);
    let truncatedResult = truncateDecimal(result.toString());
    calculatorScreenContent.textContent = truncatedResult;
    operand1 = truncatedResult;
    operator = "";
    operand2 = "";
  }
});

function truncateDecimal(result) {
  return result.slice(0, 10);
}

numberButtons.forEach((eachNumber) => {
  eachNumber.addEventListener("click", () => {
    if (!isOverflow()) {
      if (operator === "") {
        operand1 += eachNumber.textContent;
        calculatorScreenContent.textContent += eachNumber.textContent;
      } 
      else if (operator !== "") 
      {
        operand2 += eachNumber.textContent;
        calculatorScreenContent.textContent += eachNumber.textContent;
      }
    }
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    if (operator === "") 
    {
      operator = operatorButton.textContent;
      calculatorScreenContent.textContent += operatorButton.textContent;
    } 
    else 
    {
      // If an operator is already set, calculate the result
      if (operand1 !== "" && operand2 !== "") 
      {
        let result = operate(operand1, operator, operand2);
        let truncatedResult = truncateDecimal(result.toString());
        calculatorScreenContent.textContent = truncatedResult;
        operand1 = truncatedResult;
        operator = operatorButton.textContent;
        operand2 = "";
      }
    }
  });
});

clearButton.addEventListener("click", () => {
  calculatorScreenContent.textContent = "";
  clearAll();
});

deleteButton.addEventListener("click", () => {
  calculatorScreenContent.textContent = calculatorScreenContent.textContent.slice(0, -1);
});

function clearAll() {
  operand1 = "";
  operator = "";
  operand2 = "";
}

function isOverflow() {
  return calculatorScreenContent.textContent.length > 12;
}

function add(op1, op2) 
{
  return parseFloat(op1) + parseFloat(op2);
}

function subtract(op1, op2) 
{
  return parseFloat(op1) - parseFloat(op2);
}

function multiply(op1, op2) 
{
  return parseFloat(op1) * parseFloat(op2);
}

function divide(op1, op2) 
{
  return parseFloat(op1) / parseFloat(op2);
}

function operate(op1, operator, op2) 
{
  if (operator === "+") 
  {
    return add(op1, op2);
  } 
  else if (operator === "-") 
  {
    return subtract(op1, op2);
  } 
  else if (operator === "*") 
  {
    return multiply(op1, op2);
  } 
  else if (operator === "/" && op2 !== "0") 
  {
    return divide(op1, op2);
  } 
  else {
    return "Error";
  }
}