/*
Things not implemented: (may be revisited in the future!)
- X (backspace) button
- decimal button
- "error" when multiple operators are used (e.g. 9%/3)
- distinction between +3 as a positive integer and +3 as a function?
- keyboard support
*/

const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const multiply = function (a,b) {
    return a*b;
};

const divide = function (a,b) {
    return a/b;
};

const remainder = function (a,b) {
    return a%b;
}

const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals")
const output = document.querySelector("#output");
const calculation = document.querySelector("#calculation")
const clear = document.querySelector("#clear");

let a = [[]];
let currentIndex = 0;

number.forEach(function(number) {
    number.addEventListener ('click', function(event) {
            a[currentIndex].push(number.textContent);
            output.textContent += (number.textContent);
            console.log(a[currentIndex]);   
    });
});

let operatorStore = [[]];
let operatorIndex = 0;

operator.forEach(function(operator) {
    operator.addEventListener ('click', function(event) {
        operatorStore[operatorIndex] = operator.textContent;
        output.textContent += (operator.textContent);
        console.log(operatorStore[operatorIndex]);
        a[currentIndex] = Number(a[currentIndex].join(''));
        currentIndex++;
        a.push([]);
        operatorIndex++;
        operatorStore.push([]);
    });
});


equals.addEventListener ('click', function(event) {
    a[currentIndex] = Number(a[currentIndex].join(''));
    output.textContent += (equals.textContent);
    calculation.textContent = (output.textContent);
    output.textContent = ("");
    result=a[0];
    for (let i=0; i<operatorIndex; i++) {
        if (operatorStore[i] === "+") {
            result = add(result,a[i+1])   ;
        } else if (operatorStore[i] === "-") {
            result = subtract(result,a[i+1]);
        } else if (operatorStore[i] === "/") {
            result = divide(result,a[i+1]);
        } else if (operatorStore[i] === "%") {
            result = remainder(result,a[i+1]);
        } else if (operatorStore[i] === "*") {
            result = multiply(result,a[i+1]);
        }
    }
    console.log(result);
    output.textContent += Number(result.toFixed(5));
    a=[[]]; 
    str = result.toString(); 
    a[0] = str.split('');
    currentIndex=0;
    operatorStore=[];
    operatorIndex=0;

});

clear.addEventListener ('click', function(event) {
    a=[[]];
    currentIndex=0;
    operatorStore=[[]];
    operatorIndex=0;
    output.textContent="";
    calculation.textContent="";
});