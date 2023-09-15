let primaryNumber = null;
let secondNumber = null;
let currentOperator = null;

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".op");
let screen = document.querySelector(".screen .display-1");
let resetBtn = document.querySelector(".reset");
let resultBtn = document.querySelector(".result");

screen.textContent = "";

numbers.forEach(currentItem => {
    currentItem.addEventListener("click", (e) => {
        let n = currentItem.querySelector(".display-1").textContent;

        if (n === ".") {
            if (screen.textContent.endsWith('.')) return;
            if (screen.textContent.split(currentOperator).pop().includes('.')) return;
            if (screen.textContent === "" || (currentOperator && screen.textContent.endsWith(currentOperator))) {
                n = "0.";
            }
        }
        
        screen.textContent += n;
    });
});

function containsOperator() {
    let con = screen.textContent.split(currentOperator);
    return (con[1] !== "" && con.length > 1);
}

operators.forEach(currentItem => {
    let op = currentItem.querySelector(".display-1").textContent;
    
    currentItem.addEventListener("click", (e) => {
        if (!screen.textContent) {
            console.log("nn pode clicar nesse elemento sem adicionar numeros !!!");
        } else if (containsOperator()) {
            console.log("So pode clicar em um operador por calculo !!!");
        } else if (currentOperator !== null) {
            screen.textContent = screen.textContent.replace(currentOperator, op);
            currentOperator = op;
        } else {
            primaryNumber = screen.textContent;
            currentOperator = op;
            
            if (screen.textContent.endsWith('.')) {
                screen.textContent += "0";
            }
            
            screen.textContent += op;
        }
    });
});

resetBtn.addEventListener("click", resetCalculator);

function resetCalculator() {
    screen.textContent = "";
    primaryNumber = null;
    currentOperator = null;
}

resultBtn.addEventListener("click", (e) => {
    if (primaryNumber && currentOperator) {
        let parts = screen.textContent.split(currentOperator);
        secondNumber = parts[1] === "" ? 0 : parts[1];
        let finalResult = operate();
        resetCalculator();
        screen.textContent = finalResult;
    } else {
        console.log("Digite os numeros e o operador de calculo corretamente !!!");
        console.log(secondNumber);
    }
});

function operate() {
    let num1 = parseFloat(primaryNumber);
    let num2 = parseFloat(secondNumber);

    switch (currentOperator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return (num1 / num2).toString();
    }
};