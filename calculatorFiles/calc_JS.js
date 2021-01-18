/* Javascript calculator
code written by : @ 0 x A r w a
 */
/**/
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
    //if only number there should be no result
    if(dig.match(/^[0-9]+$/) != null) {
        document.getElementById("result").innerHTML = 'use an operator first';
    }else{
        try {
            //to calculate sqrt
            if(dig.match(/√/)) {
                dig = dig.replaceAll(/√/g, '');
                document.getElementById("result").innerHTML = (Math.sqrt(dig));
                //console.log(Math.sqrt(25)); test value worked

            }else if(dig.match(/\u00F7/g)) {
               dig = dig.replaceAll(/\u00F7/g,'/');
                if(dig.match('/ 0')) {
                    //if number divided by zero then result = undefined
                    document.getElementById("result").innerHTML = 'undefined';
                }else {
                    document.getElementById("result").innerHTML = eval(dig);
                    }
            }else{
                document.getElementById("result").innerHTML = eval(dig);
            }
            }catch (e) {
                console.error(e);
                document.getElementById("result").innerHTML = 'not an expression';
            }
        }
    }




















