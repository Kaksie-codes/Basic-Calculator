//store all the requires html elements in our javascript
    const clearBtn = document.querySelector('#clear-btn');
    const equalBtn = document.querySelector('.equal');
    const decimal = document.querySelector('.decimal');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const previousScreen = document.querySelector('.previous');
    const currentScreen = document.querySelector('.current');

    
let operator = '';
let currentValue = '';
let previousValue  = '';

numbers.forEach(num => {
    num.addEventListener('click', () => {        
        const {innerText:number} = num;
        handleInput(number)
    })
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        const {textContent:operator} = op;
        handleInput(operator);
    })
})

equalBtn.addEventListener('click', () => {
    currentValue = calculate();
    previousValue = '';
    operator = '';
    updateScreen();
})

clearBtn.addEventListener('click', () => {
    currentValue = '';
    previousValue = '';
    operator = '';
    updateScreen();
})

decimal.addEventListener('click', () => {
    if(currentValue.includes('.')) return
    currentValue += '.';
    updateScreen()
})

function handleInput(input){
    
    if(!isNaN(input)){ 
        if(currentValue.length > 14) return       
         currentValue+=input;
         updateScreen();
    }else{
        if(!currentValue) return
        operator = input;
        previousValue = currentValue;
        currentValue = '';
        updateScreen();
    }
}
function updateScreen(){
    currentValue = currentValue.toString();
    previousValue = previousValue.toString();
    currentScreen.textContent = currentValue;
    previousScreen.textContent = previousValue + " " + operator;
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if(operator === '-'){
        return previousValue - currentValue;
    }else if(operator === '+'){
        return previousValue + currentValue;
    }else if(operator === 'X'){
        return previousValue * currentValue;
    }else{
        return previousValue / currentValue;
    }
}
