// Operation functions
function plus(rightOperand) {
    return function (leftOperand) {
        return leftOperand + rightOperand;
    };
}

function minus(rightOperand) {
    return function (leftOperand) {
        return leftOperand - rightOperand;
    };
}

function dividedBy(rightOperand) {
    return function (leftOperand) {
        return ~~(leftOperand / rightOperand);
    };
}

// Number functions
function zero(operation) {
    if (!operation) return 0;
    return operation(0);
}

function one(operation) {
    if (!operation) return 1;
    return operation(1);
}

function two(operation) {
    if (!operation) return 2;
    return operation(2);
}

function three(operation) {
    if (!operation) return 3;
    return operation(3);
}

function four(operation) {
    if (!operation) return 4;
    return operation(4);
}

function six(operation) {
    if (!operation) return 6;
    return operation(6);
}


function five(operation) {
    return operation ? operation(5) : 5
}

const seven = operation => operation ? operation(7) : 7;


// const times = a => b => a * b

function times(rightOperand) {
    return function (leftOperand) {
        return leftOperand * rightOperand;
    };
}

console.log(seven(times(five()))); // 35


function eight(operation) {
    if (!operation) return 8;
    return operation(8);
}

function nine(operation) {
    if (!operation) return 9;

    return operation(9);
}

// Test examples

console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
console.log(eight(dividedBy(three()))); // 2
