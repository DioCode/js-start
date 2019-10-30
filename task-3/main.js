let num1 = parseInt(prompt("Type first number"));
let num2 = parseInt(prompt("Type second number"));
let operation = prompt("Type operation");
let result;

if (operation == "+") {
  result = num1 + num2;
} else if (operation == "/") {
  result = num1 / num2;
} else if (operation == "*") {
  result = num1 * num2;
} else if (operation == "-") {
  result = num1 - num2;
}

console.log("Your result is: " + result);