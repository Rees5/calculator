var number = function(number1, number2) {
return number1, number2;
}
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var operator = function(operator) {
return operator
}
var operator = prompt("Enter operator as either +, -, / or*");
if(operator === "+") {
	var add = function(number1, number2) {
	return number1 + number2;
	}
	var result= add(number1, number2);
	alert(result);
} else if(operator === "-") {
	var subtract = function(number1, number2) {
	return number1 - number2;
	}
	var result= subtract(number1, number2);
	alert(result);
} else if(operator === "/") {
	var divide = function(number1, number2) {
	return number1 / number2;
	}
	var result= divide(number1, number2);
	alert(result);
} else {
	var multiply = function(number1, number2) {
	return number1 * number2;
	}
	var result= multiply(number1, number2);
	alert(result);
}
