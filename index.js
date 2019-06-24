const readline = require('readline-sync');

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

function performOneCalculation(){
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

function printWelcomeMessage(){
    console.log("Welcome to the calculator!");
    console.log("==========================");
}

function main(){
    printWelcomeMessage();
    while (true){
        performOneCalculation();
    }
}

main();


