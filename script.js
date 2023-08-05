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









