var readlineSync = require('readline-sync')
var numOne = readlineSync.question('Please enter a number');
numOne = parseInt(numOne);
var numTwo = readlineSync.question('Please enter another number');
numTwo = parseInt(numTwo);
var operator = readlineSync.question('Please enter an operator (+, - , / , * )');


var addFunc = (operator, numOne,numTwo) => console.log(eval(numOne + operator + numTwo));
addFunc(operator, numOne,numTwo);


