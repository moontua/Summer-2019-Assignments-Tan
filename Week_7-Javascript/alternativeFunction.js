//var exampleString = "This is the sentence that will be modified";
function alternativeCaps(string) {
    string = string.toLowerCase();
    //split string into an array.
    var arrayOfCharacters = string.split("");
    //go to each items of the array
    for (var i = 0; i < arrayOfCharacters.length; i++) {
        if (i % 2 == 1) {
            // ... change the current item to a capitalize version, and store it in the same place
            arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();
        }
    }
    var modifiedString = arrayOfCharacters.join("");
    console.log(modifiedString);
}
alternativeCaps("hello World..");


//// other options
//var exampleString = "This is the sentence that will be modified";
var stringInput = process.argv[2];
//console.log(process.argv);
function alternativeCaps(string) {
    string = string.toLowerCase();
    //split string into an array.
    var arrayOfCharacters = string.split("");
    //go to each items of the array
    for (var i = 0; i < arrayOfCharacters.length; i++) {
        if (i % 2 == 1) {
            // ... change the current item to a capitalize version, and store it in the same place
            arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();
        }
    }
    var modifiedString = arrayOfCharacters.join("");
    console.log(modifiedString);
}
if (stringInput == undefined) {
    alternativeCaps("pleae type in a sentence surrended by quotes after node command, EX: node filename.js hellohowareyouiamwell -->");
} else if (typeof stringInput == "string") {
    alternativeCaps(stringInput);
}