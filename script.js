let clearButton = document.querySelector(".calculator-clear")
let deleteButton = document.querySelector(".calculator-delete")
let calculatorScreen = document.querySelector(".calculator-screen")

clearButton.addEventListener("click", () => {
    calculatorScreen.textContent = ""
})

deleteButton.addEventListener("click", () => {
    calculatorScreen.textContent = 
        calculatorScreen.textContent.slice(0, -1);
})

let operand1;
let operator;
let operand2;

function add(x,y)
{
    return x + y;
}

function subtract(x,y)
{
    return x - y;
}

function multiply(x,y)
{
    return x * y;
}

function divide(x,y)
{
    return x / y;
}

function operate(operand1, operator, operand2)
{
    if (operator === "+")
    {
        add(operand1,operand2)
    }
    else if (operator === "-")
    {
        subtract(operand1, operand2)
    }
    else if (operator === "*")
    {
        multiply(operand1, operand2)
    }
    else if (operator === "/")
    {
        divide(operand1, operand2)
    }
}




