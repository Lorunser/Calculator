function getFloat(prompt){
    console.log(prompt + " :");
    var ans = readline.prompt();
    ans = parseFloat(ans);
    return ans;
}

function getString(prompt){
    console.log(prompt + " :");
    var ans = readline.prompt();
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
        default:
            console.log("Unsupported operator")
    }

    return c;
}


function main(){
    while (true){
        var op = getString("Operator");
        
        var a = getFloat("Number A");
        var b = getFloat("Number B");  

        var c = applyOperator(a,b,op);
        console.log("A " + op + " B = " + String(c));
    }
}


const readline = require('readline-sync');
console.log("Welcome to the calculator!");
console.log("--------------------------");
main();


