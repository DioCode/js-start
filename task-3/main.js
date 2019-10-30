let num1 = prompt("Type first number");
let num2 = prompt("Type second number");
let operation = prompt("Type operation");
let result;

if (operation == "+") {
  result = Number.parseInt(num1) + Number.parseInt(num2);
} else if (operation == "/") {
  result = Number.parseInt(num1) / Number.parseInt(num2);
} else if (operation == "*") {
  result = Number.parseInt(num1) * Number.parseInt(num2);
} else if (operation == "-") {
  result = Number.parseInt(num1) - Number.parseInt(num2);
}

console.log("Your result is: " + result);