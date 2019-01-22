var readlineSync = require('readline-sync')
var numOne = readlineSync.question('Please enter a number');
var numTwo = readlineSync.question('Please enter another number');
var operator = readlineSync.question('Please enter an operator (+, - , / , * )');



if (operator == '+')
{console.log(parseInt(numOne) + parseInt(numTwo))}
else if( operator == '-') 
{console.log(parseInt(numOne) - parseInt(numTwo))}
else if (operator == '/')
{console.log( parseInt(numOne)/parseInt(numTwo))}
else if (operator == '*')
{console.log( parseInt(numOne) * parseInt(numTwo))}

