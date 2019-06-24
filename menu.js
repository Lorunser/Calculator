//imports
const userInput = require('./userInput');

exports.ARITHMETIC_MODE = '1';
exports.VOWEL_COUNTING_MODE = '2';

exports.printWelcomeMessage = function(){
    console.log("Welcome to the calculator!");
    console.log("==========================");
}

exports.getMenuChoice = function(){
    //function for printing and retrieving menu option
    console.log("Calculator Mode?");
    console.log(`${exports.ARITHMETIC_MODE}) Arithmetic`);
    console.log(`${exports.VOWEL_COUNTING_MODE}) Vowel Counting`)
    return userInput.getString();
}