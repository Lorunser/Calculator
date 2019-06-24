//imports
const userInput = require('./userInput');

exports.performVowelCounting = function(){
    var text = userInput.getString("Input string");
    var vowels = {'A' : 0, 'E' : 0, 'I' : 0, 'O' : 0, 'U' : 0};

    for(c of text){
        var upperChar = c.toUpperCase();
        if(vowels[upperChar] != null){
            vowels[upperChar]++;
        }
    }

    console.log(vowels);
}