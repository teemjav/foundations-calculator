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

const a = document.querySelectorAll(".number");
const operator = document.querySelector(".operator");
const b = document.querySelectorAll(".number");

let aNumber = [];
if (!operator) {
    for (let i=0; i<=10; i++)
        aNumber[i] = a.textContent;
};


