var readlineSync = require('readline-sync');
var userName = readlineSync.question('may i have your name?')
console.log('Hi' + userName + '!');