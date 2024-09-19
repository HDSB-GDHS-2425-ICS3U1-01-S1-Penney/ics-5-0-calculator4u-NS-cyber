// NAME: Neev Shah
// Date: september 16th, 2024
// Title: Add Two Words Together 



operation = prompt("What operation do you want to use? (+, -, /, *, sqrt, pow)");

let x = prompt("What is x?");
let y;

if (operation === "pow") {
    y = prompt("What is y?");
}

x = parseFloat(x);
if (y !== undefined) {
    y = parseFloat(y);
}

let result;

// Error handling for invalid input
if (isNaN(x) || (y !== undefined && isNaN(y))) {
    alert("Please enter valid numbers for x and y.");
} else if (operation === "/" && y === 0) {
    alert("Division by zero is not allowed.");
} else {
    if (operation === "+") {
        result = x + y;
    } else if (operation === "-") {
        result = x - y;
    } else if (operation === "*") {
        result = x * y;
    } else if (operation === "/") {
        result = x / y;
    } else if (operation === "sqrt") {
        if (x < 0) {
            alert("Cannot compute the square root of a negative number.");
        } else {
            result = Math.sqrt(x);
        }
    } else if (operation === "pow") {
        result = Math.pow(x, y);
    } else {
        alert("Invalid operation.");
    }
}

if (result !== undefined) {
    console.log(result);
}


