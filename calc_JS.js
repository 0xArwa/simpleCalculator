/* Javascript calculator
code written by : @ 0 x A r w a
 */
let dig;
function showDigit(digit){
   dig = document.getElementById("result").innerHTML += digit;
}
function clearAll (){
    document.getElementById("result").innerHTML = '';
}
function sqrt() {
    document.getElementById("result").innerHTML += '&radic;';
}
function calculate() {
    if(dig.match(/^[0-9]+$/) != null) {
        document.getElementById("result").innerHTML = 'use an operator first';
    }if(dig.match(/&radic;/)){
        dig.replace('&radic;','');
        document.getElementById("result").innerHTML =  eval(Math.sqrt(document.getElementById("result").innerHTML));
        console.log(dig);
    }else{
        try {
            document.getElementById("result").innerHTML = eval(document.getElementById("result").innerHTML);
        }catch (e) {
            console.error(e);
            document.getElementById("result").innerHTML = 'not an expression';
        }
    }
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
