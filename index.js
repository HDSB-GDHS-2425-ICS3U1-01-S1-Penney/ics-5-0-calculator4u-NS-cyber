// NAME: Neev Shah
 // Date: september 16th, 2024
// Title: Calculator  




// collect user information for calculation 


operation = prompt("What operation do you want to use? (+, -, /, *, pow, or sqrt)")

let x= 0;
let y= 0;

if (operation == "sqrt") {
    x = prompt("What is the number you wish to find the sqrt of?");
} else if (operation != "sqrt") {
    x = prompt("What is the first number?"); 
    y = prompt("What is the second number?");
}
// this converts the x and y values from a string to an intger 

x = parseFloat(x);
y = parseFloat(y);

let result;

//if x and y are not integers the users will be promted with an error
if (!Number.isInteger(operation)) {
    alert('please enter a valid operation to continue')
}

if (!Number.isInteger(x)) {
    alert("Please enter a valid integer for your first number");
}   

if (!Number.isInteger(y)) {
    alert("Please enter a valid integer for your second number");
}   

// Giving the results to the users depending on the operation they entered

if (operation == "+") {
    result = x + y;
} else if (operation == "-") {
    result = x - y;
} else if (operation == "*") {
    result = x * y;
} else if (operation == "/") {
    result = x / y;
} else if (operation == "pow") {
   result = Math.pow(x, y);
} else if (operation == "sqrt") {
    result = Math.sqrt(x)
}
else alert("")

console.log(result);
