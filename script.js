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

let operatorStore = ("");

operator.forEach(function(operator) {
    operator.addEventListener ('click', function(event) {
        operatorStore = operator.textContent;
        console.log(operatorStore);
    });
    return operatorStore;
});

let a = [];
let b = [];

number.forEach(function(number) {
    number.addEventListener ('click', function(event) {
        if (operatorStore === ("")) {
            a.push(number.textContent);
            console.log(a);
        } else {
            b.push(number.textContent);
            console.log(b);
        };
    });
});

equals.addEventListener ('click', function(event) {
    a = Number(a.join(''));
    b = Number(b.join(''));
    if (operatorStore === "+") {
        console.log(add(a,b));
    } else if (operatorStore === "-") {
        console.log(subtract(a,b));
    } else if (operatorStore === "/") {
        console.log(divide(a,b));
    } else if (operatorStore === "%") {
        console.log(remainder(a,b));
    } else if (operatorStore === "*") {
        console.log(multiply(a,b));
    }
})

// if (operatorStore === "") {
//     number.forEach(function(number) {
//         number.addEventListener ('click', function(event) {
//             a.push(number.textContent);
//             console.log(a);
//         });
//     });
// } else {
//     number.forEach(function(number) {
//         number.addEventListener ('click', function(event) {
//             b.push(number.textContent);
//             console.log(b);
//         });
//     });
// }
