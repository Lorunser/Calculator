const readline = require('readline-sync');
console.log("Welcome to the calculator!");

console.log("Number A: ");
var a = readline.prompt();
a = parseFloat(a);

console.log("Number B: ");
var b = readline.prompt();
b = parseFloat(b);

var c = a * b;
console.log("A * B = " + String(c));
