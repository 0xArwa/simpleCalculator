/* Javascript calculator
code written by : @ 0 x A r w a
 */
let dig;
function showDigit(digit){
    dig = document.getElementById("result").innerHTML = digit;
    return dig;
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
