//imports
const readline = require('readline-sync');

exports.getString = function(prompt){
    if (prompt != null){
        console.log(prompt + " :");
    }
    var ans = readline.prompt();
    return ans;
}

exports.getFloat = function(prompt){
    var ans = exports.getString(prompt);
    
    if (isNaN(ans)){
        console.log("Not a Number. Try again");
        return exports.getFloat(prompt);
    }

    else{
        ans = parseFloat(ans);
        return ans;
    }
}

exports.getInt = function(prompt){
    var ans = exports.getFloat(prompt);
    ans = parseInt(ans);
    return ans;
}