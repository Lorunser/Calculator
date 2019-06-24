//imports
const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');
const menu = require('./menu');

function main(){
    menu.printWelcomeMessage();
    var menuChoice;

    while (true){
        menuChoice = menu.getMenuChoice();
        switch(menuChoice){
            case menu.ARITHMETIC_MODE:
                arithmetic.performArithmetic();
                break;
            case menu.VOWEL_COUNTING_MODE:
                vowelCounting.performVowelCounting();
                break;
            default:
                console.log("Incorrect choice. Try again")
        }
        console.log();
    }
}

main();