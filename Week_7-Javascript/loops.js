//loops
/*
//infinte loops
while (true) {


*/
//go backward to - 10 
/*
var counter = 0;
console.log("hello " + counter);

while (counter >= -10) {
    console.log("while loop: value of counter inside " + counter);
    counter = counter - 1;
    console.log("while loop: value of counter inside " + counter);
}

//For loop counting
for (var counter = 0; counter >= 10; counter = counter + 1) {
    console.log("For loop: value of counter inside " + counter + ".");
}
for (var i = 0; i <= 100; i++) {
    console.log("this is how many letter i will be: " + i);
}

//string counting
var string = "Hello there, how are you, I am not fine. I have an emotional feeling.";
var mCount = 0;
//var stringLength =string.length;
//console.log("print letter number is: " + stringLength);
// Print every single letter in the sentence
for (var i = 0; i < string.length; i++) {
    console.log("print letter number is: " + string[i]);
    if (string[i] == "m" || string[i] == "M") {
        mCount = mCount + 1;
    }
}
console.log("The String " + string + " has " + mCount + " m's in");
*/
//var string = "The Department of Justice on Friday gave its approval for T-Mobile and Sprint to merge, in what has been a protracted fight for the companies to finalize their $26 billion deal. The merger still faces a review by a federal district court, and consumer advocates worry the industry consolidation will lead to higher rates. The resulting company, which would be known as T-Mobile, would be the third-largest U.S. wireless carrier, with about 90 million customers. In pushing for the deal, executives of the companies said the combined entity would invest more heavily to bring superfast Internet connectivity, or 5G, to market quicker. In order to clear the final federal regulatory hurdle, the companies had to agree to sell off some assets to Dish Network, including wireless spectrum and Sprint's prepaid phone business, Boost Mobile. That would effectively make Dish the country's fourth-largest wireless carrier, although it would continue to rely on T-Mobile for use of its network";

function letterCounter(string, lowerCase) {
    var letterCounter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == lowerCase ) {
            letterCounter++;
        }
    }
    console.log("we found " + letterCounter + " " + lowerCase + " letter inside the text");
}

letterCounter("The Department of Justice on Friday gave its approval for T-Mobile and Sprint to merge, in what has been a protracted fight for the companies to finalize their $26 billion deal. The merger still faces a review by a federal district court, and consumer advocates worry the industry consolidation will lead to higher rates. The resulting company, which would be known as T-Mobile, would be the third-largest U.S. wireless carrier, with about 90 million customers. In pushing for the deal, executives of the companies said the combined entity would invest more heavily to bring superfast Internet connectivity, or 5G, to market quicker. In order to clear the final federal regulatory hurdle, the companies had to agree to sell off some assets to Dish Network, including wireless spectrum and Sprint's prepaid phone business, Boost Mobile. That would effectively make Dish the country's fourth-largest wireless carrier, although it would continue to rely on T-Mobile for use of its network", "o", "O");
letterCounter("The Department of Justice on Friday gave its approval for T-Mobile and Sprint to merge, in what has been a protracted fight for the companies to finalize their $26 billion deal. The merger still faces a review by a federal district court, and consumer advocates worry the industry consolidation will lead to higher rates. The resulting company, which would be known as T-Mobile, would be the third-largest U.S. wireless carrier, with about 90 million customers. In pushing for the deal, executives of the companies said the combined entity would invest more heavily to bring superfast Internet connectivity, or 5G, to market quicker. In order to clear the final federal regulatory hurdle, the companies had to agree to sell off some assets to Dish Network, including wireless spectrum and Sprint's prepaid phone business, Boost Mobile. That would effectively make Dish the country's fourth-largest wireless carrier, although it would continue to rely on T-Mobile for use of its network", "g", "G");