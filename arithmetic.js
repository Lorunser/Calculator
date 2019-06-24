//imports
const userInput = require('./userInput');

exports.applyOperator = function(a, b, op){
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

exports.performArithmetic = function(){
    var operator = userInput.getString("Operator");

    var num_operands = userInput.getInt("Number of operands");
    var operand_array = Array(num_operands);

    for(var i = 0; i < num_operands; i++){
        var operand_i = userInput.getFloat("Number " + String(i + 1));
        operand_array[i] = operand_i;
    }
    
    var result = operand_array[0]
    for (var i = 1; i < num_operands; i++){
        result = exports.applyOperator(result, operand_array[i], operator)
    }

    console.log("Result = " + String(result));
}