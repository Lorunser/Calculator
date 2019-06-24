//#region constant declarations
const readline = require('readline-sync');
const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';
//#endregion

//#region input methods
function getString(prompt){
    console.log(prompt + " :");
    var ans = readline.prompt();
    return ans;
}

function getFloat(prompt){
    var ans = getString(prompt);
    
    if (isNaN(ans)){
        console.log("Not a Number. Try again");
        return getFloat(prompt);
    }

    else{
        ans = parseFloat(ans);
        return ans;
    }
}

function getInt(prompt){
    var ans = getFloat(prompt);
    ans = parseInt(ans);
    return ans;
}
//#endregion

function applyOperator(a, b, op){
    var c = 0;

    switch(op){
        case "+":
            c = a + b;
            break;
        case "-":
            c = a - b;
            break;
        case "/":
            c = a / b;
            break;
        case "*":
            c = a * b;
            break;
        default:
            console.log("Unsupported operator")
    }

    return c;
}

function performArithmetic(){
    var operator = getString("Operator");

        var num_operands = getInt("Number of operands");
        var operand_array = Array(num_operands);

        for(var i = 0; i < num_operands; i++){
            var operand_i = getFloat("Number " + String(i + 1));
            operand_array[i] = operand_i;
        }
        
        var result = operand_array[0]
        for (var i = 1; i < num_operands; i++){
            result = applyOperator(result, operand_array[i], operator)
        }

        console.log("Result = " + String(result));
}

function performVowelCounting(){
    var text = getString("Input string");
    var vowels = {'A' : 0, 'E' : 0, 'I' : 0, 'O' : 0, 'U' : 0};

    for(c of text){
        var upperChar = c.toUpperCase();
        if(vowels[upperChar] != null){
            vowels[upperChar]++;
        }
    }

    console.log(vowels);
}

function printWelcomeMessage(){
    console.log("Welcome to the calculator!");
    console.log("==========================");
}

function getMenuChoice(){
    //function for printing and retrieving menu option
    console.log("Calculator Mode?");
    console.log(`${ARITHMETIC_MODE}) Arithmetic`);
    console.log(`${VOWEL_COUNTING_MODE}) Vowel Counting`)
    return readline.prompt();
}

function main(){

    printWelcomeMessage();
    var menuChoice;

    while (true){
        menuChoice = getMenuChoice();
        switch(menuChoice){
            case ARITHMETIC_MODE:
                performArithmetic();
                break;
            case VOWEL_COUNTING_MODE:
                performVowelCounting();
                break;
            default:
                console.log("Incorrect choice. Try again")
        }
        console.log();
    }
}


main();


