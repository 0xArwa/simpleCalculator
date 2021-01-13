/* Javascript calculator
code written by : @ 0 x A r w a
 */
let dig;
let button =  document.getElementById("result");
let count = 0;
button.onclick = updateResult();
function showDigit(digit){
        dig =  document.getElementById("result").innerHTML = digit;
        return dig + '';
}
/* logically i need to store the number after each click 
modify the code do it woulf reseve the numbers based on 
numbers of clicks using a count --- very importnant must finish soon
 */
function updateResult() {
    button.textContent = dig;
}
const clearAll =() => {
    return document.getElementById("result").innerHTML = '';
}
const calculateAddition = (num1 , num2) => {
    return num1 + num2;
}

const calculateSubtraction= (num1 , num2) => {
    return num1 - num2;
}

const calculateMultiply= (num1 , num2) => {
    return num1 * num2;
}

const calculateDivition = (num1 , num2) => {
    return num1 / num2;
}

const calculatePower = (num1 , num2) => {
    return num1 ** num2;
}

const calculateExponent = (num1 , num2) => {
    return num1 + num2;
}

const calculateSquareRoot = (num1) => {
    return Math.sqrt(num1);
}
