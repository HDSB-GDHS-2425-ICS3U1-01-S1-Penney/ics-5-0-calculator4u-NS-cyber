// NAME: Neev Shah
 // Date: september 16th, 2024
// Title: Calculator  




operation = prompt("What operation do you want to use? (+, -, /, *, pow, or Sqrt)")

if (operation = "sqrt") {
    prompt("What is x?");
} else if (operation != "sqrt") {
    prompt("What is x?"); 
    prompt("What is y");
}
let x = prompt("What is x?");
let y = prompt("What is y?");

x = parseFloat(x);
y = parseFloat(y);

let result;

if (!Number.isInteger(x)) {
    alert("Please enter a valid integer for x");
}   

if (!Number.isInteger(y)) {
    alert("Please enter a valid integer for y");
}   

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
    result = Math. sqrt(x)
}
else alert("")

console.log(result);



/* Setting a number for x and a letter for y results in NaN but is different vice versa. 

If the program reads the first number as an integer, the proper error message appears, but
if x is an integer while y is not, NaN appears*/