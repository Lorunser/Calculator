//imports
const userInput = require('./userInput');
var operator = "";

function applyOperator(a, b){
    var c = 0;

    switch(operator){
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
            throw "Unsupported Operator";
    }

    return c;
}

function isNotZero(value){
    return value != 0;
}

exports.performArithmetic = function(){
    var validOperator = false;

    while (!validOperator){
        operator = userInput.getString("Operator");
        
        try{
            applyOperator(1,1);
            validOperator = true;
        }
        catch(e){
            console.log(e)
        }
    }


    var num_operands = userInput.getInt("Number of operands");
    var operand_array = Array(num_operands);

    for(var i = 0; i < num_operands; i++){
        var operand_i = userInput.getFloat("Number " + String(i + 1));
        operand_array[i] = operand_i;
    }
    
    //remove zeros if division
    if (operator == "/"){
        operand_array = operand_array.filter(isNotZero);
    }

    var result = operand_array.reduce(applyOperator);
    console.log("Result = " + String(result));
}