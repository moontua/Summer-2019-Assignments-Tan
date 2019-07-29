var exampleString = "This is the sentence that will be modified";

var arrayOfCharacters = exampleString.split("");
//index characters
arrayOfCharacters[1] = "H";
arrayOfCharacters[3] = "S";
arrayOfCharacters[5] = "I";
arrayOfCharacters[7] = " ";
arrayOfCharacters[9] = "H";
console.log(arrayOfCharacters);
var newString = arrayOfCharacters.join("");
console.log(newString);
console.log(arrayOfCharacters);
/*
//loop array of characters
exampleString.length;
arrayOfCharacters.length;
for (var i = 0; i < arrayOfCharacters.length; i++) {
    console.log(arrayOfCharacters[i]);
}
//capitalize each letter
exampleString.length;
arrayOfCharacters.length;
for (var i = 0; i < arrayOfCharacters.length; i= i +2) {
    console.log(arrayOfCharacters[i]);
    // var arrayOfCharacter = arrayOfCharacter[i];
    //grabs original character array, capitalizes it, and updates the array of the same items 
    arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();
}
var newString = arrayOfCharacters.join("");
console.log(newString);
*/
exampleString.length;
arrayOfCharacters.length;
for (var i = 0; i < arrayOfCharacters.length; i = i++) {
    // = 1 for odd and = 0 for even
    if (i % 2 == 1) {
        console.log(arrayOfCharacters[i]);
        arrayOfCharacters[i] = arrayOfCharacters[i].toUpperCase();

    } else {
        continue; //once the loop reaches this, stop and go to next loop
        //breaks; once the loop raches this, stop thw whole loop.
    }
    console.log(newString);
}